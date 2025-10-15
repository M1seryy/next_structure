import type { FC } from 'react'
import { MyIqSection } from '@/app/shared/ui'
import { Card, CardBody } from '@heroui/card'
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
        <span className='text-base font-medium text-[#2A3342] md:text-lg'>{item.name}</span>
      </div>
      <span className='rounded-small px-2 py-1 text-center text-base text-[#006FEE] md:text-[20px]'>
        IQ {item.score}
      </span>
    </CardBody>
  </Card>
)

// component
const IqResultsComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection fullBleedBgClassName='bg-[#F5FAFF] py-12'>
      <h2 className='text-center text-[32px] font-extrabold tracking-tight text-[#2A3342] sm:text-[36px]'>
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
