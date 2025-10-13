import React from 'react'
import Image from 'next/image'

//interface
interface IProps {}

//component
const HeaderComponent: React.FC = () => {
  //return
  return (
    <header className='sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <div className='mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8'>
        {/* Left: Logo */}
        <a href='#' className='inline-flex items-center gap-2'>
          <Image src='/images/logo.png' alt='myIQ logo' width={24} height={24} priority />
          <span className='text-xl font-extrabold tracking-tight text-slate-800'>
            <span className='italic'>my</span>
            <span className='ml-0.5'>IQ</span>
          </span>
        </a>

        <div className='hidden items-center gap-3 md:flex'>
          <a
            href='#login'
            className='inline-flex items-center rounded-lg border border-[#0E7C66] px-4 py-1.5 text-sm font-semibold text-[#0E7C66] transition hover:bg-[#0E7C66]/5'
          >
            Log In
          </a>
          <a
            href='#start'
            className='inline-flex items-center rounded-lg bg-[#0E7C66] px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95'
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
      </div>
    </header>
  )
}

export default HeaderComponent
