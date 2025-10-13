// import { create } from 'zustand'
// import { persist } from 'zustand/middleware'
// import { type IBooksSortStore, type IBooksSortState, SortOrder } from '@/app/entities/models'

// NOTE: Sorting is now controlled via URL params. The persisted store is
// commented out intentionally to keep a single source of truth (the URL).
// If you need to restore local sorting state in the future, uncomment below.

// export const useBooksSortStore = create<IBooksSortStore>()(
//   persist(
//     (set) => ({
//       // State
//       sortOrder: SortOrder.DEFAULT,
//       filters: {},
//
//       // Universal handler
//       updateState: (updates: Partial<IBooksSortState>) => set((state) => ({ ...state, ...updates })),
//     }),
//     {
//       name: 'books-sort-store',
//       partialize: (state) => ({
//         sortOrder: state.sortOrder,
//         filters: state.filters,
//       }),
//     }
//   )
// )