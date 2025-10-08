import { type FC } from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { BookModule } from '@/app/modules/book'
import { fetchBookByWorkId, fetchPopularBooks } from '@/app/entities/api'

// interface
interface IProps {
  params: Promise<{ locale: string; id: string }>
}

export const revalidate = 30
export const dynamic = 'force-static'

// generate static params for books
export async function generateStaticParams() {
  try {
    const popularBooks = await fetchPopularBooks()

    return popularBooks
      .slice(0, 10)
      .filter((book) => book.id)
      .flatMap((book) => [
        { locale: 'en', id: book.id },
        { locale: 'uk', id: book.id },
      ])
  } catch (error) {
    console.error('Error generating static params for books:', error)
    const fallbackIds = ['OL82565W', 'OL71056W', 'OL20867W', 'OL45361W']

    return fallbackIds.flatMap((id) => [
      { locale: 'en', id },
      { locale: 'uk', id },
    ])
  }
}

// component
const BookPage: FC<Readonly<IProps>> = async (props) => {
  const { params } = props
  const { id } = await params

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['book', id],
    queryFn: () => fetchBookByWorkId(id),
  })

  // return
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BookModule bookId={id} />
    </HydrationBoundary>
  )
}

export default BookPage
