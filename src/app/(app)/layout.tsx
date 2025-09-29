import { type FC, type ReactNode } from 'react'
import '@/config/styles/global.css'
import { LayoutModule } from '../modules/layout'
import { RestApiProvider } from '@/pkg/libraries/rest-api'

// interface
interface IProps {
  children: ReactNode
}

// component
const RootLayout: FC<Readonly<IProps>> = (props) => {
  const children = props.children
  // return
  return (
    <html lang='en'>
      <body>
        <RestApiProvider>
          <LayoutModule>{children}</LayoutModule>
        </RestApiProvider>
      </body>
    </html>
  )
}

export default RootLayout
