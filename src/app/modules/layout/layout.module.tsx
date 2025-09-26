import { type FC, type ReactNode } from 'react'

import { HeaderComponent } from '@/app/widgets/header'
import { FooterComponent } from '@/app/widgets/footer'
import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {
  children: ReactNode
}

//component
const LayoutModule: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  // return layout with header, banner, content and footer
  return (
    <ContainerComponent variant='main'>
      <HeaderComponent />

      {children}

      <FooterComponent />
    </ContainerComponent>
  )
}

export default LayoutModule
