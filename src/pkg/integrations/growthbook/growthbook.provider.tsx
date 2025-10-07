'use client'

import { type FC, type ReactNode, useEffect, createContext, useContext, useState } from 'react'
import { GrowthBook } from '@growthbook/growthbook'

// interface
interface IProps {
  children: ReactNode
  locale?: string
}

const GrowthBookContext = createContext<GrowthBook | null>(null)

// component
const GrowthBookProvider: FC<Readonly<IProps>> = (props) => {
  const { children, locale = 'en' } = props
  const [growthbookInstance, setGrowthbookInstance] = useState<GrowthBook | null>(null)

  useEffect(() => {
    const growthbook = new GrowthBook({
      enableDevMode: true,
    })

    try {
      growthbook.setAttributes({
        id: 'user-123',
        country: 'UK',
        browser: 'chrome',
        locale: locale,
      })

      growthbook.setFeatures({
        'search-button-color': {
          defaultValue: 'primary',
          rules: [
            {
              condition: { locale: 'en' },
              force: 'primary',
            },
            {
              condition: { locale: 'uk' },
              force: 'success',
            },
          ],
        },
        'cancel-button-color': {
          defaultValue: 'default',
          rules: [
            {
              condition: { locale: 'en' },
              force: 'secondary',
            },
            {
              condition: { locale: 'uk' },
              force: 'danger',
            },
          ],
        },
      })

      setGrowthbookInstance(growthbook)
    } catch (error) {
      // GrowthBook initialization failed
    }
  }, [locale])

  return <GrowthBookContext.Provider value={growthbookInstance}>{children}</GrowthBookContext.Provider>
}

export const useGrowthBook = () => useContext(GrowthBookContext)
export default GrowthBookProvider
