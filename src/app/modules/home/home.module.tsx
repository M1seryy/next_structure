'use client'

import { type FC, useState } from 'react'
import { SearchBlockComponent } from '@/app/features/block/search-block'
import { SortBlockComponent } from '@/app/features/block/sort-block'
import { BooksDataBlockComponent } from '@/app/features/block/books-data-block'
import { Banner } from '@/app/shared/ui/banner'

// interface
interface IProps {}

// component
const HomeModule: FC<Readonly<IProps>> = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  // return
  return (
    <div className='space-y-6'>
      <div>
        <Banner />
        <h1 className='text-2xl font-bold'>Book Store</h1>
        <p>Welcome to our book store!</p>
      </div>

      <SearchBlockComponent onSearch={handleSearch} />

      <SortBlockComponent />

      <BooksDataBlockComponent searchQuery={searchQuery} />
    </div>
  )
}

export default HomeModule
