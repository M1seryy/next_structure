import { type FC } from 'react'
import { type IOpenLibraryBook } from '@/app/entities/models'
import { DetailsBlockComponent } from '@/app/features/book/block/details-block'

// interface
interface IProps {
  data: IOpenLibraryBook
}

// component
const BookModule: FC<Readonly<IProps>> = (props) => {
  const { data: book } = props

  // return
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Book Details</h1>
      <DetailsBlockComponent book={book} />
    </div>
  )
}

export default BookModule
