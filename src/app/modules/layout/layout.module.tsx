import { type FC, type ReactNode } from 'react'

import { HeaderComponent } from '@/app/widgets/header'
import { FooterComponent } from '@/app/widgets/footer'
import { ContainerComponent } from '@/app/shared/ui/container'
import { Banner } from '@/app/shared/ui/banner'
// interface
interface IProps {
  children: ReactNode
}

// component
const LayoutModule: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  // return
  return (
    <ContainerComponent variant='main'>
      <HeaderComponent />
      <Banner />
      {children}
      <FooterComponent />
    </ContainerComponent>
  )
}

export default LayoutModule
