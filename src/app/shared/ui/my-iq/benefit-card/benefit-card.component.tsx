import type { FC, ReactNode } from 'react'
import { Card, CardBody } from '@heroui/card'
import { CheckSvg } from '@/app/shared/svg'

// props
interface IProps {
  children: ReactNode
}

// component
const MyIqBenefitCard: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  // return
  return (
    <Card shadow='none' radius='lg' className='border-support-border rounded-xl border bg-white'>
      <CardBody className='p-6'>
        <div className='flex items-start gap-3'>
          <CheckSvg className='mt-0.5 h-5 w-5 flex-shrink-0 text-[#007AFF]' />
          <p className='text-[14px] leading-6 text-[#2A3342]'>{children}</p>
        </div>
      </CardBody>
    </Card>
  )
}

export default MyIqBenefitCard
