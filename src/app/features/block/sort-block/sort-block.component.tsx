'use client'

import { type FC, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useBooksSortStore } from '@/app/shared/store/global.store'
import { SortOrder } from '@/app/entities/models'
import { mixpanelUtils } from '@/pkg/integrations/mixpanel'
import { usePathname } from '@/pkg/libraries/locale/navigation'
import { useRouter, useSearchParams } from 'next/navigation'

// interface
interface IProps {}

// component
const SortBlockComponent: FC<Readonly<IProps>> = () => {
  const { sortOrder, updateState } = useBooksSortStore()
  const t = useTranslations()

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSortChange = (newSortOrder: SortOrder) => {
    updateState({ sortOrder: newSortOrder })

    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', newSortOrder.toLowerCase())
    const newUrl = `${pathname}?${params.toString()}`
    window.history.replaceState(null, '', newUrl)

    mixpanelUtils.trackSorting(newSortOrder, {
      previous_sort: sortOrder,
      timestamp: new Date().toISOString(),
    })
  }

  useEffect(() => {
    if (!searchParams.has('sort')) return
    const raw = (searchParams.get('sort') || 'default').toLowerCase()
    const allowed = ['default', 'newest', 'oldest'] as const
    const next = (allowed.includes(raw as any) ? raw : 'default') as SortOrder
    if (next !== sortOrder) {
      updateState({ sortOrder: next })
    }
  }, [searchParams])

  // return
  return (
    <div className='flex gap-2'>
      <button
        onClick={() => handleSortChange(SortOrder.DEFAULT)}
        className={`rounded-lg px-4 py-2 ${
          sortOrder === SortOrder.DEFAULT ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {t('sort.default')}
      </button>
      <button
        onClick={() => handleSortChange(SortOrder.NEWEST)}
        className={`rounded-lg px-4 py-2 ${
          sortOrder === SortOrder.NEWEST ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {t('sort.newest')}
      </button>
      <button
        onClick={() => handleSortChange(SortOrder.OLDEST)}
        className={`rounded-lg px-4 py-2 ${
          sortOrder === SortOrder.OLDEST ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {t('sort.oldest')}
      </button>
    </div>
  )
}

export default SortBlockComponent
