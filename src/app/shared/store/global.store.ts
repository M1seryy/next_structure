import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// interface for global state
interface IState {
  menu: boolean
}

// interface for store with actions
interface IStore extends IState {
  handleGlobalStore: (value: Partial<IState>) => void
}

// global store for app-wide state management
export const useGlobalStore = create<IStore>()(
  devtools(
    (set) => ({
      menu: false,
      // generic handler for updating any state property
      handleGlobalStore: (value: Partial<IState>) => set((state: IState) => ({ ...state, ...value })),
    }),
    { enabled: process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' },
  ),
)
