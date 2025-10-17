import type { FC } from 'react'
import { Card, CardBody } from '@heroui/card'
import { Chip } from '@heroui/chip'

// props
interface IProps {
  flag: string
  name: string
  score: number
  className?: string
}

// component
const MyIqResultRow: FC<Readonly<IProps>> = (props) => {
  const { flag, name, score, className } = props

  // return
  return (
    <Card
      shadow='none'
      radius='lg'
      className={['rounded-[18px] bg-white', className].filter(Boolean).join(' ')}
      classNames={{ base: ' py-[23px] lg:py-[28px]' }}
    >
      <CardBody className='flex flex-row items-center justify-between p-0 px-5 md:px-6'>
        <div className='flex items-center gap-4'>
          <span className='text-[20px] lg:text-[24px]'>{flag}</span>
          <span className='text-brand-ink text-base font-medium md:text-lg'>{name}</span>
        </div>
        <Chip color='primary' variant='flat' className='text-base md:text-[20px]'>
          IQ {score}
        </Chip>
      </CardBody>
    </Card>
  )
}

export default MyIqResultRow
