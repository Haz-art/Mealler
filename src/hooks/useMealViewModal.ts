import { create } from "zustand"

interface MealViewModal {
  isOpen: boolean
  mealId: number | string | null

  onOpen: (mealId: number | string) => void
  onClose: () => void
}

export const useMealViewModal = create<MealViewModal>((set) => ({
  isOpen: false,
  mealId: null,

  onOpen: (mealId) =>
    set(() => ({
      isOpen: true,
      mealId,
    })),

  onClose: () => set(() => ({ isOpen: false })),
}))
