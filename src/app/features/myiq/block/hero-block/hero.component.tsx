import type { FC } from 'react'
import Link from 'next/link'
import { Button } from '@heroui/button'
import { IqCurveSvg } from '@/app/shared'
import { MyIqSection } from '@/app/shared/ui/my-iq/section'

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
    <MyIqSection innerClassName='py-10 sm:py-12 lg:py-20'>
      <div className='grid items-center gap-8 sm:gap-10 lg:grid-cols-2'>
        <div className='order-2 lg:order-1'>
          <h1 className='text-4xl font-extrabold tracking-tight text-[#2A3342] sm:text-5xl lg:text-6xl'>
            Want to Know Your
            <span className='block bg-gradient-to-r from-[#4F8DFB] to-[#1D63F0] bg-clip-text text-transparent'>
              Real IQ Score?
            </span>
          </h1>
          <p className='mt-4 max-w-xl text-base text-slate-600 sm:text-lg'>
            Take our IQ test and unlock your path to self‑discovery and development
          </p>

          <div className='mt-6 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4'>
            <div className='w-full sm:flex-1'>
              <Button
                as={Link}
                href='#start'
                radius='lg'
                className='h-[46px] w-full bg-[#0E7C66] px-5 text-base font-semibold text-white shadow-sm hover:opacity-95'
              >
                Start IQ Test Now
                <span className='ml-2 inline-block'>→</span>
              </Button>
            </div>
            <div className='w-full sm:flex-1'>
              <Button
                as={Link}
                href='#how'
                radius='lg'
                variant='bordered'
                className='h-[46px] w-full border-[#0E7C66] px-5 text-base font-semibold text-[#0E7C66] hover:bg-[#0E7C66]/10'
              >
                How It Works
              </Button>
            </div>
          </div>

          <div className='mt-6 flex items-center gap-4'>
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

        <div className='order-1 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:order-2'>
          <div className='mx-auto w-full max-w-[620px]'>
            <IqCurveSvg />
          </div>
        </div>
      </div>
    </MyIqSection>
  )
}

export default IqHeroComponent
