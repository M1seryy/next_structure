import { type FC } from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { HomeModule } from '@/app/modules/home'
import { fetchPopularBooks } from '@/app/entities/api'

// interface
interface IProps {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const revalidate = 30

// component
const HomePage: FC<Readonly<IProps>> = async (props) => {
  const { params, searchParams } = props

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['books', ''],
    queryFn: () => fetchPopularBooks(),
  })

  // return
  const sp = await searchParams
  const searchQuery = (sp?.q as string) || ''

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule searchQuery={searchQuery} />
    </HydrationBoundary>
  )
}

export default HomePage
