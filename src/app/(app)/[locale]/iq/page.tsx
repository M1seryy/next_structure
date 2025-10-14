import { type FC } from 'react'
import MyIqModule from '@/app/modules/iq/home'

//
interface IProps {}

//component
const MyIqPage: FC<Readonly<IProps>> = () => {
  // return
  return (
    <div>
      <MyIqModule />
    </div>
  )
}

export default MyIqPage
