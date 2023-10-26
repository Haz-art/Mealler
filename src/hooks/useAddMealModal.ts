import { create } from "zustand"

interface AddMealModal {
  isOpen: boolean

  onOpen: () => void
  onClose: () => void
}

export const useAddMealModal = create<AddMealModal>((set) => ({
  isOpen: false,

  onOpen: () => set(() => ({ isOpen: true })),

  onClose: () => set(() => ({ isOpen: false })),
}))
