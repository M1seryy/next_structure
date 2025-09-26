'use client'

import { type FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { SearchComponent } from '@/app/shared/ui/search-from'
import { ListBlockComponent } from '@/app/features/block/list-block'

// interface
interface IProps {}

// component
const HomeModule: FC<Readonly<IProps>> = () => {
  const [searchQuery, setSearchQuery] = useState('')

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

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const getTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`
    }
    return 'Popular Books'
  }

  // return
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-2xl font-bold'>Book Store</h1>
        <p>Welcome to our book store!</p>
      </div>

      <SearchComponent onSearch={handleSearch} isLoading={isLoading} />

      <ListBlockComponent title={getTitle()} items={data || []} isLoading={isLoading} />
    </div>
  )
}

export default HomeModule
