import { Category } from "./category"

export interface MealCategory {
  mealId: number
  categoryId: number
  category: Category
}

export interface Meal {
  id: number
  rating: number
  name: string
  image: string
  description: string
  mealCategories: MealCategory[]
}
