'use client'

import { type FC, type ReactNode, useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

interface IProps {
  children: ReactNode
}
const MixpanelProvider: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
      mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
        debug: process.env.NODE_ENV === 'development',
        track_pageview: true,
        api_host: 'https://api-eu.mixpanel.com',
        persistence: 'localStorage',
      })
    }
  }, [])

  return <>{children}</>
}

export default MixpanelProvider
