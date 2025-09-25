import { type FC } from 'react'
import Link from 'next/link'

import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {}

// component
const HeaderComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <div className='mt-3.5 flex flex-col'>
      <ContainerComponent variant='section'>
        <div className='flex items-center justify-between'>
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
      </ContainerComponent>
    </div>
  )
}

export default HeaderComponent
