import { type FC } from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { DatabaseBooksModule } from '@/app/modules/database-books'
import { fetchBooksFromDatabase } from '@/app/entities/api/database'

// interface
interface IProps {
  params: Promise<{ locale: string }>
}

export const revalidate = 30
export const dynamic = 'force-static'

// component
const BooksPage: FC<Readonly<IProps>> = async (props) => {
  const { params } = props
  const { locale } = await params

  const queryClient = getQueryClient()

  // Prefetch books from database
  await queryClient.prefetchQuery({
    queryKey: ['books', 'database'],
    queryFn: () => fetchBooksFromDatabase(),
  })

  // return
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DatabaseBooksModule />
    </HydrationBoundary>
  )
}

export default BooksPage
