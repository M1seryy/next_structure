'use client'

import { type FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { ListBlockComponent } from '@/app/features/block/list-block'
import { fetchPopularBooks, searchBooksByTitle } from '@/app/entities/api/books'
import { useBooksSortStore } from '@/app/shared/store/global.store'
import { SortOrder } from '@/app/entities/models'

// interface
interface IProps {
  searchQuery: string
}

// component
const BooksDataBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { searchQuery } = props
  const { sortOrder } = useBooksSortStore()
  const t = useTranslations()

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

  const data = (() => {
    if (!rawData) return undefined

    if (sortOrder === SortOrder.NEWEST) {
      return [...rawData].sort((a, b) => (b.year || 0) - (a.year || 0))
    } else if (sortOrder === SortOrder.OLDEST) {
      return [...rawData].sort((a, b) => (a.year || 0) - (b.year || 0))
    }

    return rawData
  })()

  const getTitle = () => {
    if (searchQuery) {
      return t('books.searchResults', { query: searchQuery })
    }
    return t('books.popular')
  }

  // return
  return <ListBlockComponent title={getTitle()} items={data || []} isLoading={isLoading} />
}

export default BooksDataBlockComponent
