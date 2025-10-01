'use client'

import { type FC, type ReactNode } from 'react'

// interface
interface IProps {
  children: ReactNode
}

// component
const SentryProvider: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  // Sentry is initialized via instrumentation files
  return <>{children}</>
}

export default SentryProvider
