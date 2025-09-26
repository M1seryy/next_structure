import { type FC } from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { fetchBookByWorkId, fetchPopularBooks } from '@/app/entities/api/books'
import { type OpenLibraryBook } from '@/app/entities/models'
import { DetailsBlockComponent } from '@/app/features/block/details-block'

// interface for page props
interface IProps {
  params: Promise<{ id: string }>
}

// book detail page component
const BookPage: FC<Readonly<IProps>> = async (props) => {
  const { params } = props
  const { id } = await params

  const queryClient = getQueryClient()

  // prefetch book data
  await queryClient.prefetchQuery({
    queryKey: ['book', id],
    queryFn: () => fetchBookByWorkId(id),
  })

  // get book data
  const bookData: OpenLibraryBook = await fetchBookByWorkId(id)

  // return
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='space-y-6'>
        <h1 className='text-3xl font-bold'>Book Details</h1>
        <DetailsBlockComponent book={bookData} />
      </div>
    </HydrationBoundary>
  )
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

// revalidate every 30 seconds
export const revalidate = 30

export default BookPage
