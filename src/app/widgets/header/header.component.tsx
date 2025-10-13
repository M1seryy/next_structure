'use client'

import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

//interface
interface IProps {}

//component
const HeaderComponent: FC<Readonly<IProps>> = () => {
  const t = useTranslations()

  //return
  return (
    <div className='mt-3.5 flex flex-col'>
      <div className='mx-auto flex w-full items-center justify-between px-4 md:px-6'>
        <Link href={'/'}>
          <h1 className='text-4xl'>Book Store</h1>
        </Link>
        <nav>
          <ul className='flex gap-5'>
            <li className='text-xl'>
              <Link href={'/'}>{t('navigation.home')}</Link>
            </li>
            <li className='text-xl'>
              <Link href={'/book-list'}>{t('navigation.books')}</Link>
            </li>
            <li className='text-xl'>
              <Link href={'/about'}>{t('navigation.about')}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HeaderComponent
