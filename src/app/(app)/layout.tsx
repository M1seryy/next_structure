import { type FC, type ReactNode } from 'react'
import '@/config/styles/global.css'
import { LayoutModule } from '../modules/layout'

// interface
interface IProps {
  children: ReactNode
}

// component
const RootLayout: FC<Readonly<IProps>> = ({ children }) => {
  // return
  return (
    <html lang='en'>
      <body>
        <LayoutModule>{children}</LayoutModule>
      </body>
    </html>
  )
}

export default RootLayout
