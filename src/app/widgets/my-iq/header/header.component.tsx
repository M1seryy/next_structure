import React from 'react'
import Image from 'next/image'
import { MyIqLogoSvg } from '@/app/shared'
import { MyIqSection } from '@/app/shared/ui'

//interface
interface IProps {}

//component
const MyIqHeaderComponent: React.FC = () => {
  //return
  return (
    <header className='sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <MyIqSection innerClassName='flex h-14 items-center justify-between sm:h-16'>
        {/* Left: Logo */}
        <a href='#' className='inline-flex items-center gap-2 text-[#2A3342]'>
          <MyIqLogoSvg width={30} height={30} className='relative top-[1px] shrink-0' />
          <span className='leading-none tracking-tight'>
            <span className='align-baseline text-[20px] font-medium italic md:text-[22px]'>my</span>
            <span className='ml-1 align-baseline text-[22px] font-extrabold md:text-[24px]'>IQ</span>
          </span>
          <MyIqLogoSvg
            className='ml-2 !h-[24px] !w-[27px] shrink-0 text-gray-700 min-[361px]:hidden'
            viewBox='0 0 28 25'
            aria-label='Logo'
          />
        </a>

        <div className='hidden items-center gap-3 md:flex'>
          <a
            href='#login'
            className='inline-flex h-[42px] items-center rounded-lg border border-[#0E7C66] px-5 text-sm font-semibold text-[#0E7C66] transition hover:bg-[#0E7C66] hover:text-white'
          >
            Log In
          </a>
          <a
            href='#start'
            className='inline-flex h-[42px] items-center rounded-lg bg-[#0E7C66] px-5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95'
          >
            Start Test
          </a>
        </div>

        <button
          type='button'
          className='inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden'
          aria-label='Open menu'
        >
          <svg
            width='22'
            height='22'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden
          >
            <line x1='3' y1='6' x2='21' y2='6'></line>
            <line x1='3' y1='12' x2='21' y2='12'></line>
            <line x1='3' y1='18' x2='21' y2='18'></line>
          </svg>
        </button>
      </MyIqSection>
    </header>
  )
}

export default MyIqHeaderComponent
