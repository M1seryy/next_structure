'use client'

import { type FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { ListBlockComponent } from '@/app/features/block/list-block'
import { fetchPopularBooks, searchBooksByTitle } from '@/app/entities/api/books'
// import { useBooksSortStore } from '@/app/shared/store/global.store'
import { SortOrder } from '@/app/entities/models'
import { useSearchParams } from 'next/navigation'

// interface
interface IProps {
  searchQuery: string
}

// component
const BooksDataBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { searchQuery } = props
  const t = useTranslations()
  const searchParams = useSearchParams()

  const currentRaw = (searchParams.get('sort') || 'default').toLowerCase()
  const allowed = ['default', 'newest', 'oldest'] as const
  const sortOrder = (allowed.includes(currentRaw as any) ? currentRaw : 'default') as SortOrder

  const {
    data: rawData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['books', searchQuery, sortOrder],
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

    // Apply sorting on the client based on sortOrder
    if (sortOrder === SortOrder.NEWEST) {
      return [...rawData].sort((a: any, b: any) => (b.year || 0) - (a.year || 0))
    }
    if (sortOrder === SortOrder.OLDEST) {
      return [...rawData].sort((a: any, b: any) => (a.year || 0) - (b.year || 0))
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
