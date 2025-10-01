import { type FC, type ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import '@/config/styles/global.css'
import { LayoutModule } from '../../modules/layout'
import { RestApiProvider } from '@/pkg/libraries/rest-api'
import { UiProvider } from '@/pkg/libraries/ui'
import { SentryProvider } from '@/pkg/libraries/sentry'
import { routing } from '@/pkg/libraries/locale'

// interface
interface IProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

// component
const LocaleLayout: FC<Readonly<IProps>> = async (props) => {
  const { children, params } = props
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages({ locale })

  // return
  return (
    <html lang={locale}>
      <body>
        <SentryProvider>
          <NextIntlClientProvider messages={messages}>
            <UiProvider locale={locale}>
              <RestApiProvider>
                <LayoutModule>{children}</LayoutModule>
              </RestApiProvider>
            </UiProvider>
          </NextIntlClientProvider>
        </SentryProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
