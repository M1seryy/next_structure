'use client'

import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { Search } from 'lucide-react'

// interface for form block component props
interface IProps {
  onSearch: (query: string) => void
  isLoading?: boolean
}

// interface for search form data
interface SearchFormData {
  query: string
}

// component
const FormBlockComponent: FC<Readonly<IProps>> = (props) => {
  const onSearch = props.onSearch
  const isLoading = props.isLoading || false
  const { register, handleSubmit, reset } = useForm<SearchFormData>()
  const t = useTranslations()

  const onSubmit = (data: SearchFormData) => {
    onSearch(data.query)
  }

  const handleClear = () => {
    reset()
    onSearch('')
  }

  // return
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mb-6 flex gap-3'>
      <Input
        type='text'
        label={t('search.searchIn')}
        placeholder={t('search.placeholder')}
        variant='bordered'
        size='lg'
        radius='lg'
        className='flex-1'
        classNames={{
          inputWrapper: 'border border-gray-300 hover:border-gray-400 focus-within:border-blue-500 py-3 px-4',
          label: 'text-gray-600 font-medium',
          input: 'text-lg',
        }}
        {...register('query', { required: true })}
        isDisabled={isLoading}
      />

      <Button
        type='submit'
        color='primary'
        size='lg'
        radius='lg'
        className='px-8 font-medium'
        isLoading={isLoading}
        startContent={!isLoading && <Search className='h-4 w-4' />}
      >
        {isLoading ? t('ui.loading') : t('actions.search')}
      </Button>

      <Button
        type='button'
        variant='bordered'
        size='lg'
        radius='lg'
        className='px-6 font-medium'
        onClick={handleClear}
        isDisabled={isLoading}
      >
        {t('actions.cancel')}
      </Button>
    </form>
  )
}

export default FormBlockComponent
