import { type FC } from 'react'
import {
  IqHeroComponent,
  IqOverviewComponent,
  IqAvailableTestsComponent,
  IqAbilitiesComponent,
  IqBenefitsComponent,
  IqCommunityComponent,
  IqPricingComponent,
  IqFaqComponent,
  IqResultsComponent,
} from '@/app/features/myiq/block'
import { MyIqContainer } from '@/app/shared/ui'

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
