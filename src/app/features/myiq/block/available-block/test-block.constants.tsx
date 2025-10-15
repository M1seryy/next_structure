import type { ReactNode } from 'react'
import { AvailableBrainSvg, AvailableHeadSvg, AvailableHandsSvg, AvailableLightbulbSvg } from '@/app/shared'

type TestStatus = 'active' | 'disabled'

interface AvailableTestItem {
  key: string
  title: string
  minutes: number
  questions: number
  cta: string
  status: TestStatus
  icon: ReactNode
}

export const AVAILABLE_TESTS: AvailableTestItem[] = [
  {
    key: 'iq',
    title: 'IQ / Intelligence Test',
    minutes: 15,
    questions: 25,
    cta: 'Start IQ Test Now',
    status: 'active',
    icon: <AvailableBrainSvg className='h-[38px] w-[38px]' />,
  },
  {
    key: 'personality',
    title: 'Personality Type',
    minutes: 20,
    questions: 90,
    cta: 'Start Personality Test',
    status: 'active',
    icon: <AvailableHeadSvg className='h-[38px] w-[38px]' />,
  },
  {
    key: 'love',
    title: 'Love Style',
    minutes: 30,
    questions: 120,
    cta: 'Start Love Style Test',
    status: 'active',
    icon: <AvailableHandsSvg className='h-[38px] w-[38px]' />,
  },
  {
    key: 'career',
    title: 'Career',
    minutes: 25,
    questions: 35,
    cta: 'Coming Soon',
    status: 'disabled',
    icon: <AvailableLightbulbSvg className='h-[38px] w-[38px]' />,
  },
]
