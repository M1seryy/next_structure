'use client'

import { type FC, useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { fetchBooksFromDatabase, type IDatabaseBook } from '@/app/entities/api/database'
import { CardComponent } from '@/app/shared/ui/card'
import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {}

// component
const DatabaseBooksModule: FC<Readonly<IProps>> = (props) => {
  const [books, setBooks] = useState<IDatabaseBook[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const t = useTranslations()

  // Load books from database
  useEffect(() => {
    const loadBooks = async () => {
      try {
        setIsLoading(true)
        const booksData = await fetchBooksFromDatabase()
        // Take only first 4 books
        setBooks(booksData.slice(0, 4))
        setError(null)
      } catch (err) {
        setError('Database not configured. Please check Supabase setup.')
        console.error('Error loading books:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadBooks()
  }, [])

  // return
  return (
    <ContainerComponent>
      <div className='py-8'>
        <h1 className='mb-6 text-3xl font-bold'>{t('navigation.books')}</h1>

        {isLoading && (
          <div className='py-8 text-center'>
            <p className='text-lg'>{t('ui.loading')}</p>
          </div>
        )}

        {!isLoading && !error && books.length === 0 && (
          <div className='py-8 text-center'>
            <p className='text-gray-500'>No books found in database</p>
          </div>
        )}

        {!isLoading && !error && books.length > 0 && (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {books.map((book) => (
              <div key={book.id} className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm'>
                <h3 className='mb-2 text-lg font-semibold'>{book.title}</h3>
                <p className='mb-2 text-gray-600'>by {book.author}</p>
                <p className='text-sm text-gray-500'>Added: {new Date(book.created_at).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ContainerComponent>
  )
}

export default DatabaseBooksModule
