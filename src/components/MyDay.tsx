import { LuSandwich } from "react-icons/lu"
import { MdOutlineLocalCafe } from "react-icons/md"
import { GiHotMeal } from "react-icons/gi"
import { PiWineFill } from "react-icons/pi"
import { RiDragDropLine } from "react-icons/ri"
import DatePicker from "./DatePicker"
import { Dish } from "./RecipeSection"
import { useState } from "react"
import { useMealViewModal } from "@/hooks/useMealViewModal"
import { BiSolidTrashAlt } from "react-icons/bi"
import { Button } from "./ui/button"

const sections = [
  {
    id: "breakfast",
    icon: <MdOutlineLocalCafe />,
    name: "Breakfast",
  },
  {
    id: "lunch",
    icon: <LuSandwich />,
    name: "Lunch",
  },
  {
    id: "dinner",
    icon: <GiHotMeal />,
    name: "Dinner",
  },
  {
    id: "supper",
    icon: <PiWineFill />,
    name: "Supper",
  },
]

type MealState = {
  breakfast: Dish | null
  lunch: Dish | null
  dinner: Dish | null
  supper: Dish | null
}

export default function MyDay() {
  const openMealModal = useMealViewModal((state) => state.onOpen)
  const [meals, setMeals] = useState<MealState>({
    breakfast: null,
    lunch: null,
    dinner: null,
    supper: null,
  })

  const removeMeal = (sectionId: string) => {
    setMeals((prev) => {
      const updatedMeals = { ...prev }
      ;(updatedMeals as any)[sectionId] = null

      return updatedMeals
    })
  }

  const handleOnDrop = (e: React.DragEvent, sectionId: string) => {
    const mealInfo = JSON.parse(e.dataTransfer.getData("mealInfo")) as Dish
    console.log("🚀 ~ file: MyDay.tsx:50 ~ handleOnDrop ~ mealInfo:", mealInfo)
    setMeals((prev) => {
      const updatedMeals = { ...prev }
      ;(updatedMeals as any)[sectionId] = mealInfo

      return updatedMeals
    })
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <section className="w-1/4">
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          My day
        </h2>
        <DatePicker />
      </div>

      <div className="flex flex-col gap-4 text-center px-5 select-none">
        {sections.map((el) => {
          if ((meals as any)[el.id]) {
            const content = (meals as any)[el.id] as Dish

            return (
              <div
                className="flex text-xl items-center justify-between border-b pb-4"
                key={content.id}
                onDrop={(e) => handleOnDrop(e, el.id)}
                onDragOver={handleDragOver}
              >
                <div className="flex cursor-pointer items-center duration-100 hover:scale-105">
                  <img
                    src={content.image}
                    alt={`${content.name} image`}
                    className="w-[40%]"
                    onClick={() => openMealModal(el.id)}
                  />

                  <p className="w-[60%]">{content.name}</p>
                </div>

                <Button
                  variant="ghost"
                  className="bg-destructive-foreground z-50"
                  onClick={() => removeMeal(el.id)}
                >
                  <BiSolidTrashAlt className="text-destructive" />
                </Button>
              </div>
            )
          } else {
            return (
              <div
                className="grid grid-cols-3 text-xl items-center opacity-60 border-b pb-4"
                key={el.id}
                onDrop={(e) => handleOnDrop(e, el.id)}
                onDragOver={handleDragOver}
              >
                <span className="p-4 border-primary border w-fit rounded-lg text-2xl text-primary">
                  {el.icon}
                </span>

                <p>{el.name}</p>

                <div className="flex justify-end">
                  <RiDragDropLine />
                </div>
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}
