import { IqHeroComponent } from '@/app/features/myiq/block/hero-block'
import { IqOverviewComponent } from '@/app/features/myiq/block/overview-block'
import { IqAvailableTestsComponent } from '@/app/features/myiq/block/available-block'
import { IqAbilitiesComponent } from '@/app/features/myiq/block/abiliti-block'
import { type FC } from 'react'
import { IqBenefitsComponent } from '@/app/features/myiq/block/benefits-block'
import { IqCommunityComponent } from '@/app/features/myiq/block/community-block'
import { IqPricingComponent } from '@/app/features/myiq/block/pricing-block'

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
      <IqAbilitiesComponent />
      <IqBenefitsComponent />
      <IqCommunityComponent />
      <IqPricingComponent />
    </div>
  )
}

export default MyIqModule
