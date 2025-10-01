'use client'

import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { useBooksSortStore } from '@/app/shared/store/global.store'

// interface
interface IProps {}

// component
const SortBlockComponent: FC<Readonly<IProps>> = () => {
  const { sortOrder, setSortOrder } = useBooksSortStore()
  const t = useTranslations()

  // return
  return (
    <div className='flex gap-2'>
      <button
        onClick={() => setSortOrder('default')}
        className={`rounded-lg px-4 py-2 ${
          sortOrder === 'default' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {t('sort.default')}
      </button>
      <button
        onClick={() => setSortOrder('newest')}
        className={`rounded-lg px-4 py-2 ${
          sortOrder === 'newest' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {t('sort.newest')}
      </button>
      <button
        onClick={() => setSortOrder('oldest')}
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
