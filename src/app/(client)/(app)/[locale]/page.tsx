import { type Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { type FC } from 'react'

// interface
interface IProps {
  params: Promise<{ locale: Locale }>
}

// component
const Page: FC<Readonly<IProps>> = async (props) => {
  const { locale } = await props.params

  setRequestLocale(locale)

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold'>Welcome to Your Project</h1>
      <p>This is a clean starting point for your development.</p>
      <p>Locale: {locale}</p>
    </div>
  )
}

export default Page
