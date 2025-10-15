import type { FC } from 'react'
import { MyIqSection } from '@/app/shared'
import { Card, CardBody } from '@heroui/card'

// props
interface IProps {}

type Result = {
  flag: string
  name: string
  score: number
}

const left: Result[] = [
  { flag: '🇧🇾', name: 'Кузнецов Андрей', score: 90 },
  { flag: '🇧🇾', name: 'Иванов Андрей', score: 92 },
  { flag: '🇺🇦', name: 'Коваленко Данило', score: 107 },
  { flag: '🇷🇺', name: 'Соколов Александр', score: 102 },
]

const right: Result[] = [
  { flag: '🇵🇱', name: 'Wójcik Antoni', score: 87 },
  { flag: '🇷🇺', name: 'Кузнецов Дмитрий', score: 95 },
  { flag: '🇵🇱', name: 'Nowak Jakub', score: 86 },
  { flag: '🇵🇱', name: 'Kowalski Franciszek', score: 87 },
]
//Card-row
const Row: FC<{ item: Result }> = ({ item }) => (
  <Card
    shadow='none'
    radius='lg'
    className='rounded-[18px] bg-white'
    classNames={{ base: 'px-6 py-[23px] lg:py-[28px]' }}
  >
    <CardBody className='flex flex-row items-center justify-between p-0'>
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
