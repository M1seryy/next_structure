'use client'

import { type FC } from 'react'
import Image from 'next/image'

// interface
interface IProps {}

// component
const FooterComponent: FC<Readonly<IProps>> = () => {
  return (
    <footer className='w-full bg-[#0B2434] text-slate-100'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:py-10'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-12 sm:gap-8'>
          <div className='min-w-0 sm:col-span-3'>
            <div className='flex items-center gap-3'>
              <Image src='/images/logo.png' alt='myIQ logo' width={24} height={24} />
              <span className='text-lg font-extrabold'>
                <span className='italic'>my</span>IQ
              </span>
            </div>
            <div className='mt-3 flex gap-4 text-xl'>
              <a href='#' aria-label='Reddit' className='opacity-80 transition hover:opacity-100'>
                ⓡ
              </a>
              <a href='#' aria-label='X' className='opacity-80 transition hover:opacity-100'>
                𝕏
              </a>
              <a href='#' aria-label='Instagram' className='opacity-80 transition hover:opacity-100'>
                ◎
              </a>
              <a href='#' aria-label='Facebook' className='opacity-80 transition hover:opacity-100'>
                𝔣
              </a>
            </div>
          </div>

          <div className='min-w-0 sm:col-span-3'>
            <h3 className='text-sm font-semibold text-slate-200'>Customer Support</h3>
            <ul className='mt-3 space-y-3 text-slate-300'>
              <li>
                <a href='#' className='hover:text-white'>
                  How to Cancel
                </a>
              </li>
              <li>
                <a href='#' className='inline-flex items-center gap-3 rounded-xl border border-slate-400/40 px-4 py-2'>
                  <span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300'>
                    🎧
                  </span>
                  <span>
                    <span className='block text-sm text-white'>Customer Support</span>
                    <span className='block text-xs text-slate-300'>24/7/365</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className='min-w-0 sm:col-span-3'>
            <h3 className='text-sm font-semibold text-slate-200'>Legal</h3>
            <ul className='mt-3 space-y-3 text-slate-300'>
              <li>
                <a href='#' className='hover:text-white'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div className='min-w-0 sm:col-span-3'>
            <h3 className='text-sm font-semibold text-slate-200'>About Us</h3>
            <ul className='mt-3 space-y-3 text-slate-300'>
              <li>
                <a href='#' className='hover:text-white'>
                  Help
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Reviews
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-4 hidden justify-end md:flex'>
          <div className='inline-flex items-center rounded-md border border-slate-500/40 px-3 py-2'>
            <span className='text-sm'>English</span>
            <span className='ml-2 text-slate-300'>▾</span>
          </div>
        </div>

        <div className='mt-10 h-px w-full bg-slate-600/30' />

        <div className='mt-6 flex flex-col items-start justify-between gap-4 text-xs text-slate-300 md:flex-row md:items-center'>
          <p>
            Copyright © 2024–2025 myIQ™. All rights reserved. All trademarks referenced herein are the properties of
            their respective owners.
          </p>

          <div className='flex items-center gap-6'>
            <div className='inline-flex items-center rounded-md border border-slate-500/40 px-3 py-2 md:hidden'>
              <span className='text-sm'>English</span>
              <span className='ml-2 text-slate-300'>▾</span>
            </div>

            <div className='flex gap-2'>
              <span className='rounded bg-white px-2 py-1 text-[10px] font-semibold text-slate-800'>VISA</span>
              <span className='rounded bg-white px-2 py-1 text-[10px] font-semibold text-slate-800'>Mastercard</span>
              <span className='rounded bg-white px-2 py-1 text-[10px] font-semibold text-slate-800'>PayPal</span>
              <span className='rounded bg-white px-2 py-1 text-[10px] font-semibold text-slate-800'>Apple Pay</span>
              <span className='rounded bg-white px-2 py-1 text-[10px] font-semibold text-slate-800'>G Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
