import { type FC } from 'react'
import Link from 'next/link'

// interface for header component props
interface IProps {}

// component
const HeaderComponent: FC<Readonly<IProps>> = (props) => {
  // return
  return (
    <div className='mt-3.5 flex flex-col'>
      <div className='mx-auto flex w-full items-center justify-between px-4 md:px-6'>
        <Link href={'/'}>
          <h1 className='text-4xl'>Book Store</h1>
        </Link>
        <nav>
          <ul className='flex gap-5'>
            <li className='text-xl'>Home</li>
            <li className='text-xl'>Categories</li>
            <li className='text-xl'>About</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HeaderComponent
