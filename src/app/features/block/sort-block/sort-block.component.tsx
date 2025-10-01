'use client'

import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { useBooksSortStore } from '@/app/shared/store/global.store'
import { mixpanelUtils } from '@/pkg/libraries/mixpanel'

// interface
interface IProps {}

// component
const SortBlockComponent: FC<Readonly<IProps>> = () => {
  const { sortOrder, setSortOrder } = useBooksSortStore()
  const t = useTranslations()

  // Handle sort change with tracking
  const handleSortChange = (newSortOrder: 'default' | 'newest' | 'oldest') => {
    setSortOrder(newSortOrder)

    // Track sorting event in Mixpanel
    mixpanelUtils.trackSorting(newSortOrder, {
      previous_sort: sortOrder,
      timestamp: new Date().toISOString(),
    })
  }

  // return
  return (
    <div className='flex gap-2'>
      <button
        onClick={() => handleSortChange('default')}
        className={`rounded-lg px-4 py-2 ${
          sortOrder === 'default' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {t('sort.default')}
      </button>
      <button
        onClick={() => handleSortChange('newest')}
        className={`rounded-lg px-4 py-2 ${
          sortOrder === 'newest' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {t('sort.newest')}
      </button>
      <button
        onClick={() => handleSortChange('oldest')}
        className={`rounded-lg px-4 py-2 ${
          sortOrder === 'oldest' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {t('sort.oldest')}
      </button>
    </div>
  )
}

export default SortBlockComponent
