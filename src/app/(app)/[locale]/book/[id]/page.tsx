import { type FC } from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { BookModule } from '@/app/modules/book'
import { fetchBookByWorkId, fetchPopularBooks } from '@/app/entities/api'

// interface for page props
interface IProps {
  params: Promise<{ locale: string; id: string }>
}

export const revalidate = 30
export const dynamic = 'force-static'

// generate static params for books
export async function generateStaticParams() {
  try {
    const popularBooks = await fetchPopularBooks()

    const params = []
    for (const book of popularBooks.slice(0, 10)) {
      if (book.id) {
        params.push({ locale: 'en', id: book.id })
        params.push({ locale: 'uk', id: book.id })
      }
    }

    return params
  } catch (error) {
    console.error('Error generating static params for books:', error)
    const fallbackIds = ['OL82565W', 'OL71056W', 'OL20867W', 'OL45361W']

    const params = []
    for (const id of fallbackIds) {
      params.push({ locale: 'en', id })
      params.push({ locale: 'uk', id })
    }

    return params
  }
}

// component
const BookPage: FC<Readonly<IProps>> = async (props) => {
  const { params } = props
  const { locale, id } = await params

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
