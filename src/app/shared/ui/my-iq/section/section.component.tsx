import type { FC, ReactNode } from 'react'
import { MYIQ_SECTION_INNER, MYIQ_SECTION_WRAPPER } from './section.constants'

interface IProps {
  fullBleedBgClassName?: string
  innerClassName?: string
  children: ReactNode
}

const MyIqSection: FC<Readonly<IProps>> = ({ fullBleedBgClassName, innerClassName, children }) => {
  return (
    <section className='w-full'>
      <div className={[MYIQ_SECTION_WRAPPER, fullBleedBgClassName].filter(Boolean).join(' ')}>
        <div className={[MYIQ_SECTION_INNER, innerClassName].filter(Boolean).join(' ')}>{children}</div>
      </div>
    </section>
  )
}

export default MyIqSection
