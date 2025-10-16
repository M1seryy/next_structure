import type { FC, JSX, ReactNode } from 'react'
import { MYIQ_CONTAINER } from './container.constants'

// props
interface IProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

// component
const MyIqContainer: FC<Readonly<IProps>> = ({ children, className, as: Tag = 'main' }) => {
  return <Tag className={[MYIQ_CONTAINER, className].filter(Boolean).join(' ')}>{children}</Tag>
}

export default MyIqContainer
