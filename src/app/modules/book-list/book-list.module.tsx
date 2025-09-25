'use client'

import { type FC, useEffect, useState } from 'react'

import { ListBlockComponent } from '@/app/features/block/list-block'

// interface
interface IProps {
  searchQuery?: string
}

// component
const BookListModule: FC<Readonly<IProps>> = (props) => {
  const { searchQuery = 'harry potter' } = props
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/books/search?q=${encodeURIComponent(searchQuery)}`)
        const data = await response.json()
        setBooks(data.items || [])
      } catch (error) {
        console.error('Error fetching books:', error)
        setBooks([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchBooks()
  }, [searchQuery])

  // return
  return <ListBlockComponent title='Популярні книги' items={books || []} isLoading={isLoading} />
}

export default BookListModule
