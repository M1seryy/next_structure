'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { FC, ReactNode } from 'react'

import { HeroUIProvider } from '@heroui/system'
import { ToastProvider } from '@heroui/toast'

// interface
interface IProps {
  children: ReactNode
  locale?: string
}

// component
const UiProvider: FC<Readonly<IProps>> = (props) => {
  const { children, locale } = props

  // return
  return (
    <HeroUIProvider locale={locale}>
      {children}

      <ToastProvider
        maxVisibleToasts={3}
        placement='top-right'
        toastProps={{
          radius: 'md',
          timeout: 3500,
          classNames: { title: 'first-letter:uppercase', description: 'first-letter:uppercase' },
        }}
      />
    </HeroUIProvider>
  )
}

export default UiProvider
