import { IqHeroComponent } from '@/app/features/myiq/block/hero'
import { IqOverviewComponent } from '@/app/features/myiq/block/overview'
import { IqAvailableTestsComponent } from '@/app/features/myiq/block/available-tests'
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
      <IqAvailableTestsComponent />
    </div>
  )
}

export default MyIqModule
