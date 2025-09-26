import { type FC } from 'react'
import { fetchPopularBooks } from '@/app/entities/api/books'
import { BookModule } from '@/app/modules/book'

// interface for page props
interface IProps {
  params: Promise<{ id: string }>
}

// book detail page component
const BookPage: FC<Readonly<IProps>> = async (props) => {
  const { params } = props
  const { id } = await params

  // return
  return <BookModule bookId={id} />
}

export async function generateStaticParams() {
  try {
    const popularBooks = await fetchPopularBooks()

    return popularBooks.slice(0, 20).map((book) => ({
      id: book.id,
    }))
  } catch (error) {
    console.error('Error generating static params for book pages:', error)
    return []
  }
}

export const revalidate = 30

export default BookPage
