import type { FC, ReactNode } from 'react'
import { Button } from '@heroui/button'
import { MyIqCheckListItem } from '@/app/shared/ui/my-iq/check-list-item'

// props
interface IProps {
  title: string
  price: string
  period: string
  children: ReactNode
  buttonText: string
}

// component
const MyIqPricingCard: FC<Readonly<IProps>> = (props) => {
  const { title, price, period, children, buttonText } = props

  // return
  return (
    <div className='border-support-border rounded-2xl border bg-white p-6 text-left shadow-[0_8px_30px_rgba(20,58,94,0.08)]'>
      <h3 className='text-brand-ink text-[16px] font-semibold tracking-wide'>{title}</h3>
      <div className='bg-support-divider my-4 h-px w-full' />

      <div className='flex items-end gap-2'>
        <div className='text-brand-ink text-[40px] leading-none font-extrabold'>{price}</div>
        <div className='pb-1 text-sm text-slate-500'>{period}</div>
      </div>

      <ul className='text-brand-ink mt-4 space-y-3 text-[15px]'>{children}</ul>

      <Button
        radius='lg'
        className='bg-primary-green mt-6 h-11 w-full rounded-xl px-6 text-[15px] font-semibold text-white shadow-sm hover:opacity-95'
      >
        {buttonText}
      </Button>
    </div>
  )
}

export default MyIqPricingCard
