import type { FC } from 'react'
import { Instagram, Facebook } from 'lucide-react'

// props
interface IProps {}

// component
const IqCommunityComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section className='h-[184px] w-full py-8'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4'>
        <div>
          <h2 className='text-[36px] font-extrabold tracking-tight text-[#2A3342] lg:text-[40px]'>Community</h2>
          <p className='mt-2 max-w-2xl text-[16px] text-slate-600'>
            Follow us on social media for daily quizzes, challenges and brain teasers to keep your mind sharp
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <a
            href='#'
            className='inline-flex h-12 w-20 items-center justify-center rounded-xl border border-[#1D63F0] text-[22px] font-semibold text-[#2A3342] shadow-sm transition hover:bg-[#EEF6FB]'
            aria-label='X / Twitter'
          >
            X
          </a>
          <a
            href='#'
            className='inline-flex h-12 w-20 items-center justify-center rounded-xl border border-[#1D63F0] text-[#2A3342] shadow-sm transition hover:bg-[#EEF6FB]'
            aria-label='Instagram'
          >
            <Instagram className='h-6 w-6' />
          </a>
          <a
            href='#'
            className='inline-flex h-12 w-20 items-center justify-center rounded-xl border border-[#1D63F0] text-[#2A3342] shadow-sm transition hover:bg-[#EEF6FB]'
            aria-label='Facebook'
          >
            <Facebook className='h-6 w-6' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default IqCommunityComponent
