import { type FC, type ReactNode } from 'react'

import { cn } from '@heroui/react'

// interface for container component props
interface IProps {
  children: ReactNode
  className?: string
  variant?: 'main' | 'section'
}

// component
const ContainerComponent: FC<Readonly<IProps>> = (props) => {
  const { children, className = '', variant = 'main' } = props

  // return
  return (
    <>
      {variant === 'main' ? (
        <main
          className={cn(
            `mx-auto flex min-h-[calc(100vh-60px)] w-full max-w-[1280px] flex-col gap-6 pt-4 pb-8`,
            className,
          )}
        >
          {children}
        </main>
      ) : (
        <div className={cn(`mx-auto flex w-full max-w-[1280px] flex-col gap-4`, className)}>{children}</div>
      )}
    </>
  )
}

export default ContainerComponent
