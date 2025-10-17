'use client'
import { type FC, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'

import { ContainerComponent } from '@/app/shared/ui/book/container'
import { MyIqFooterComponent, MyIqHeaderComponent } from '@/app/widgets/my-iq'
import { BookFooterComponent, BookHeaderComponent } from '@/app/widgets/book'

// interface
interface IProps {
  children: ReactNode
}

//component
const LayoutModule: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  const pathname = usePathname()
  const isIq = pathname?.startsWith('/iq')

  // return
  return (
    <>
      {isIq ? <MyIqHeaderComponent /> : <BookHeaderComponent />}

      <ContainerComponent variant='main'>{children}</ContainerComponent>

      {isIq ? <MyIqFooterComponent /> : <BookFooterComponent />}
    </>
  )
}

export default LayoutModule
