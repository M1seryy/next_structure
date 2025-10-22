import { useQuery } from '@tanstack/react-query'
import { authApi } from './auth.api'

export const useAuthSession = () => {
    return useQuery({
        queryKey: ['auth', 'session'],
        queryFn: () => authApi.getSession(),
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}
