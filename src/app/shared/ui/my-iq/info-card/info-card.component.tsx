import type { FC, ReactNode } from 'react'
import { Card, CardBody, CardHeader } from '@heroui/card'

// props
interface IProps {
  icon: ReactNode
  title: string
  children?: ReactNode
  className?: string
}

// component
const MyIqInfoCard: FC<Readonly<IProps>> = (props) => {
  const { icon, title, children, className } = props

  // return
  return (
    <Card
      shadow='none'
      radius='lg'
      className={['border-support-border min-h-[191px] border', className].filter(Boolean).join(' ')}
    >
      <CardHeader className='p-4 pb-0 md:px-8 md:pt-[42px]'>{icon}</CardHeader>
      <CardBody className='p-4 pt-2 pb-8 md:px-8 md:pt-3'>
        <h3 className='text-brand-ink text-[17px] font-semibold'>{title}</h3>
        {children ? <div className='mt-2 text-[14px] leading-6 text-slate-600'>{children}</div> : null}
      </CardBody>
    </Card>
  )
}

export default MyIqInfoCard
