import { type FC } from 'react'
import { DatabaseBooksModule } from '@/app/modules/database-books'
import { fetchBooksFromDatabase } from '@/app/entities/api/database'

// interface
interface IProps {
  params: Promise<{ locale: string }>
}

export const revalidate = 30
export const dynamic = 'force-static'

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'uk' }]
}

// component
const BooksPage: FC<Readonly<IProps>> = async (props) => {
  const { params } = props
  const { locale } = await params

  // Fetch books from database on server side
  const books = await fetchBooksFromDatabase()

  // return
  return <DatabaseBooksModule books={books} />
}

export default BooksPage
