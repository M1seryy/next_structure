'use client'

import { type FC, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ListBlockComponent } from '@/app/features/block/list-block'
import { fetchPopularBooks, searchBooksByTitle } from '@/app/entities/api/books'
import { useBooksSortStore } from '@/app/shared/store/global.store'

// interface
interface IProps {
  searchQuery: string
}

// component
const BooksDataBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { searchQuery } = props
  const { sortOrder } = useBooksSortStore()

  const {
    data: rawData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['books', searchQuery],
    queryFn: async () => {
      let books = []
      if (searchQuery) {
        books = await searchBooksByTitle(searchQuery)
      } else {
        books = await fetchPopularBooks()
      }
      return books
    },
    staleTime: 30000,
  })

  // Sort books based on sortOrder (клієнтське сортування)
  const data = useMemo(() => {
    if (!rawData) return undefined

    if (sortOrder === 'newest') {
      return [...rawData].sort((a, b) => (b.year || 0) - (a.year || 0))
    } else if (sortOrder === 'oldest') {
      return [...rawData].sort((a, b) => (a.year || 0) - (b.year || 0))
    }

    return rawData
  }, [rawData, sortOrder])

  const getTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`
    }
    return 'Popular Books'
  }

  // return
  return <ListBlockComponent title={getTitle()} items={data || []} isLoading={isLoading} />
}

export default BooksDataBlockComponent
