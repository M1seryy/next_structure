'use client'

import { type FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { ListBlockComponent } from '@/app/features/book/block/list-block'
import { fetchPopularBooks, searchBooksByTitle } from '@/app/entities/api/books'
// import { useBooksSortStore } from '@/app/shared/store/global.store'
import { SortOrder } from '@/app/entities/models'
import { useSearchParams } from 'next/navigation'
import { type IBooksListItem } from '@/app/entities/models'

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
  } = useQuery<IBooksListItem[]>({
    queryKey: ['books', searchQuery, sortOrder],
    queryFn: async (): Promise<IBooksListItem[]> => {
      let books: IBooksListItem[] = []
      if (searchQuery) {
        books = await searchBooksByTitle(searchQuery)
      } else {
        books = await fetchPopularBooks()
      }
      return books
    },
    staleTime: 30000,
  })

  const sortBy = <T, K extends keyof T>(items: T[], key: K, direction: 'asc' | 'desc'): T[] => {
    const factor = direction === 'asc' ? 1 : -1
    return [...items].sort((a, b) => {
      const av = (a[key] as unknown as number) ?? 0
      const bv = (b[key] as unknown as number) ?? 0
      if (av === bv) return 0
      return av > bv ? factor : -factor
    })
  }

  const data = (() => {
    if (!rawData) return undefined

    if (sortOrder === SortOrder.NEWEST) return sortBy(rawData, 'year', 'desc')
    if (sortOrder === SortOrder.OLDEST) return sortBy(rawData, 'year', 'asc')
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
