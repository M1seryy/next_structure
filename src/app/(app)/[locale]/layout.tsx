import { type FC, type ReactNode } from 'react'
import { type Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import '@/config/styles/global.css'
import { LayoutModule } from '../../modules/layout'
import { RestApiProvider } from '@/pkg/libraries/rest-api'
import { UiProvider } from '@/pkg/libraries/ui'
import { SentryProvider } from '@/pkg/integrations/sentry'
import { MixpanelProvider } from '@/pkg/integrations/mixpanel'
import { GrowthBookProvider } from '@/pkg/integrations/growthbook'
import { routing } from '@/pkg/libraries/locale'

// interface
interface IProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

// metadata
export const generateMetadata = async (_props?: IProps): Promise<Metadata> => {
  const title = 'Books App'
  const description = 'Discover and explore books from our collection'
  const baseUrl = 'http://localhost:3000'

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    applicationName: title,
    openGraph: {
      title: {
        default: title,
        template: `%s | ${title}`,
      },
      description,
      siteName: title,
      type: 'website',
      url: baseUrl,
    },
  }
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
          <MixpanelProvider>
            <GrowthBookProvider locale={locale}>
              <NextIntlClientProvider messages={messages}>
                <UiProvider locale={locale}>
                  <RestApiProvider>
                    <LayoutModule>{children}</LayoutModule>
                  </RestApiProvider>
                </UiProvider>
              </NextIntlClientProvider>
            </GrowthBookProvider>
          </MixpanelProvider>
        </SentryProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
