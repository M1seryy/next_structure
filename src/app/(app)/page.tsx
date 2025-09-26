import { type FC } from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { HomeModule } from '@/app/modules/home'
import { fetchPopularBooks } from '../entities'

// component
const HomePage: FC = async () => {
  const queryClient = getQueryClient()
  // prefetch books data
  await queryClient.prefetchQuery({
    queryKey: ['books'],
    queryFn: () => fetchPopularBooks(),
  })

  // return
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule />
    </HydrationBoundary>
  )
}

export const revalidate = 30

export default HomePage
