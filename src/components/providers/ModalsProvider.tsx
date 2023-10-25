import { AddMealModal } from "../modals/AddMealModal"
import MealViewModal from "../modals/MealViewModal"

export const ModalsProvider: React.FC = () => {
  return (
    <>
      <MealViewModal />
      <AddMealModal />
    </>
  )
}
