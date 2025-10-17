'use client'

import { type FC } from 'react'
import { MyIqSection } from '@/app/shared/ui'
import { FAQ_ITEMS } from '.'
import { Accordion, AccordionItem } from '@heroui/accordion'

// props
interface IProps {}

const faqs = FAQ_ITEMS

// component
const IqFaqComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection innerClassName='py-8'>
      <div className='grid gap-3 sm:[grid-template-columns:360px_1fr]'>
        <div className='w-full text-center sm:text-left'>
          <h2 className='text-brand-ink text-center text-[36px] leading-tight font-extrabold tracking-tight sm:text-left lg:text-[40px]'>
            Frequently
            <br />
            Asked
            <br />
            Questions
          </h2>
        </div>

        <div className='w-full'>
          <Accordion variant='splitted' selectionMode='single'>
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} aria-label={item.q} title={item.q} className='px-2'>
                <div className='px-4 pt-1 pb-4 text-[14px] leading-6 text-slate-600'>{item.a}</div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </MyIqSection>
  )
}

export default IqFaqComponent
