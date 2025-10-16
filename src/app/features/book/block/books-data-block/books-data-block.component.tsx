'use client'

import { type FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { ListBlockComponent } from '@/app/features/book/block/list-block'
import { popularBooksQueryApi, searchBooksQueryApi } from '@/app/entities/api/books'
// import { useBooksSortStore } from '@/app/shared/store/global.store'
import { type IBooksListItem } from '@/app/entities/models'
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
  const allowed = ['default', 'newest', 'oldest']
  const sortOrder = (allowed.includes(currentRaw as any) ? currentRaw : 'default') as SortOrder

  const {
    data: rawBooks,
    isLoading,
    error,
  } = useQuery<IBooksListItem[]>({
    queryKey: ['books', searchQuery],
    queryFn: async (opt): Promise<IBooksListItem[]> => {
      try {
        if (searchQuery) {
          return await searchBooksQueryApi(opt, { q: searchQuery })
        } else {
          return await popularBooksQueryApi(opt)
        }
      } catch (error) {
        console.error('Error fetching books:', error)
        return []
      }
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

  const books = (() => {
    if (!rawBooks) return undefined

    if (sortOrder === SortOrder.NEWEST) return sortBy(rawBooks, 'year', 'desc')
    if (sortOrder === SortOrder.OLDEST) return sortBy(rawBooks, 'year', 'asc')
    return rawBooks
  })()

  const getTitle = () => {
    if (searchQuery) {
      return t('books.searchResults', { query: searchQuery })
    }
    return t('books.popular')
  }

  if (error) {
    return (
      <div className='py-8 text-center'>
        <p className='text-red-500'>Error loading books</p>
      </div>
    )
  }

  // return
  return <ListBlockComponent title={getTitle()} items={books || []} isLoading={isLoading} />
}

export default BooksDataBlockComponent
