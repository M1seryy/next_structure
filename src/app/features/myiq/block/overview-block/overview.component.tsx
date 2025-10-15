import type { FC } from 'react'
import { Card, CardBody, CardHeader } from '@heroui/card'
import { MyIqSection } from '@/app/shared/ui'

// interface
interface IProps {}

// component
const IqOverviewComponent: FC<Readonly<IProps>> = () => {
  return (
    <MyIqSection innerClassName='py-8 sm:py-12'>
      <h2 className='mb-6 text-center text-3xl font-extrabold tracking-tight text-[#2A3342] sm:text-4xl'>
        How it Works
      </h2>
      <div className='grid gap-4 sm:gap-5 md:grid-cols-3'>
        <Card shadow='none' radius='lg' className='min-h-[191px] border border-[#E6EEF9]'>
          <CardHeader className='p-4 pb-0 md:px-8 md:pt-[42px]'>
            <div className='text-[28px] leading-none text-[#1D63F0]'>📋</div>
          </CardHeader>
          <CardBody className='p-4 pt-2 pb-8 md:px-8 md:pt-3'>
            <h3 className='text-[17px] font-semibold text-[#2A3342]'>Take a Test</h3>
            <p className='mt-2 text-[14px] leading-6 text-slate-600'>Get an unbiased view of yourself</p>
          </CardBody>
        </Card>

        <Card shadow='none' radius='lg' className='min-h-[191px] border border-[#E6EEF9]'>
          <CardHeader className='p-4 pb-0 md:px-8 md:pt-[42px]'>
            <div className='text-[28px] leading-none text-[#1D63F0]'>🧩</div>
          </CardHeader>
          <CardBody className='p-4 pt-2 pb-8 md:px-8 md:pt-3'>
            <h3 className='text-[17px] font-semibold text-[#2A3342]'>Get Your Detailed Report</h3>
            <p className='mt-2 text-[14px] leading-6 text-slate-600'>
              Learn your strengths and discover areas for growth
            </p>
          </CardBody>
        </Card>

        <Card shadow='none' radius='lg' className='min-h-[191px] border border-[#E6EEF9]'>
          <CardHeader className='p-4 pb-0 md:px-8 md:pt-[42px]'>
            <div className='text-[28px] leading-none text-[#1D63F0]'>🚀</div>
          </CardHeader>
          <CardBody className='p-4 pt-2 pb-8 md:px-8 md:pt-3'>
            <h3 className='text-[17px] font-semibold text-[#2A3342]'>Begin Your Journey</h3>
            <p className='mt-2 text-[14px] leading-6 text-slate-600'>
              Start improving with expert courses and brain training
            </p>
          </CardBody>
        </Card>
      </div>
    </MyIqSection>
  )
}

export default IqOverviewComponent
