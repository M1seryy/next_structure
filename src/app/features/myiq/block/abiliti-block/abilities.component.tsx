import type { FC } from 'react'
import { Card, CardBody } from '@heroui/card'
import { MyIqSection } from '@/app/shared/ui'

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
        <Card shadow='none' radius='lg' className='rounded-xl border border-[#E2EDF6] bg-white p-0'>
          <CardBody className='place-content-inherit align-items-inherit relative flex h-auto w-full flex-auto flex-col gap-3 overflow-y-auto p-4 text-left break-words antialiased md:py-6'>
            <div className='h-[42px] w-[42px] rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]'>
              <div className='flex h-full w-full items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#2B2D42]'>
                1
              </div>
            </div>
            <p className='text-start text-[18px] font-semibold text-[#2C3345]'>Expert Video Courses</p>
            <ul className='flex flex-col gap-2 max-md:pt-0.5'>
              <li className='flex items-start gap-1.5'>
                <div className='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                    className='h-3.5 w-4 min-w-4 text-[#007AFF]'
                  >
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-start text-sm'>20+ hours of expert training</p>
              </li>
              <li className='flex items-start gap-1.5'>
                <div className='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                    className='h-3.5 w-4 min-w-4 text-[#007AFF]'
                  >
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-start text-sm'>Easy-to-follow lessons</p>
              </li>
              <li className='flex items-start gap-1.5'>
                <div className='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                    className='h-3.5 w-4 min-w-4 text-[#007AFF]'
                  >
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-start text-sm'>Learn at your own pace</p>
              </li>
              <li className='flex items-start gap-1.5'>
                <div className='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                    className='h-3.5 w-4 min-w-4 text-[#007AFF]'
                  >
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-start text-sm'>Track your progress</p>
              </li>
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
            <ul className='flex flex-col gap-2 max-md:pt-0.5'>
              <li className='flex items-start gap-1.5'>
                <div className='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                    className='h-3.5 w-4 min-w-4 text-[#007AFF]'
                  >
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-start text-sm'>Diverse cognitive training exercises</p>
              </li>
              <li className='flex items-start gap-1.5'>
                <div className='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                    className='h-3.5 w-4 min-w-4 text-[#007AFF]'
                  >
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-start text-sm'>Progressive difficulty levels</p>
              </li>
              <li className='flex items-start gap-1.5'>
                <div className='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                    className='h-3.5 w-4 min-w-4 text-[#007AFF]'
                  >
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-start text-sm'>
                  Enhance 5 core mental skills: Memory, Logical reasoning, problem‑solving mastery, focus and
                  concentration.
                </p>
              </li>
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
            <ul className='flex flex-col gap-2 max-md:pt-0.5'>
              <li className='flex items-start gap-1.5'>
                <div className='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                    className='h-3.5 w-4 min-w-4 text-[#007AFF]'
                  >
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-start text-sm'>150+ Intelligence‑Boosting Puzzles</p>
              </li>
              <li className='flex items-start gap-1.5'>
                <div className='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                    className='h-3.5 w-4 min-w-4 text-[#007AFF]'
                  >
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-start text-sm'>Smart Difficulty Progression</p>
              </li>
              <li className='flex items-start gap-1.5'>
                <div className='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                    className='h-3.5 w-4 min-w-4 text-[#007AFF]'
                  >
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-start text-sm'>
                  Master essential brain functions: Pattern Recognition, Strategic Thinking, Analytical Reasoning.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MyIqSection>
  )
}

export default IqAbilitiesComponent
