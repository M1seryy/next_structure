import { type FC } from 'react'
import { getTranslations } from 'next-intl/server'
import { FormBlockComponent } from '@/app/features/block/form-block'
import { SortBlockComponent } from '@/app/features/block/sort-block'
import { BooksDataBlockComponent } from '@/app/features/block/books-data-block'
import { BannerComponent } from '@/app/shared/ui/banner'

// interface
interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

// component
const HomeModule: FC<Readonly<IProps>> = async (props) => {
  const { searchParams } = props
  const t = await getTranslations()
  const searchQuery = (searchParams?.q as string) || ''

  // return
  return (
    <div className='space-y-6'>
      <div>
        <BannerComponent />
        <h1 className='text-2xl font-bold'>{t('home.title')}</h1>
        <p>{t('home.subtitle')}</p>
      </div>

      <FormBlockComponent />

      <SortBlockComponent />

      <BooksDataBlockComponent searchQuery={searchQuery} />
    </div>
  )
}

export default HomeModule
