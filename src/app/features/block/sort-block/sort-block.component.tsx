'use client'

import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { SortOrder } from '@/app/entities/models'
import { mixpanelUtils } from '@/pkg/integrations/mixpanel'
import { usePathname } from '@/pkg/libraries/locale/navigation'
import { useRouter, useSearchParams } from 'next/navigation'

// interface
interface IProps {}

// component
const SortBlockComponent: FC<Readonly<IProps>> = () => {
  const searchParams = useSearchParams()

  const t = useTranslations()

  const router = useRouter()
  const pathname = usePathname()

  const currentRaw = (searchParams.get('sort') || 'default').toLowerCase()
  const allowed = ['default', 'newest', 'oldest'] as const
  const sortOrder = (allowed.includes(currentRaw as any) ? currentRaw : 'default') as SortOrder

  const handleSortChange = (newSortOrder: SortOrder) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', newSortOrder.toLowerCase())
    const newUrl = `${pathname}?${params.toString()}`
    router.replace(newUrl, { scroll: false })

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
