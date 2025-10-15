'use client'

import { type FC, useState } from 'react'
import { MyIqSection } from '@/app/shared/ui'
import { FAQ_ITEMS } from '.'

// props
interface IProps {}

const faqs = FAQ_ITEMS

// component
const IqFaqComponent: FC<Readonly<IProps>> = () => {
  // return
  const [open, setOpen] = useState<number | null>(null)

  return (
    <MyIqSection innerClassName='py-8'>
      <div className='grid gap-3 md:[grid-template-columns:360px_1fr]'>
        <div className='max-w-[360px]'>
          <h2 className='text-[36px] leading-tight font-extrabold tracking-tight text-[#2A3342] lg:text-[40px]'>
            Frequently
            <br />
            Asked
            <br />
            Questions
          </h2>
        </div>

        <div className='w-full'>
          {faqs.map((item, idx) => {
            const isOpen = open === idx
            const isLast = idx === faqs.length - 1
            return (
              <div key={idx} className={!isLast ? 'border-b border-[#E6EEF9]' : ''}>
                <button
                  type='button'
                  className='flex w-full items-center justify-between px-6 py-5 text-left text-[16px] font-medium text-[#2A3342]'
                  onClick={() => setOpen((prev) => (prev === idx ? null : idx))}
                >
                  <span className='pr-2'>{item.q}</span>
                  <span className='pl-2 text-[20px] text-slate-400 md:text-[22px]'>{isOpen ? '‹' : '›'}</span>
                </button>
                {isOpen && <div className='px-6 pt-1 pb-6 text-[14px] leading-6 text-slate-600'>{item.a}</div>}
              </div>
            )
          })}
        </div>
      </div>
    </MyIqSection>
  )
}

export default IqFaqComponent
