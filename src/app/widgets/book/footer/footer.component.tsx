import { type FC } from 'react'

// interface for footer component props
interface IProps {}

// component
const BookFooterComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <footer className='mt-auto bg-gray-100 py-8'>
      <div className='mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 md:px-6'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          <div>
            <h3 className='mb-4 text-lg font-semibold'>About</h3>
            <p className='text-sm text-gray-600'>
              We are passionate about books and reading. Our mission is to provide access to quality literature for
              everyone.
            </p>
          </div>

          <div>
            <h3 className='mb-4 text-lg font-semibold'>Contact</h3>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>📧 info@bookstore.com</li>
              <li>📞 +380 50 123 4567</li>
              <li>📍 Kyiv, Ukraine</li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-lg font-semibold'>Quick Links</h3>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Books
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-8 border-t border-gray-300 pt-6 text-center text-sm text-gray-600'>
          <p>© 2024 Book Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default BookFooterComponent
