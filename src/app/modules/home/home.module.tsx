'use client'

import { type FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { SearchComponent } from '@/app/shared/ui/search-form'
import { ListBlockComponent } from '@/app/features/block/list-block'
import { fetchPopularBooks, searchBooksByTitle } from '@/app/entities/api/books'

// interface
interface IProps {}

// component
const HomeModule: FC<Readonly<IProps>> = () => {
  const [searchQuery, setSearchQuery] = useState('')

  // fetch books with Tanstack Query using existing API functions
  const { data, isLoading, error } = useQuery({
    queryKey: ['books', searchQuery],
    queryFn: async () => {
      if (searchQuery) {
        return await searchBooksByTitle(searchQuery)
      }
      return await fetchPopularBooks()
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
