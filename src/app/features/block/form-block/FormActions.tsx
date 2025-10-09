'use client'

import { type FC, type ReactNode } from 'react'
import { Button } from '@heroui/button'
import { Search } from 'lucide-react'

interface IProps {
  isLoading: boolean
  onClear: () => void
  searchButtonColor: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  cancelButtonColor: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  searchLabel: ReactNode
  cancelLabel: ReactNode
}

const FormActions: FC<Readonly<IProps>> = (props) => {
  const { isLoading, onClear, searchButtonColor, cancelButtonColor, searchLabel, cancelLabel } = props

  return (
    <>
      <Button
        type='submit'
        color={searchButtonColor}
        size='lg'
        radius='lg'
        className='px-8 font-medium'
        isLoading={isLoading}
        startContent={!isLoading && <Search className='h-4 w-4' />}
      >
        {searchLabel}
      </Button>

      <Button
        type='button'
        color={cancelButtonColor}
        variant='bordered'
        size='lg'
        radius='lg'
        className='px-6 font-medium'
        onClick={onClear}
        isDisabled={isLoading}
      >
        {cancelLabel}
      </Button>
    </>
  )
}

export default FormActions
