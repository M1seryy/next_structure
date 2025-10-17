import type { FC } from 'react'
import { Button } from '@heroui/button'
import { MyIqSection } from '@/app/shared/ui'
import { MyIqSectionHeading } from '@/app/shared/ui/my-iq/section-heading'
import { MyIqCheckListItem } from '@/app/shared/ui/my-iq/check-list-item'

// props
interface IProps {}

// component
const IqPricingComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection fullBleedBgClassName='bg-support-surface py-12' innerClassName='text-center'>
      <MyIqSectionHeading center>Explore our plans</MyIqSectionHeading>
      <p className='mx-auto mt-2 max-w-3xl text-[16px] text-slate-600'>
        Discover our flexible offers and choose the one that best suits your learning and personal development journey.
      </p>

      <div className='mt-8 grid gap-6 sm:grid-cols-2'>
        {/* Bi-weekly */}
        <div className='border-support-border rounded-2xl border bg-white p-6 text-left shadow-[0_8px_30px_rgba(20,58,94,0.08)]'>
          <h3 className='text-[16px] font-semibold tracking-wide text-[#2A3342]'>BI-WEEKLY SUBSCRIPTION</h3>
          <div className='bg-support-divider my-4 h-px w-full' />

          <div className='flex items-end gap-2'>
            <div className='text-brand-ink text-[40px] leading-none font-extrabold'>€724.99*</div>
            <div className='pb-1 text-sm text-slate-500'>/2 weeks</div>
          </div>

          <ul className='text-brand-ink mt-4 space-y-3 text-[15px]'>
            <MyIqCheckListItem>7‑day trial, auto‑renews to bi‑weekly plan thereafter</MyIqCheckListItem>
            <MyIqCheckListItem>Personalized IQ Certificate</MyIqCheckListItem>
            <MyIqCheckListItem>Comprehensive Cognitive Analysis</MyIqCheckListItem>
            <MyIqCheckListItem>Full Access to Development Tools</MyIqCheckListItem>
          </ul>

          <Button
            radius='lg'
            className='bg-primary-green mt-6 h-11 w-full rounded-xl px-6 text-[15px] font-semibold text-white shadow-sm hover:opacity-95'
          >
            Get started
          </Button>
        </div>

        {/* Monthly */}
        <div className='border-support-border rounded-2xl border bg-white p-6 text-left shadow-[0_8px_30px_rgba(20,58,94,0.08)]'>
          <h3 className='text-[16px] font-semibold tracking-wide text-[#2A3342]'>MONTHLY EXCELLENCE</h3>
          <div className='bg-support-divider my-4 h-px w-full' />

          <div className='flex items-end gap-2'>
            <div className='text-brand-ink text-[40px] leading-none font-extrabold'>€1448.99*</div>
            <div className='pb-1 text-sm text-slate-500'>/month</div>
          </div>

          <ul className='text-brand-ink mt-4 space-y-3 text-[15px]'>
            <MyIqCheckListItem>Maximum Savings on Long‑Term Growth</MyIqCheckListItem>
            <MyIqCheckListItem>Complete Cognitive Assessment Suite</MyIqCheckListItem>
            <MyIqCheckListItem>20+ Hours of Expert‑Led Courses</MyIqCheckListItem>
            <MyIqCheckListItem>Personalized Development Path</MyIqCheckListItem>
          </ul>

          <Button
            radius='lg'
            className='bg-primary-green mt-6 h-11 w-full rounded-xl px-6 text-[15px] font-semibold text-white shadow-sm hover:opacity-95'
          >
            Get started
          </Button>
        </div>
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
