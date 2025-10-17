import type { FC } from 'react'
import { MyIqSection } from '@/app/shared/ui'
import { MyIqSectionHeading } from '@/app/shared/ui/my-iq/section-heading'
import { MyIqResultRow } from '@/app/shared/ui/my-iq/results-row'
import { RESULTS_LEFT, RESULTS_RIGHT, type Result } from '.'

// props
interface IProps {}

const left = RESULTS_LEFT
const right = RESULTS_RIGHT

// component
const IqResultsComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection fullBleedBgClassName='bg-support-surface py-10 sm:py-12'>
      <MyIqSectionHeading title='Latest results' titleClassName='text-[32px] sm:text-[36px]' />

      <div className='mt-8 grid gap-6 md:grid-cols-2'>
        <div className='space-y-4'>
          {left.map((r, i) => (
            <MyIqResultRow key={i} flag={r.flag} name={r.name} score={r.score} />
          ))}
        </div>
        <div className='space-y-4'>
          {right.map((r, i) => (
            <MyIqResultRow key={i} flag={r.flag} name={r.name} score={r.score} />
          ))}
        </div>
      </div>
    </MyIqSection>
  )
}

export default IqResultsComponent
