'use client'

import { type FC, type ReactNode, useEffect, createContext, useContext } from 'react'
import { GrowthBook } from '@growthbook/growthbook'

interface IProps {
  children: ReactNode
}

const GrowthBookContext = createContext<GrowthBook | null>(null)

const growthbook = new GrowthBook({
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    console.log('GrowthBook experiment:', experiment.key, result.variationId)
  },
})

const GrowthBookProvider: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  useEffect(() => {
    try {
      growthbook.setAttributes({
        id: 'user-123',
        country: 'UA',
        browser: 'chrome',
      })

      growthbook.setFeatures({
        'search-button-color': {
          defaultValue: 'primary',
          rules: [
            {
              condition: { country: 'UA' },
              force: 'success',
            },
            {
              condition: { browser: 'chrome' },
              force: 'warning',
            },
          ],
        },
        'cancel-button-color': {
          defaultValue: 'default',
          rules: [
            {
              condition: { country: 'UA' },
              force: 'danger',
            },
            {
              condition: { browser: 'chrome' },
              force: 'secondary',
            },
          ],
        },
      })

      console.log('GrowthBook initialized with features:', growthbook.getFeatures())
    } catch (error) {
      console.warn('GrowthBook initialization failed:', error)
    }
  }, [])

  return <GrowthBookContext.Provider value={growthbook}>{children}</GrowthBookContext.Provider>
}

export const useGrowthBook = () => useContext(GrowthBookContext)
export default GrowthBookProvider
