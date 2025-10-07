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
      const getUserBrowser = () => {
        const userAgent = navigator.userAgent.toLowerCase()
        if (userAgent.includes('chrome')) return 'chrome'
        if (userAgent.includes('firefox')) return 'firefox'
        if (userAgent.includes('safari')) return 'safari'
        if (userAgent.includes('edge')) return 'edge'
        return 'chrome'
      }

      growthbook.setAttributes({
        id: 'user-123',
        country: 'UK',
        browser: getUserBrowser(),
        locale: locale,
      })

      growthbook.setFeatures({
        'search-button-color': {
          defaultValue: 'primary',
          rules: [
            {
              condition: { browser: 'chrome' },
              force: 'primary',
            },
            {
              condition: { browser: 'firefox' },
              force: 'success',
            },
            {
              condition: { browser: 'safari' },
              force: 'warning',
            },
            {
              condition: { browser: 'edge' },
              force: 'info',
            },
          ],
        },
        'cancel-button-color': {
          defaultValue: 'default',
          rules: [
            {
              condition: { browser: 'chrome' },
              force: 'secondary',
            },
            {
              condition: { browser: 'firefox' },
              force: 'danger',
            },
            {
              condition: { browser: 'safari' },
              force: 'warning',
            },
            {
              condition: { browser: 'edge' },
              force: 'info',
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
