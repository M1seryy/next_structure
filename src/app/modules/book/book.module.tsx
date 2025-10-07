'use client'

import { type FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchBookByWorkId } from '@/app/entities/api/books'
import { DetailsBlockComponent } from '@/app/features/block/details-block'

// interface
interface IProps {
  bookId: string
  locale: string
}

// component
const BookModule: FC<Readonly<IProps>> = (props) => {
  const { bookId } = props

  const {
    data: book,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['book', bookId],
    queryFn: () => fetchBookByWorkId(bookId),
    enabled: !!bookId,
  })

  if (isLoading) {
    return (
      <div className='space-y-6'>
        <h1 className='text-3xl font-bold'>Book Details</h1>
        <div className='animate-pulse'>
          <div className='mb-4 h-8 rounded bg-gray-200'></div>
          <div className='h-64 rounded bg-gray-200'></div>
        </div>
      </div>
    )
  }

  if (error || !book) {
    return (
      <div className='space-y-6'>
        <h1 className='text-3xl font-bold'>Book Details</h1>
        <div className='py-8 text-center'>
          <p className='text-red-500'>Error loading book details</p>
        </div>
      </div>
    )
  }

  // return
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Book Details</h1>
      <DetailsBlockComponent book={book} />
    </div>
  )
}

export default BookModule
