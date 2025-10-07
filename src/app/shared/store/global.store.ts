import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type IBooksSortStore, type IBooksSortState, SortOrder } from '@/app/entities/models'

export const useBooksSortStore = create<IBooksSortStore>()(
  persist(
    (set) => ({
      // State
      sortOrder: SortOrder.DEFAULT,
      filters: {},

      // Universal handler 
      updateState: (updates: Partial<IBooksSortState>) => set((state) => ({ ...state, ...updates })),
    }),
    {
      name: "books-sort-store",
      partialize: (state) => ({
        sortOrder: state.sortOrder,
        filters: state.filters
      })
    }
  )
);