'use client'
import { type FC, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'

import { HeaderComponent } from '@/app/widgets/header'
import { HeaderComponent as MyIqHeaderComponent } from '@/app/widgets/my-iq/header'
import { FooterComponent } from '@/app/widgets/footer'
import { FooterComponent as MyIqFooterComponent } from '@/app/widgets/my-iq/footer'
import { ContainerComponent } from '@/app/shared/ui/book/container'

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
      {/* Full-width header with border */}
      {isIq ? <MyIqHeaderComponent /> : <HeaderComponent />}

      <ContainerComponent variant='main'>{children}</ContainerComponent>

      {/* Full-width footer: switch per section */}
      {isIq ? <MyIqFooterComponent /> : <FooterComponent />}
    </>
  )
}

export default LayoutModule
