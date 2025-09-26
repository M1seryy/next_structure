import { type FC } from 'react'
import Link from 'next/link'

// interface for not found page props
interface IProps {}

// not found page component
const NotFoundPage: FC<Readonly<IProps>> = () => {
  // return
  return (
    <div className='flex min-h-[400px] flex-col items-center justify-center space-y-4'>
      <h1 className='text-4xl font-bold text-gray-900'>404</h1>
      <h2 className='text-2xl font-semibold text-gray-700'>Page Not Found</h2>
      <p className='text-gray-600'>The page you are looking for does not exist.</p>
      <Link href='/' className='mt-4 rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700'>
        Go Home
      </Link>
    </div>
  )
}

export default NotFoundPage
