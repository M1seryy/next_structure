import { type FC } from 'react'

// interface
interface IProps {}

// component
const FooterComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <footer className='mt-auto bg-gray-100 py-8'>
      <div className='mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 md:px-6'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Книжковий магазин</h3>
            <p className='text-sm text-gray-600'>Найкращі книги для всіх смаків та віку</p>
          </div>

          <div>
            <h3 className='mb-4 text-lg font-semibold'>Контакти</h3>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>📧 info@bookstore.com</li>
              <li>📞 +380 50 123 4567</li>
              <li>📍 Київ, Україна</li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-lg font-semibold'>Посилання</h3>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Про нас
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Доставка
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Контакти
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-8 border-t border-gray-300 pt-6 text-center text-sm text-gray-600'>
          <p>&copy; 2024 Книжковий магазин. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
