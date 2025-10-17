import type { FC } from 'react'
import { Card, CardBody } from '@heroui/card'
import { MyIqSection } from '@/app/shared/ui'
import { ScrollShadow } from '@heroui/scroll-shadow'
import { CheckSvg } from '@/app/shared/svg'
import { BENEFITS } from '.'

// props
interface IProps {}

const benefits = BENEFITS
// component
const IqBenefitsComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection fullBleedBgClassName='bg-support-surface py-10 sm:py-12'>
      <h2 className='text-center text-[36px] font-extrabold tracking-tight text-[#2A3342] lg:text-[40px]'>
        What Will You Get
      </h2>

      <div className='-mx-4 mt-8 sm:-mx-6 lg:mx-0'>
        <ScrollShadow
          orientation='horizontal'
          className='flex snap-x snap-mandatory gap-5 ps-4 pe-0 pb-2 sm:ps-6 sm:pe-0 lg:hidden'
        >
          {benefits.map((b, idx) => (
            <Card
              key={idx}
              shadow='none'
              radius='lg'
              className='border-support-border w-[260px] flex-none snap-start rounded-xl border bg-white sm:w-[280px]'
            >
              <CardBody className='p-6'>
                <div className='flex items-start gap-3'>
                  <CheckSvg className='mt-0.5 h-5 w-5 flex-shrink-0 text-[#007AFF]' />
                  <p className='text-[14px] leading-6 text-[#2A3342]'>{b.title}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </ScrollShadow>
        <div className='hidden grid-cols-5 gap-5 lg:grid lg:overflow-visible lg:px-0 lg:pb-0'>
          {benefits.map((b, idx) => (
            <Card key={idx} shadow='none' radius='lg' className='border-support-border rounded-xl border bg-white'>
              <CardBody className='p-6'>
                <div className='flex items-start gap-3'>
                  <CheckSvg className='mt-0.5 h-5 w-5 flex-shrink-0 text-[#007AFF]' />
                  <p className='text-[14px] leading-6 text-[#2A3342]'>{b.title}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </MyIqSection>
  )
}

export default IqBenefitsComponent
