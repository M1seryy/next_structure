import { type FC } from 'react'
import { MyIqLogoSvg } from '@/app/shared'
import { MyIqSection } from '@/app/shared/ui'
import { FacebookSvg, InstagramSvg, MastercardSvg, PaypalSvg, RedditSvg, VisaSvg, XTwitterSvg } from '@/app/shared'

//interface
interface IProps {}

//component
const FooterComponent: FC<Readonly<IProps>> = () => {
  //return
  return (
    <MyIqSection fullBleedBgClassName='bg-[#001B36] text-white' innerClassName='py-8 sm:py-10'>
      <div className='flex flex-col justify-between md:flex-row md:gap-5'>
        <div className='flex flex-col justify-start gap-6'>
          <a
            className='w-fit flex-shrink-0 [&_svg]:h-[31px] [&_svg]:w-[108px]'
            style={{ pointerEvents: 'none' }}
            aria-label='Logo'
            href='#'
          >
            <div className='flex items-center gap-2'>
              <MyIqLogoSvg className='ml-2 !h-[24px] !w-[27px] shrink-0 text-white min-[361px]:hidden' />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='105'
                height='30'
                fill='none'
                className='max-[360px]:hidden'
              >
                <path
                  fill='#fff'
                  fillRule='evenodd'
                  d='m14.29 22.788-.082-.048zm-8.865-12.77-.373-.148a.7.7 0 0 1-.338.41l-.286.148a4.04 4.04 0 0 0-1.62 1.517 4.253 4.253 0 0 0 .068 4.469l.301.476.002.003c.4.619 1.006 1.07 1.707 1.264a2.9 2.9 0 0 0 2.098-.215l.004-.002a.65.65 0 0 1 .513-.04c.17.056.314.183.399.354.084.173.1.374.041.56a.7.7 0 0 1-.344.417l-.376.197.22.364c.271.448.641.826 1.082 1.101l.01.007a3.2 3.2 0 0 0 2.471.323l.008-.002 6.186-1.85h.001a.65.65 0 0 1 .51.058c.157.09.277.241.33.426a.77.77 0 0 1-.063.555.7.7 0 0 1-.405.344l-1.54.461-.702.211.557.477c.358.306.688.563.991.8v.001c.957.749 1.659 1.297 2.19 2.528l.003.009.005.009c.085.173.217.32.383.422.164.1.354.15.546.145a1.01 1.01 0 0 0 .729-.314 1.06 1.06 0 0 0 .298-.743v-1.698a.76.76 0 0 1 .151-.45.7.7 0 0 1 .372-.254h.002l3.928-1.012c.398-.093.749-.326.993-.656s.367-.734.35-1.145a1.8 1.8 0 0 0-.5-1.237l-.005-.004-.634-.641-.207-.21-.261.136-.255.132a.655.655 0 0 1-.664-.025.7.7 0 0 1-.254-.286v-.001a.73.73 0 0 1 .091-.792.7.7 0 0 1 .208-.167h.001l.433-.224.008-.004.008-.005a3.83 3.83 0 0 0 1.412-1.427 4 4 0 0 0 .519-1.962c0-.42-.08-.835-.235-1.223a3.2 3.2 0 0 0-.67-1.04h-.001l-.328-.339-.002-.001a.8.8 0 0 1-.17-.283l-.07-.22a5.5 5.5 0 0 0-1.784-2.606 5.24 5.24 0 0 0-2.893-1.146l-.14-.01-.115.078a2.62 2.62 0 0 0-1.054 1.499 2.7 2.7 0 0 0 .168 1.837l.003.006a.73.73 0 0 1-.092.792.7.7 0 0 1-.204.165.654.654 0 0 1-.664-.025.7.7 0 0 1-.254-.285 4.2 4.2 0 0 1-.384-2.288 4.15 4.15 0 0 1 .884-2.134l.311-.388-.445-.22a4.845 4.845 0 0 0-3.834-.211l-.485.177.294.425q.203.293.357.616l.001.002.188.388v.002a.75.75 0 0 1-.092.805.656.656 0 0 1-.954.078.7.7 0 0 1-.166-.218l-.184-.396a3.02 3.02 0 0 0-1.334-1.434 2.9 2.9 0 0 0-1.92-.284h-.002A7.1 7.1 0 0 0 7.11 6.66a7.43 7.43 0 0 0-2.058 3.21zm21.38 6.333-.22.25.206.262.375.478.013.017.015.015c.382.392.66.88.807 1.42.146.539.155 1.108.025 1.652a3.26 3.26 0 0 1-.763 1.446 3.1 3.1 0 0 1-1.336.86l-3.104.802-.3.078v1.13c0 .665-.255 1.3-.706 1.768-.451.466-1.06.725-1.69.725h-.005c-.454.005-.9-.126-1.285-.38a2.4 2.4 0 0 1-.882-1.05c-.775-1.796-2.034-2.538-3.47-3.386q-.322-.189-.654-.39l-.152-.093-.17.05-2.002.597h-.001c-.43.125-.876.184-1.323.178h-.01a4.4 4.4 0 0 1-2.339-.657l-.006-.004a4.53 4.53 0 0 1-1.88-2.193l-.101-.246-.266-.003a4.2 4.2 0 0 1-1.99-.532 4.36 4.36 0 0 1-1.529-1.434l-.002-.003-.316-.476a5.7 5.7 0 0 1-.835-2.16 5.8 5.8 0 0 1 .09-2.33 5.65 5.65 0 0 1 1.002-2.084 5.4 5.4 0 0 1 1.732-1.476l.131-.07.053-.14a8.9 8.9 0 0 1 2.499-3.566 8.44 8.44 0 0 1 3.836-1.881 4.3 4.3 0 0 1 2.636.355l.192.092.184-.108a6.2 6.2 0 0 1 3.363-.86 6.24 6.24 0 0 1 3.302 1.084l.431.298.094.064.114.006c1.34.066 2.631.55 3.704 1.388a6.9 6.9 0 0 1 2.309 3.318l.028.088.064.067.145.149a4.76 4.76 0 0 1 1.33 3.29 5.38 5.38 0 0 1-1.342 3.595'
                ></path>
              </svg>
            </div>
          </a>
          <ul className='flex gap-4 text-white'>
            <li>
              <a aria-label='Reddit' target='_blank' className='text-white [&_svg]:h-6 [&_svg]:w-6' href='#'>
                <RedditSvg />
              </a>
            </li>
            <li>
              <a aria-label='X (Twitter)' target='_blank' className='text-white [&_svg]:h-6 [&_svg]:w-6' href='#'>
                <XTwitterSvg />
              </a>
            </li>
            <li>
              <a aria-label='Instagram' target='_blank' className='text-white [&_svg]:h-6 [&_svg]:w-6' href='#'>
                <InstagramSvg />
              </a>
            </li>
            <li>
              <a aria-label='Facebook' target='_blank' className='text-white [&_svg]:h-6 [&_svg]:w-6' href='#'>
                <FacebookSvg />
              </a>
            </li>
          </ul>
        </div>

        <div className='flex flex-col md:flex-row md:gap-5'>
          <div className='text-white max-md:mt-6 md:mr-10 lg:mr-20'>
            <p className='mb-4 text-lg font-semibold'>Customer Support</p>
            <a className='text-base font-medium' href='#'>
              How to Cancel
            </a>
            <a
              className='mt-3 flex max-w-max items-center justify-center gap-3 rounded-full border-2 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-[#001B36]'
              href='#'
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='h-6 w-6 shrink-0'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z'
                ></path>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 16v2a4 4 0 0 1-4 4h-5'
                ></path>
              </svg>
              <p>
                <span className='xs-sm:whitespace-nowrap'>Customer Support</span>
                <br />
                24/7/365
              </p>
            </a>
          </div>
          <ul className='mb-6 flex flex-col gap-4 max-md:mt-4 md:flex-row md:gap-20 lg:mb-12'>
            <li>
              <p className='mb-4 text-lg font-semibold text-white'>Legal</p>
              <ul className='flex flex-col gap-2'>
                <li>
                  <a className='text-base font-medium text-white' href='#'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className='text-base font-medium text-white' href='#'>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className='text-base font-medium text-white' href='#'>
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a className='text-base font-medium text-white' href='#'>
                    Refund Policy
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p className='mb-4 text-lg font-semibold text-white'>About Us</p>
              <ul className='flex flex-col gap-2'>
                <li>
                  <a className='text-base font-medium text-white' target='_blank' href='#'>
                    Help
                  </a>
                </li>
                <li>
                  <a className='text-base font-medium text-white' href='#'>
                    Blog
                  </a>
                </li>
                <li>
                  <a className='text-base font-medium text-white' href='#'>
                    Reviews
                  </a>
                </li>
                <li>
                  <a className='text-base font-medium text-white' href='#'>
                    Pricing
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <hr className='h-px w-full shrink-0 border-none bg-slate-600/30' />

      <div className='w-full pt-6'>
        <div className='flex flex-col gap-4 md:items-end'>
          <div className='flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center'>
            <div className='text-base text-white [&_a]:cursor-text [&_a]:font-normal [&_a]:text-white [&_a]:no-underline [&_a]:hover:no-underline'>
              <p>
                Copyright © 2024-2025{' '}
                <a href='#' title='myiq' target='_blank'>
                  myIQ
                </a>
                ™. All rights reserved. All trademarks referenced herein are the properties of their respective owners.
              </p>
            </div>
            <div className='justify-left flex grow-1 gap-1.5 [&_svg]:h-[25px] [&_svg]:w-[38px]'>
              <div className='flex h-8 w-[46px] items-center justify-center rounded-lg bg-white'>
                <VisaSvg />
              </div>
              <div className='flex h-8 w-[46px] items-center justify-center rounded-lg bg-white'>
                <MastercardSvg />
              </div>
              <div className='flex h-8 w-[46px] items-center justify-center rounded-lg bg-white'>
                <PaypalSvg />
              </div>
              {/* Apple Pay and Google Pay simplified badges */}
              <div className='flex h-8 w-[46px] items-center justify-center rounded-lg bg-white'>
                <span className='text-[12px] font-semibold text-black'>Apple</span>
              </div>
              <div className='flex h-8 w-[46px] items-center justify-center rounded-lg bg-white'>
                <span className='text-[12px] font-semibold text-black'>G Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyIqSection>
  )
}

export default FooterComponent
