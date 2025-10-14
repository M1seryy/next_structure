import { type FC } from 'react'
import Image from 'next/image'
import { type IOpenLibraryBook } from '@/app/entities/models'

// interface
interface IProps {
  book: IOpenLibraryBook
  isLoading?: boolean
}

// component
const DetailsBlockComponent: FC<Readonly<IProps>> = (props) => {
  const book = props.book
  const isLoading = props.isLoading || false

  if (isLoading) {
    return (
      <div className='rounded-lg border bg-white p-6 shadow-sm'>
        <div className='animate-pulse'>
          <div className='mb-4 h-8 rounded bg-gray-200' />
          <div className='mb-2 h-4 rounded bg-gray-200' />
          <div className='mb-4 h-4 rounded bg-gray-200' />
          <div className='h-64 rounded bg-gray-200' />
        </div>
      </div>
    )
  }

  const coverUrl =
    book.covers && book.covers.length > 0
      ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
      : 'https://placehold.co/400x600/jpg?text=No+Cover'

  const authors =
    book.authors
      ?.map((author) => {
        const authorKey = author.author.key
        const authorName = authorKey.split('/').pop()?.replace(/[A-Z]/g, ' $&').trim()
        return authorName || 'Unknown Author'
      })
      .join(', ') || 'Unknown Author'

  const subjects = book.subjects?.slice(0, 5) || []

  // return
  return (
    <div className='rounded-lg border bg-white p-6 shadow-sm'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        <div className='md:col-span-1'>
          <div className='relative aspect-[2/3] w-full overflow-hidden rounded-lg'>
            <Image
              alt={book.title}
              src={coverUrl}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </div>
        </div>

        <div className='space-y-6 md:col-span-2'>
          <div>
            <h2 className='mb-2 text-3xl font-bold text-gray-900'>{book.title}</h2>
            <p className='text-lg text-gray-600'>by {authors}</p>
            {book.first_publish_date && (
              <p className='text-sm text-gray-500'>First published: {book.first_publish_date}</p>
            )}
          </div>

          {book.description && (
            <div>
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>Description</h3>
              <p className='leading-relaxed text-gray-700'>{book.description.value}</p>
            </div>
          )}

          {subjects.length > 0 && (
            <div>
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>Subjects</h3>
              <div className='flex flex-wrap gap-2'>
                {subjects.map((subject, index) => (
                  <span key={index} className='rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800'>
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className='border-t border-gray-200 pt-4'>
            <p className='text-xs text-gray-500'>Open Library Key: {book.key}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsBlockComponent
