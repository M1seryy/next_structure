import type { FC } from 'react'
import { MyIqSection } from '@/app/shared/ui'
import { MyIqSectionHeading } from '@/app/shared/ui/my-iq/section-heading'
import { ScrollShadow } from '@heroui/scroll-shadow'
import { MyIqBenefitCard } from '@/app/shared/ui/my-iq/benefit-card'
import { BENEFITS } from '.'

// props
interface IProps {}

const benefits = BENEFITS
// component
const IqBenefitsComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection fullBleedBgClassName='bg-support-surface py-10 sm:py-12'>
      <MyIqSectionHeading title='What Will You Get' />

      <div className='-mx-4 mt-8 sm:-mx-6 lg:mx-0'>
        <ScrollShadow
          orientation='horizontal'
          className='flex snap-x snap-mandatory gap-5 ps-4 pe-0 pb-2 sm:ps-6 sm:pe-0 lg:hidden'
        >
          {benefits.map((b, idx) => (
            <div key={idx} className='w-[260px] flex-none snap-start sm:w-[280px]'>
              <MyIqBenefitCard>{b.title}</MyIqBenefitCard>
            </div>
          ))}
        </ScrollShadow>
        <div className='hidden grid-cols-5 gap-5 lg:grid lg:overflow-visible lg:px-0 lg:pb-0'>
          {benefits.map((b, idx) => (
            <MyIqBenefitCard key={idx}>{b.title}</MyIqBenefitCard>
          ))}
        </div>
      </div>
    </MyIqSection>
  )
}

export default IqBenefitsComponent
