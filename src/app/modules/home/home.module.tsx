import { type FC } from 'react'
import { getTranslations } from 'next-intl/server'
import { FormBlockComponent } from '@/app/features/book/block/form-block'
import { SortBlockComponent } from '@/app/features/book/block/sort-block'
import { BooksDataBlockComponent } from '@/app/features/book/block/books-data-block'
import { BannerComponent } from '@/app/shared/ui/book/banner'
import { getFeatureFlag } from '@/pkg/integrations/growthbook'

// interface
interface IProps {
  searchQuery?: string
}

// component
const HomeModule: FC<Readonly<IProps>> = async (props) => {
  const isBannerOn = await getFeatureFlag('banner-toggle')

  const { searchQuery = '' } = props

  const t = await getTranslations()

  // return
  return (
    <div className='space-y-6'>
      <div>
        {isBannerOn ? <BannerComponent /> : null}
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
