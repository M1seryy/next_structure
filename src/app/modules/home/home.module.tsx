'use client'

import { type FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { SearchComponent } from '@/app/shared/ui/search-form'
import { ListBlockComponent } from '@/app/features/block/list-block'
import { fetchPopularBooks, searchBooksByTitle } from '@/app/entities/api/books'
import { useBooksSortStore } from '@/app/shared/store/global.store'

// interface
interface IProps {}

// component
const HomeModule: FC<Readonly<IProps>> = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { sortOrder, setSortOrder } = useBooksSortStore()

  // fetch books with Tanstack Query using existing API functions
  const { data, isLoading, error } = useQuery({
    queryKey: ['books', searchQuery, sortOrder],
    queryFn: async () => {
      let books = []
      if (searchQuery) {
        books = await searchBooksByTitle(searchQuery)
      } else {
        books = await fetchPopularBooks()
      }

      // Sort books based on sortOrder
      if (sortOrder === 'newest') {
        return books.sort((a, b) => (b.year || 0) - (a.year || 0))
      } else if (sortOrder === 'oldest') {
        return books.sort((a, b) => (a.year || 0) - (b.year || 0))
      }

      return books
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

      {/* Sort controls */}
      <div className='flex gap-2'>
        <button
          onClick={() => setSortOrder('default')}
          className={`rounded-lg px-4 py-2 ${
            sortOrder === 'default' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Default
        </button>
        <button
          onClick={() => setSortOrder('newest')}
          className={`rounded-lg px-4 py-2 ${
            sortOrder === 'newest' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Newest First
        </button>
        <button
          onClick={() => setSortOrder('oldest')}
          className={`rounded-lg px-4 py-2 ${
            sortOrder === 'oldest' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Oldest First
        </button>
      </div>

      <ListBlockComponent title={getTitle()} items={data || []} isLoading={isLoading} />
    </div>
  )
}

export default HomeModule
