import { create } from 'zustand'

interface ViewState {
  view: string
  setCurrentView: (view: string) => void
}

export const useIntersectionStore = create<ViewState>((set) => ({
  view: "about",
  setCurrentView: (view) => set(() => ({ view: view })),
//   removeAllBears: () => set({ bears: 0 }),
}))