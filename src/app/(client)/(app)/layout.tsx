import { type FC, type ReactNode } from 'react'

// interface
interface IProps {
  children: ReactNode
}

// component
const Layout: FC<Readonly<IProps>> = ({ children }) => {
  return (
    <html lang='en' dir='ltr'>
      <body>
        <div className='min-h-screen bg-gray-50'>
          <header className='bg-white shadow'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <h1 className='text-xl font-semibold'>Your Project</h1>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}

export default Layout
