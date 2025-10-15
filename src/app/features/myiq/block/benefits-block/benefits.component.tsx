import type { FC } from 'react'
import { Card, CardBody } from '@heroui/card'
import { MyIqSection } from '@/app/shared/ui'
import { BENEFITS } from '.'

// props
interface IProps {}

const benefits = BENEFITS
// component
const IqBenefitsComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection fullBleedBgClassName='bg-[#F5FAFF] py-12'>
      <h2 className='text-center text-[36px] font-extrabold tracking-tight text-[#2A3342] lg:text-[40px]'>
        What Will You Get
      </h2>

      <div className='-mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto ps-4 pe-0 pb-2 sm:-mx-6 sm:ps-6 sm:pe-0 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0'>
        {benefits.map((b, idx) => (
          <Card
            key={idx}
            shadow='none'
            radius='lg'
            className='w-[260px] flex-none snap-start rounded-xl border border-[#E2EDF6] bg-white sm:w-[280px] lg:w-auto lg:flex-initial'
          >
            <CardBody className='p-6'>
              <div className='flex items-start gap-3'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22' className='mt-0.5 h-5 w-5 flex-shrink-0'>
                  <path
                    fill='#007AFF'
                    d='M21.3 11a1.53 1.53 0 0 0-.57-1.194L19.378 8.68l.62-1.611a1.544 1.544 0 0 0-1.195-2.067l-1.735-.3-.27-1.705a1.545 1.545 0 0 0-2.067-1.194l-1.651.609-1.086-1.343a1.583 1.583 0 0 0-2.388 0L8.479 2.422l-1.61-.62A1.545 1.545 0 0 0 4.8 2.999l-.299 1.735L2.797 5a1.545 1.545 0 0 0-1.194 2.068l.609 1.652L.869 9.805a1.545 1.545 0 0 0 0 2.388l1.353 1.127-.62 1.61a1.545 1.545 0 0 0 1.195 2.068l1.734.3.27 1.705a1.545 1.545 0 0 0 2.067 1.194l1.652-.61 1.086 1.343a1.545 1.545 0 0 0 2.388 0l1.126-1.353 1.611.62a1.544 1.544 0 0 0 2.068-1.194l.3-1.736L18.801 17a1.545 1.545 0 0 0 1.195-2.068l-.609-1.652 1.343-1.085A1.53 1.53 0 0 0 21.3 11'
                  />
                  <path
                    fill='#F5F5F5'
                    d='M9.39 14.537a2.23 2.23 0 0 1-1.344-.446l-1.82-1.366a.75.75 0 1 1 .899-1.2l1.821 1.366a.755.755 0 0 0 1.043-.14l4.344-5.587a.75.75 0 1 1 1.185.922l-4.346 5.586a2.26 2.26 0 0 1-1.782.865'
                  />
                </svg>
                <p className='text-[14px] leading-6 text-[#2A3342]'>{b.title}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </MyIqSection>
  )
}

export default IqBenefitsComponent
