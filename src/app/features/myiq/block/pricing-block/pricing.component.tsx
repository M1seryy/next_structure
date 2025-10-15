import type { FC } from 'react'
import { MyIqSection } from '@/app/shared'

// props
interface IProps {}

// component
const IqPricingComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection fullBleedBgClassName='bg-[#F5FAFF] py-14' innerClassName='text-center'>
      <h2 className='text-[36px] font-extrabold tracking-tight text-[#2A3342] lg:text-[40px]'>Explore our plans</h2>
      <p className='mx-auto mt-2 max-w-3xl text-[16px] text-slate-600'>
        Discover our flexible offers and choose the one that best suits your learning and personal development journey.
      </p>

      <div className='mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2'>
        {/* Bi-weekly */}
        <div className='rounded-2xl border border-[#E2EDF6] bg-white p-6 text-left shadow-[0_8px_30px_rgba(20,58,94,0.08)]'>
          <h3 className='text-[16px] font-semibold tracking-wide text-[#2A3342]'>BI-WEEKLY SUBSCRIPTION</h3>
          <div className='my-4 h-px w-full bg-[#E6EEF9]' />

          <div className='flex items-end gap-2'>
            <div className='text-[40px] leading-none font-extrabold text-[#2A3342]'>€724.99*</div>
            <div className='pb-1 text-sm text-slate-500'>/2 weeks</div>
          </div>

          <ul className='mt-4 space-y-3 text-[15px] text-[#2A3342]'>
            <li className='flex items-start gap-2'>
              <span className='text-[#0E7C66]'>✓</span>7‑day trial, auto‑renews to bi‑weekly plan thereafter
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#0E7C66]'>✓</span>Personalized IQ Certificate
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#0E7C66]'>✓</span>Comprehensive Cognitive Analysis
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#0E7C66]'>✓</span>Full Access to Development Tools
            </li>
          </ul>

          <button className='mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl bg-[#0E7C66] px-6 text-[15px] font-semibold text-white shadow-sm transition hover:opacity-95'>
            Get started
          </button>
        </div>

        {/* Monthly */}
        <div className='rounded-2xl border border-[#E2EDF6] bg-white p-6 text-left shadow-[0_8px_30px_rgba(20,58,94,0.08)]'>
          <h3 className='text-[16px] font-semibold tracking-wide text-[#2A3342]'>MONTHLY EXCELLENCE</h3>
          <div className='my-4 h-px w-full bg-[#E6EEF9]' />

          <div className='flex items-end gap-2'>
            <div className='text-[40px] leading-none font-extrabold text-[#2A3342]'>€1448.99*</div>
            <div className='pb-1 text-sm text-slate-500'>/month</div>
          </div>

          <ul className='mt-4 space-y-3 text-[15px] text-[#2A3342]'>
            <li className='flex items-start gap-2'>
              <span className='text-[#0E7C66]'>✓</span>Maximum Savings on Long‑Term Growth
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#0E7C66]'>✓</span>Complete Cognitive Assessment Suite
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#0E7C66]'>✓</span>20+ Hours of Expert‑Led Courses
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#0E7C66]'>✓</span>Personalized Development Path
            </li>
          </ul>

          <button className='mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl bg-[#0E7C66] px-6 text-[15px] font-semibold text-white shadow-sm transition hover:opacity-95'>
            Get started
          </button>
        </div>
      </div>

      <p className='mx-auto mt-6 max-w-3xl text-[13px] text-slate-600'>
        *Visit our{' '}
        <a href='#' className='text-[#1D63F0] underline underline-offset-2'>
          pricing page
        </a>{' '}
        to find out more details.
      </p>
    </MyIqSection>
  )
}

export default IqPricingComponent
