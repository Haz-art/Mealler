import { Meal } from "@/types/meal"
import { create } from "zustand"

interface MealViewModal {
  isOpen: boolean
  dish: Meal | null

  onOpen: (dish: Meal) => void
  onClose: () => void
}

export const useMealViewModal = create<MealViewModal>((set) => ({
  isOpen: false,
  dish: null,

  onOpen: (dish: Meal) =>
    set(() => ({
      isOpen: true,
      dish: dish,
    })),

  onClose: () => set(() => ({ isOpen: false })),
}))
