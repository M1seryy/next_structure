import type { FC, ReactNode } from 'react'
import { Card, CardBody } from '@heroui/card'
import { MyIqCheckListItem } from '@/app/shared/ui/my-iq/check-list-item'

// props
interface IProps {
  number: number
  title: string
  children: ReactNode
}

// component
const MyIqAbilityCard: FC<Readonly<IProps>> = (props) => {
  const { number, title, children } = props

  // return
  return (
    <Card shadow='none' radius='lg' className='border-support-border rounded-xl border bg-white p-0'>
      <CardBody className='place-content-inherit align-items-inherit relative flex h-auto w-full flex-auto flex-col gap-3 overflow-y-auto p-4 text-left break-words antialiased md:py-6'>
        <div className='h-[42px] w-[42px] rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]'>
          <div className='flex h-full w-full items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#2B2D42]'>
            {number}
          </div>
        </div>
        <p className='text-brand-ink text-start text-[18px] font-semibold'>{title}</p>
        <ul className='flex flex-col gap-2 max-md:pt-0.5'>{children}</ul>
      </CardBody>
    </Card>
  )
}

export default MyIqAbilityCard
