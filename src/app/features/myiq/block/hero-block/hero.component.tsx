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
    <MyIqSection innerClassName=''>
      <div className='grid items-center gap-8 sm:gap-10 md:grid-cols-2'>
        <div className='order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left'>
          <h1 className='text-4xl font-extrabold tracking-tight text-[#2A3342] sm:text-5xl lg:text-6xl'>
            Want to Know Your
            <span className='block bg-gradient-to-r from-[#4F8DFB] to-[#1D63F0] bg-clip-text text-transparent'>
              Real IQ Score?
            </span>
          </h1>
          <p className='mt-4 max-w-xl text-base text-slate-600 sm:text-lg'>
            Take our IQ test and unlock your path to self‑discovery and development
          </p>

          <div className='mt-6 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 md:justify-start'>
            <div className='w-full sm:w-auto'>
              <Button
                as={Link}
                href='#start'
                radius='lg'
                className='h-[40px] w-full bg-[#0E7C66] px-4 text-[15px] font-semibold text-white shadow-sm hover:opacity-95 sm:w-auto'
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
                className='h-[40px] w-full border-[#0E7C66] px-4 text-[15px] font-semibold text-[#0E7C66] hover:bg-[#0E7C66]/10 sm:w-auto'
              >
                How It Works
              </Button>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-center gap-4 md:justify-start'>
            <div className='flex -space-x-2'>
              {avatars.map((src, i) => (
                <img key={i} src={src} alt='' className='h-10 w-10 rounded-full object-cover ring-2 ring-white' />
              ))}
            </div>
            <div className='text-sm text-slate-600'>
              <div className='flex items-center gap-1'>
                <span className='text-amber-500'>★★★★★</span>
                <span className='ml-1 font-medium'>Excellent user reviews</span>
              </div>
              <div className='text-slate-500'>12024 IQ tests taken today!</div>
            </div>
          </div>
        </div>

        <div className='order-1 rounded-2xl bg-white p-4 sm:p-6 md:order-2'>
          <div className='relative mx-auto flex aspect-[517/296] h-full w-full max-w-[517px] items-center justify-center max-lg:mt-[-28px]'>
            <HeroGraphSvg className='h-full w-full scale-[1.2]' />
          </div>
        </div>
      </div>
    </MyIqSection>
  )
}

export default IqHeroComponent
