import type { FC, ReactNode } from 'react'

// props
interface IProps {
  children: ReactNode
  center?: boolean
  className?: string
}

// component
const MyIqSectionHeading: FC<Readonly<IProps>> = (props) => {
  const { children, center, className } = props

  // return
  return (
    <h2
      className={[
        'text-brand-ink text-[36px] font-extrabold tracking-tight lg:text-[40px]',
        center ? 'text-center' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </h2>
  )
}

export default MyIqSectionHeading


