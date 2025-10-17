import type { FC, ReactNode } from 'react'
import { CheckSvg } from '@/app/shared/svg'

// props
interface IProps {
  children: ReactNode
  colorClassName?: string
}

// component
const MyIqCheckListItem: FC<Readonly<IProps>> = (props) => {
  const { children, colorClassName } = props

  // return
  return (
    <li className='flex items-start gap-2'>
      <CheckSvg className={['mt-0.5 h-4 w-4 min-w-4', colorClassName || 'text-[#007AFF]'].join(' ')} />
      <span>{children}</span>
    </li>
  )
}

export default MyIqCheckListItem
