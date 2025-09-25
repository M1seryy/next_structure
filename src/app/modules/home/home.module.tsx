import { type FC } from 'react'

import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {}

// component
const HomeModule: FC<Readonly<IProps>> = (props) => {
  // return
  return (
    <ContainerComponent className='w-full space-y-12 pb-[72px]'>
      <h1>Home</h1>
    </ContainerComponent>
  )
}

export default HomeModule
