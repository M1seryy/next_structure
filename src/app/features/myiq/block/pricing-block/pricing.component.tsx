import type { FC } from 'react'
import { MyIqSection } from '@/app/shared/ui'
import { MyIqSectionHeading } from '@/app/shared/ui/my-iq/section-heading'
import { MyIqCheckListItem } from '@/app/shared/ui/my-iq/check-list-item'
import { MyIqPricingCard } from '@/app/shared/ui/my-iq/pricing-card'

// props
interface IProps {}

// component
const IqPricingComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection fullBleedBgClassName='bg-support-surface py-12' innerClassName='text-center'>
      <MyIqSectionHeading
        title='Explore our plans'
        description='Discover our flexible offers and choose the one that best suits your learning and personal development journey.'
      />

      <div className='mt-8 grid gap-6 sm:grid-cols-2'>
        <MyIqPricingCard title='BI-WEEKLY SUBSCRIPTION' price='€724.99*' period='/2 weeks' buttonText='Get started'>
          <MyIqCheckListItem>7‑day trial, auto‑renews to bi‑weekly plan thereafter</MyIqCheckListItem>
          <MyIqCheckListItem>Personalized IQ Certificate</MyIqCheckListItem>
          <MyIqCheckListItem>Comprehensive Cognitive Analysis</MyIqCheckListItem>
          <MyIqCheckListItem>Full Access to Development Tools</MyIqCheckListItem>
        </MyIqPricingCard>

        <MyIqPricingCard title='MONTHLY EXCELLENCE' price='€1448.99*' period='/month' buttonText='Get started'>
          <MyIqCheckListItem>Maximum Savings on Long‑Term Growth</MyIqCheckListItem>
          <MyIqCheckListItem>Complete Cognitive Assessment Suite</MyIqCheckListItem>
          <MyIqCheckListItem>20+ Hours of Expert‑Led Courses</MyIqCheckListItem>
          <MyIqCheckListItem>Personalized Development Path</MyIqCheckListItem>
        </MyIqPricingCard>
      </div>

      <p className='mx-auto mt-6 max-w-3xl text-[13px] text-slate-600'>
        *Visit our{' '}
        <a href='#' className='text-link underline underline-offset-2'>
          pricing page
        </a>{' '}
        to find out more details.
      </p>
    </MyIqSection>
  )
}

export default IqPricingComponent
