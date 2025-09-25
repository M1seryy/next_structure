import { type FC, type ReactNode } from 'react'

import { HeaderComponent } from '@/app/widgets/header'
import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {
  children: ReactNode
}

// component
const LayoutModule: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  // return
  return (
    <>
      <HeaderComponent />
      <ContainerComponent variant='main'>{children}</ContainerComponent>
    </>
  )
}

export default LayoutModule
