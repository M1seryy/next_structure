import { type FC } from 'react'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { BookModule } from '@/app/modules/book'
import { bookByIdQueryApi, popularBooksQueryApi } from '@/app/entities/api'

// interface
interface IProps {
  params: Promise<{ locale: string; id: string }>
}

export const revalidate = 30
export const dynamic = 'force-static'

// generate static params for books
export async function generateStaticParams() {
  try {
    const clientQuery = getQueryClient()
    const popularBooks = await clientQuery.fetchQuery({
      queryKey: ['popular-books'],
      queryFn: (opt) => popularBooksQueryApi(opt),
    })

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
  const { id } = await props.params

  const clientQuery = getQueryClient()
  const bookData = await clientQuery.fetchQuery({
    queryKey: ['book', id],
    queryFn: (opt) => bookByIdQueryApi(opt, { id }),
  })

  // return
  return <BookModule data={bookData} />
}

export default BookPage
