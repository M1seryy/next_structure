'use client'

import { type FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ListBlockComponent } from '@/app/features/block/list-block'

// interface
interface IProps {
  searchQuery?: string
}

// component using Tanstack Query
const BookListModule: FC<Readonly<IProps>> = (props) => {
  const { searchQuery } = props

  // fetch books with Tanstack Query
  const { data, isLoading, error } = useQuery({
    queryKey: ['books', searchQuery],
    queryFn: async () => {
      const url = searchQuery ? `/api/books/search?q=${encodeURIComponent(searchQuery)}` : '/api/books/search'
      const response = await fetch(url)
      const data = await response.json()
      return data.items || []
    },
    staleTime: 30000, // 30 seconds
  })

  // return
  return <ListBlockComponent title='Popular Books' items={data || []} isLoading={isLoading} />
}

export default BookListModule
