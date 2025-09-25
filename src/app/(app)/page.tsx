import { type FC } from 'react'

import { BookListModule } from '@/app/modules/book-list'

// component
const HomePage: FC = () => {
  // return
  return (
    <>
      <h1 className='text-2xl font-bold'>Книжковий магазин</h1>
      <p>Ласкаво просимо до нашого книжкового магазину!</p>

      <BookListModule searchQuery='harry potter' />
    </>
  )
}

// revalidate every 30 seconds
export const revalidate = 30

export default HomePage
