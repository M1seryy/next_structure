'use client'

import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { useBooksSortStore } from '@/app/shared/store/global.store'
import { SortOrder } from '@/app/entities/models'
import { mixpanelUtils } from '@/pkg/integrations/mixpanel'

// interface
interface IProps {}

// component
const SortBlockComponent: FC<Readonly<IProps>> = () => {
  const { sortOrder, updateState } = useBooksSortStore()
  const t = useTranslations()

  // Handle sort change with tracking
  const handleSortChange = (newSortOrder: SortOrder) => {
    updateState({ sortOrder: newSortOrder })

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
