import { IqHeroComponent } from '@/app/features/myiq/block/hero'
import { IqOverviewComponent } from '@/app/features/myiq/block/overview'
import { type FC } from 'react'

// interface
interface IProps {}

// component
const MyIqModule: FC<Readonly<IProps>> = () => {
  // return
  return (
    <div>
      <IqHeroComponent />
      <IqOverviewComponent />
    </div>
  )
}

export default MyIqModule
