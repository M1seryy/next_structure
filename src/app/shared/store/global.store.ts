import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type IBooksSortStore } from '@/app/entities/models'

// Books sort store - only for sorting functionality
export const useBooksSortStore = create<IBooksSortStore>()(
  persist(
    (set) => ({
      // State
      sortOrder: 'default',

      // Actions
      setSortOrder: (order: 'newest' | 'oldest' | 'default') => set({ sortOrder: order }),
    }),
    {
      name: "books-sort-store",
      partialize: (state) => ({
        sortOrder: state.sortOrder
      })
    }
  )
);