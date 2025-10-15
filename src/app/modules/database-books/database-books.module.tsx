import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { type IDatabaseBook } from '@/app/entities/api/database'
import { CardComponent } from '@/app/shared/ui/book/card'
import { ContainerComponent } from '@/app/shared/ui/book/container'

// interface
interface IProps {
  books: IDatabaseBook[]
}

// component
const DatabaseBooksModule: FC<Readonly<IProps>> = (props) => {
  const t = useTranslations()

  // return
  return (
    <ContainerComponent>
      <div className='py-8'>
        <h1 className='mb-6 text-3xl font-bold'>{t('navigation.books')}</h1>

        {props.books.length === 0 && (
          <div className='py-8 text-center'>
            <p className='text-gray-500'>No books found in database</p>
          </div>
        )}

        {props.books.length > 0 && (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {props.books.map((book) => (
              <div key={book.id} className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm'>
                <h3 className='mb-2 text-lg font-semibold'>{book.title}</h3>
                <p className='mb-2 text-gray-600'>by {book.author}</p>
                <p className='text-sm text-gray-500'>
                  Added: {typeof book.created_at === 'string' ? new Date(book.created_at).toLocaleDateString() : '—'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ContainerComponent>
  )
}

export default DatabaseBooksModule
