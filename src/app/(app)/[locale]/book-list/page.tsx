import { type FC } from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { DatabaseBooksModule } from '@/app/modules/database-books'
import { databaseBooksQueryOptions } from '@/app/entities/api/database'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

// interface
interface IProps {
  params: Promise<{ locale: string }>
}

export const revalidate = 30

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'uk' }]
}

// component
const BooksPage: FC<Readonly<IProps>> = async (props) => {
  const { params } = props
  const { locale } = await params

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(databaseBooksQueryOptions())
  const dehydratedState = dehydrate(queryClient)
  const books = await queryClient.fetchQuery(databaseBooksQueryOptions())

  // return
  return (
    <HydrationBoundary state={dehydratedState}>
      <DatabaseBooksModule books={books} />
    </HydrationBoundary>
  )
}

export default BooksPage
