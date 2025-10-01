'use client'

import { type FC, useState } from 'react'
import { useTranslations } from 'next-intl'
import { SearchBlockComponent } from '@/app/features/block/search-block'
import { SortBlockComponent } from '@/app/features/block/sort-block'
import { BooksDataBlockComponent } from '@/app/features/block/books-data-block'
import { Banner } from '@/app/shared/ui/banner'

// interface
interface IProps {}

// component
const HomeModule: FC<Readonly<IProps>> = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const t = useTranslations()

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  // return
  return (
    <div className='space-y-6'>
      <div>
        <Banner />
        <h1 className='text-2xl font-bold'>{t('home.title')}</h1>
        <p>{t('home.subtitle')}</p>
      </div>

      <SearchBlockComponent onSearch={handleSearch} />

      <SortBlockComponent />

      <BooksDataBlockComponent searchQuery={searchQuery} />
    </div>
  )
}

export default HomeModule
