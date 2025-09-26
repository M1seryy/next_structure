'use client'

import { type FC, useState } from 'react'
import { FormBlockComponent } from '@/app/features/block/form-block'

// interface
interface IProps {
  onSearch: (query: string) => void
  isLoading?: boolean
}

// component
const SearchBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { onSearch, isLoading = false } = props

  const handleSearch = (query: string) => {
    onSearch(query)
  }

  // return
  return <FormBlockComponent onSearch={handleSearch} isLoading={isLoading} />
}

export default SearchBlockComponent
