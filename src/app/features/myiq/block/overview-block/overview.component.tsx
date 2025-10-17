import type { FC } from 'react'
import { ClipboardCheckSvg, DetailedReportSvg, BeginJourneySvg } from '@/app/shared'
import { MyIqSection } from '@/app/shared/ui'
import { MyIqInfoCard } from '@/app/shared/ui/my-iq/info-card'
import { MyIqSectionHeading } from '@/app/shared/ui/my-iq/section-heading'

// interface
interface IProps {}

// component
const IqOverviewComponent: FC<Readonly<IProps>> = () => {
  return (
    <MyIqSection innerClassName='py-8 sm:py-12'>
      <MyIqSectionHeading
        title='How it Works'
        titleClassName='mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl'
      />
      <div className='grid gap-4 sm:grid-cols-3 sm:gap-5'>
        <MyIqInfoCard icon={<ClipboardCheckSvg className='h-[38px] w-[38px]' />} title='Take a Test'>
          Get an unbiased view of yourself
        </MyIqInfoCard>

        <MyIqInfoCard icon={<DetailedReportSvg className='h-[38px] w-[38px]' />} title='Get Your Detailed Report'>
          Learn your strengths and discover areas for growth
        </MyIqInfoCard>

        <MyIqInfoCard icon={<BeginJourneySvg className='h-[38px] w-[38px]' />} title='Begin Your Journey'>
          Start improving with expert courses and brain training
        </MyIqInfoCard>
      </div>
    </MyIqSection>
  )
}

export default IqOverviewComponent
