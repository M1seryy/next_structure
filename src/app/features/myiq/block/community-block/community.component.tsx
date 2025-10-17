import type { FC } from 'react'
import { MyIqSection } from '@/app/shared/ui'
import { InstagramSvg, FacebookSvg, XTwitterSvg } from '@/app/shared/svg'

// props
interface IProps {}

// component
const IqCommunityComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection innerClassName='flex items-center justify-between gap-6 py-8'>
      <div>
        <h2 className='text-brand-ink text-[36px] font-extrabold tracking-tight lg:text-[40px]'>Community</h2>
        <p className='mt-2 max-w-2xl text-[16px] text-slate-600'>
          Follow us on social media for daily quizzes, challenges and brain teasers to keep your mind sharp
        </p>
      </div>

      <div className='flex items-center gap-4'>
        <a
          href='#'
          className='border-link text-brand-ink hover:bg-support-surfaceAlt inline-flex h-12 w-20 items-center justify-center rounded-xl border text-[22px] font-semibold shadow-sm transition'
          aria-label='X / Twitter'
        >
          <XTwitterSvg className='h-6 w-6' />
        </a>
        <a
          href='#'
          className='border-link text-brand-ink hover:bg-support-surfaceAlt inline-flex h-12 w-20 items-center justify-center rounded-xl border shadow-sm transition'
          aria-label='Instagram'
        >
          <InstagramSvg className='h-6 w-6' />
        </a>
        <a
          href='#'
          className='border-link text-brand-ink hover:bg-support-surfaceAlt inline-flex h-12 w-20 items-center justify-center rounded-xl border shadow-sm transition'
          aria-label='Facebook'
        >
          <FacebookSvg className='h-6 w-6' />
        </a>
      </div>
    </MyIqSection>
  )
}

export default IqCommunityComponent
