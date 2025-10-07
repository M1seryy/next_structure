import { type FC } from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { HomeModule } from '@/app/modules/home'
import { fetchPopularBooks } from '@/app/entities/api'

// interface
interface IProps {
  params: Promise<{ locale: string }>
}

export const revalidate = 30
export const dynamic = 'force-static'

// component
const HomePage: FC<Readonly<IProps>> = async (props) => {
  const { params } = props

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['books', ''],
    queryFn: () => fetchPopularBooks(),
  })

  // return
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule />
    </HydrationBoundary>
  )
}

export default HomePage
