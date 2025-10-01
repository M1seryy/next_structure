import { type FC } from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { BookModule } from '@/app/modules/book'
import { fetchBookByWorkId } from '@/app/entities'

// interface for page props
interface IProps {
  params: Promise<{ locale: string; id: string }>
}

export const revalidate = 30
export const dynamic = 'force-static'

// component
const BookPage: FC<Readonly<IProps>> = async (props) => {
  const { params } = props
  const { locale, id } = await params

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['book', id],
    queryFn: () => fetchBookByWorkId(id),
  })

  // return
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BookModule bookId={id} />
    </HydrationBoundary>
  )
}

export default BookPage
