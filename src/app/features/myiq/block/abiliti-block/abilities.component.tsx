import type { FC } from 'react'
import { Card, CardBody } from '@heroui/card'
import { MyIqSection } from '@/app/shared/ui'
import { CheckSvg } from '@/app/shared/svg'
import { MyIqSectionHeading } from '@/app/shared/ui/my-iq/section-heading'
import { MyIqCheckListItem } from '@/app/shared/ui/my-iq/check-list-item'

// props
interface IProps {}

// component
const IqAbilitiesComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection innerClassName='py-12'>
      <MyIqSectionHeading center>Boost Your Abilities</MyIqSectionHeading>
      <p className='mx-auto mt-2 max-w-3xl text-center text-[16px] text-slate-600'>
        Unlock your potential with our comprehensive training package
      </p>

      <div className='mt-8 grid gap-6 md:grid-cols-3'>
        <Card shadow='none' radius='lg' className='rounded-xl border border-[#E2EDF6] bg-white p-0'>
          <CardBody className='place-content-inherit align-items-inherit relative flex h-auto w-full flex-auto flex-col gap-3 overflow-y-auto p-4 text-left break-words antialiased md:py-6'>
            <div className='h-[42px] w-[42px] rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]'>
              <div className='flex h-full w-full items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#2B2D42]'>
                1
              </div>
            </div>
            <p className='text-start text-[18px] font-semibold text-[#2C3345]'>Expert Video Courses</p>
            <ul className='flex flex-col gap-2 text-sm max-md:pt-0.5'>
              <MyIqCheckListItem>20+ hours of expert training</MyIqCheckListItem>
              <MyIqCheckListItem>Easy-to-follow lessons</MyIqCheckListItem>
              <MyIqCheckListItem>Learn at your own pace</MyIqCheckListItem>
              <MyIqCheckListItem>Track your progress</MyIqCheckListItem>
            </ul>
          </CardBody>
        </Card>
        <div className='rounded-xl border border-[#E2EDF6] bg-white p-0'>
          <div className='place-content-inherit align-items-inherit relative flex h-auto w-full flex-auto flex-col gap-3 overflow-y-auto p-4 text-left break-words antialiased md:py-6'>
            <div className='h-[42px] w-[42px] rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]'>
              <div className='flex h-full w-full items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#2B2D42]'>
                2
              </div>
            </div>
            <p className='text-start text-[18px] font-semibold text-[#2C3345]'>Brain Training Games</p>
            <ul className='flex flex-col gap-2 text-sm max-md:pt-0.5'>
              <MyIqCheckListItem>Diverse cognitive training exercises</MyIqCheckListItem>
              <MyIqCheckListItem>Progressive difficulty levels</MyIqCheckListItem>
              <MyIqCheckListItem>
                Enhance 5 core mental skills: Memory, Logical reasoning, problem‑solving mastery, focus and
                concentration.
              </MyIqCheckListItem>
            </ul>
          </div>
        </div>
        <div className='rounded-xl border border-[#E2EDF6] bg-white p-0'>
          <div className='place-content-inherit align-items-inherit relative flex h-auto w-full flex-auto flex-col gap-3 overflow-y-auto p-4 text-left break-words antialiased md:py-6'>
            <div className='h-[42px] w-[42px] rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]'>
              <div className='flex h-full w-full items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#2B2D42]'>
                3
              </div>
            </div>
            <p className='text-start text-[18px] font-semibold text-[#2C3345]'>Puzzles</p>
            <ul className='flex flex-col gap-2 text-sm max-md:pt-0.5'>
              <MyIqCheckListItem>150+ Intelligence‑Boosting Puzzles</MyIqCheckListItem>
              <MyIqCheckListItem>Smart Difficulty Progression</MyIqCheckListItem>
              <MyIqCheckListItem>
                Master essential brain functions: Pattern Recognition, Strategic Thinking, Analytical Reasoning.
              </MyIqCheckListItem>
            </ul>
          </div>
        </div>
      </div>
    </MyIqSection>
  )
}

export default IqAbilitiesComponent
