import { type FC } from 'react'

// interface
interface IProps {
  params: Promise<{ id: string }>
}

// component
const BookPage: FC<Readonly<IProps>> = async (props) => {
  const { params } = props
  const { id } = await params

  // return
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Деталі книги</h1>
      <p>ID книги: {id}</p>
      <div className='rounded-lg border p-6'>
        <p>Тут буде детальна інформація про книгу</p>
      </div>
    </div>
  )
}

// revalidate every 30 seconds
export const revalidate = 30

export default BookPage
