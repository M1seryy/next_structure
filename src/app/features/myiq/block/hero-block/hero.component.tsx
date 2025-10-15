import type { FC } from 'react'
import Link from 'next/link'
import { Button } from '@heroui/button'
import { HeroGraphSvg } from '@/app/shared'
import { MyIqSection } from '@/app/shared/ui'

// interface
interface IProps {}

// mock avatars for preview
const avatars = [
  'https://i.pravatar.cc/48?img=1',
  'https://i.pravatar.cc/48?img=2',
  'https://i.pravatar.cc/48?img=3',
  'https://i.pravatar.cc/48?img=4',
]

const IqHeroComponent: FC<Readonly<IProps>> = () => {
  return (
    <MyIqSection innerClassName='lg:pt-[84px]'>
      <div className='flex h-full w-full flex-col items-center gap-5 lg:flex-row lg:justify-between'>
        <div className='order-2 flex w-full max-w-[630px] flex-col gap-3 text-center lg:order-1 lg:gap-4 lg:text-left'>
          <h1 className='text-[32px] leading-[40px] font-extrabold text-[#2A3342] lg:text-[48px] lg:leading-[62px]'>
            <span className='inline-block bg-gradient-to-r from-[#2C3345] to-[#424D6A] bg-clip-text text-transparent'>
              Want to Know Your&nbsp;
            </span>
            <br className='max-lg:hidden' />
            <span className='inline-block bg-gradient-to-r from-[#27415F] via-[#007AFF] to-[#007AFF] bg-clip-text pr-2 text-transparent'>
              Real IQ Score?
            </span>
          </h1>
          <p className='text-base leading-[25px] text-[#2B2D42] lg:max-w-[325px] lg:text-[18px]'>
            Take our IQ test and unlock your path to self-discovery and development
          </p>

          <div className='mt-2 flex items-center justify-center gap-3 max-sm:flex-wrap lg:mt-4 lg:justify-start lg:gap-6'>
            <div className='w-full sm:w-auto'>
              <Button
                as={Link}
                href='#start'
                radius='lg'
                className='h-12 w-full bg-[#0E7C66] px-6 !text-base whitespace-nowrap text-white shadow-sm hover:opacity-95 sm:w-auto md:px-8 lg:gap-6'
              >
                Start IQ Test Now
                <span className='ml-2 inline-block'>→</span>
              </Button>
            </div>
            <div className='w-full sm:w-auto'>
              <Button
                as={Link}
                href='#how'
                radius='lg'
                variant='bordered'
                className='h-12 w-full border-[#0E7C66] !px-6 whitespace-nowrap text-[#0E7C66] hover:bg-[#0E7C66] hover:text-white sm:w-auto md:px-8'
              >
                How It Works
              </Button>
            </div>
          </div>

          <div className='mt-[11px] flex items-center md:mt-4'>
            <div className='relative mr-6 flex md:mr-12'>
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=''
                  className={`h-10 w-10 rounded-full border-[3px] border-white object-cover md:h-[50px] md:w-[50px] md:border-4 ${i > 0 ? (i === 3 ? '-ml-9 max-md:hidden md:-ml-6' : '-ml-5 md:-ml-6') : ''}`}
                />
              ))}
            </div>
            <div className='-ml-4 flex flex-col text-sm text-[#2B2D42] md:-ml-8 md:text-base md:leading-6'>
              <div className='flex flex-wrap max-md:flex-col md:items-center md:gap-1'>
                <p>Excellent user reviews</p>
                <div className='relative flex text-gray-300'>
                  <span className='text-[#f7b635]'>★★★★★</span>
                </div>
              </div>
              <p>
                <span className='font-semibold'>12024</span> IQ tests taken today!
              </p>
            </div>
          </div>
        </div>

        <div className='order-1 w-full lg:order-2'>
          <div className='relative mx-auto flex aspect-[517/296] h-full w-full max-w-[517px] items-center justify-center max-lg:mt-[-28px]'>
            <HeroGraphSvg className='h-full w-full scale-[1.2]' />
          </div>
        </div>
      </div>
    </MyIqSection>
  )
}

export default IqHeroComponent
