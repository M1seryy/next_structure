import { IqHeroComponent } from '@/app/features/myiq/block/hero-block'
import { IqOverviewComponent } from '@/app/features/myiq/block/overview-block'
import { IqAvailableTestsComponent } from '@/app/features/myiq/block/available-block'
import { IqAbilitiesComponent } from '@/app/features/myiq/block/abiliti-block'
import { type FC } from 'react'
import { IqBenefitsComponent } from '@/app/features/myiq/block/benefits-block'
import { IqCommunityComponent } from '@/app/features/myiq/block/community-block'
import { IqPricingComponent } from '@/app/features/myiq/block/pricing-block'
import { IqFaqComponent } from '@/app/features/myiq/block/faq-block'
import { IqResultsComponent } from '@/app/features/myiq/block/results-block'
import { MyIqContainer } from '@/app/shared/ui/my-iq/container'

// interface
interface IProps {}

// component
const MyIqModule: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqContainer>
      <IqHeroComponent />
      <IqOverviewComponent />
      <IqAvailableTestsComponent />
      <IqAbilitiesComponent />
      <IqBenefitsComponent />
      <IqCommunityComponent />
      <IqPricingComponent />
      <IqFaqComponent />
      <IqResultsComponent />
    </MyIqContainer>
  )
}

export default MyIqModule
