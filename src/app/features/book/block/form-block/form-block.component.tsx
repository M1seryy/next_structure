'use client'

import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { Search } from 'lucide-react'

// interface
interface IProps {
  onSearch?: (query: string) => void
  isLoading?: boolean
}

interface ISearchFormData {
  query: string
}

// component
const FormBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { register, handleSubmit, reset } = useForm<ISearchFormData>()

  const isLoading = props.isLoading || false
  const t = useTranslations()

  const router = useRouter()
  const searchParams = useSearchParams()
  const onSearch = props.onSearch

  const onSubmit = (data: ISearchFormData) => {
    if (onSearch) {
      onSearch(data.query)
    } else {
      const params = new URLSearchParams(searchParams.toString())
      if (data.query) {
        params.set('q', data.query)
      }
      router.push(`?${params.toString()}`)
    }
  }

  const handleClear = () => {
    reset()
    if (onSearch) {
      onSearch('')
    } else {
      const params = new URLSearchParams(searchParams.toString())
      params.delete('q')
      router.push(params.toString() ? `?${params.toString()}` : '?')
    }
  }

  // default styling only (no dynamic colors)

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
        className='border-0 bg-blue-600 px-8 font-medium text-white hover:bg-blue-700'
        isLoading={isLoading}
        startContent={!isLoading && <Search className='h-4 w-4' />}
      >
        {isLoading ? t('ui.loading') : t('actions.search')}
      </Button>

      <Button
        type='button'
        color='default'
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
