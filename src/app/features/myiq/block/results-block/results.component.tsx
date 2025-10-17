import type { FC } from 'react'
import { MyIqSection } from '@/app/shared/ui'
import { Card, CardBody } from '@heroui/card'
import { Chip } from '@heroui/chip'
import { RESULTS_LEFT, RESULTS_RIGHT, type Result } from '.'

// props
interface IProps {}

const left = RESULTS_LEFT
const right = RESULTS_RIGHT
//Card-row
const Row: FC<{ item: Result }> = ({ item }) => (
  <Card shadow='none' radius='lg' className='rounded-[18px] bg-white' classNames={{ base: ' py-[23px] lg:py-[28px]' }}>
    <CardBody className='flex flex-row items-center justify-between p-0 px-5 md:px-6'>
      <div className='flex items-center gap-4'>
        <span className='text-[20px] lg:text-[24px]'>{item.flag}</span>
        <span className='text-brand-ink text-base font-medium md:text-lg'>{item.name}</span>
      </div>
      <Chip color='primary' variant='flat' className='text-base md:text-[20px]'>
        IQ {item.score}
      </Chip>
    </CardBody>
  </Card>
)

// component
const IqResultsComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection fullBleedBgClassName='bg-support-surface py-10 sm:py-12'>
      <h2 className='text-brand-ink text-center text-[32px] font-extrabold tracking-tight sm:text-[36px]'>
        Latest results
      </h2>

      <div className='mt-8 grid gap-6 md:grid-cols-2'>
        <div className='space-y-4'>
          {left.map((r, i) => (
            <Row key={i} item={r} />
          ))}
        </div>
        <div className='space-y-4'>
          {right.map((r, i) => (
            <Row key={i} item={r} />
          ))}
        </div>
      </div>
    </MyIqSection>
  )
}

export default IqResultsComponent
