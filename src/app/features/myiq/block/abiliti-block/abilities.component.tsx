import type { FC } from 'react'
import { MyIqSection } from '@/app/shared/ui/my-iq/section'

// props
interface IProps {}

// component
const IqAbilitiesComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection innerClassName='py-12'>
      <h2 className='text-center text-[36px] font-extrabold tracking-tight text-[#2A3342] lg:text-[40px]'>
        Boost Your Abilities
      </h2>
      <p className='mx-auto mt-2 max-w-3xl text-center text-[16px] text-slate-600'>
        Unlock your potential with our comprehensive training package
      </p>

      <div className='mt-8 grid gap-6 md:grid-cols-3'>
        <div className='rounded-xl border border-[#E2EDF6] bg-white p-6'>
          <div className='flex items-center gap-3'>
            <span className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1D63F0] text-[16px] font-semibold text-[#1D63F0]'>
              1
            </span>
            <div className='text-[18px] font-semibold text-[#2A3342]'>Expert Video Courses</div>
          </div>
          <ul className='mt-4 space-y-2 text-[14px] text-slate-700'>
            <li className='flex items-start gap-2'>
              <span className='text-[#1D63F0]'>✓</span>20+ hours of expert training
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#1D63F0]'>✓</span>Easy-to-follow lessons
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#1D63F0]'>✓</span>Learn at your own pace
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#1D63F0]'>✓</span>Track your progress
            </li>
          </ul>
        </div>
        <div className='rounded-xl border border-[#E2EDF6] bg-white p-6'>
          <div className='flex items-center gap-3'>
            <span className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1D63F0] text-[16px] font-semibold text-[#1D63F0]'>
              2
            </span>
            <div className='text-[18px] font-semibold text-[#2A3342]'>Brain Training Games</div>
          </div>
          <ul className='mt-4 space-y-2 text-[14px] text-slate-700'>
            <li className='flex items-start gap-2'>
              <span className='text-[#1D63F0]'>✓</span>Diverse cognitive training exercises
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#1D63F0]'>✓</span>Progressive difficulty levels
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#1D63F0]'>✓</span>Enhance 5 core mental skills: Memory, Logical reasoning,
              problem‑solving mastery, focus and concentration.
            </li>
          </ul>
        </div>
        <div className='rounded-xl border border-[#E2EDF6] bg-white p-6'>
          <div className='flex items-center gap-3'>
            <span className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1D63F0] text-[16px] font-semibold text-[#1D63F0]'>
              3
            </span>
            <div className='text-[18px] font-semibold text-[#2A3342]'>Puzzles</div>
          </div>
          <ul className='mt-4 space-y-2 text-[14px] text-slate-700'>
            <li className='flex items-start gap-2'>
              <span className='text-[#1D63F0]'>✓</span>150+ Intelligence‑Boosting Puzzles
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#1D63F0]'>✓</span>Smart Difficulty Progression
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-[#1D63F0]'>✓</span>Master essential brain functions: Pattern Recognition, Strategic
              Thinking, Analytical Reasoning.
            </li>
          </ul>
        </div>
      </div>
    </MyIqSection>
  )
}

export default IqAbilitiesComponent
