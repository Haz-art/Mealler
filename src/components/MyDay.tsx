import { useEffect, useState } from "react"
import { useLocalStorage } from "usehooks-ts"
import { useMealViewModal } from "@/hooks/useMealViewModal"
import cuid from "cuid"
import { Meal } from "@/types/meal"

import { LuSandwich } from "react-icons/lu"
import { MdOutlineLocalCafe } from "react-icons/md"
import { GiHotMeal } from "react-icons/gi"
import { PiWineFill } from "react-icons/pi"
import { RiDragDropLine } from "react-icons/ri"
import { BiSolidTrashAlt } from "react-icons/bi"

import { Button } from "./ui/button"
import DatePicker from "./DatePicker"
import { format } from "date-fns"

enum MealType {
  Breakfast = "Breakfast",
  Lunch = "Lunch",
  Dinner = "Dinner",
  Supper = "Supper",
}

const sections = [
  {
    icon: <MdOutlineLocalCafe />,
    name: [MealType.Breakfast],
  },
  {
    icon: <LuSandwich />,
    name: [MealType.Lunch],
  },
  {
    icon: <GiHotMeal />,
    name: [MealType.Dinner],
  },
  {
    icon: <PiWineFill />,
    name: [MealType.Supper],
  },
]

type MealData = {
  [MealType.Breakfast]: Meal | null
  [MealType.Lunch]: Meal | null
  [MealType.Dinner]: Meal | null
  [MealType.Supper]: Meal | null
}

type DayMeals = {
  [key: string]: MealData | null
}

type MealPlan = {
  [key: string]: DayMeals
}

export default function MyDay() {
  const openMealModal = useMealViewModal((state) => state.onOpen)
  const [selectedDay, setSelectedDay] = useState(format(new Date(), "P"))
  const [mealPlan, setMealPlan] = useLocalStorage<MealPlan>("myDays", {})

  const mealsForSelectedDay = selectedDay ? mealPlan[selectedDay] || {} : {}

  useEffect(() => {
    console.log(mealPlan)
  }, [mealPlan])

  const handleDayChange = (value: string) => {
    if (selectedDay === value) return

    setSelectedDay(value)
  }

  const removeMeal = (sectionId: string) => {
    setMealPlan((prevMealPlan) => {
      const updatedMealPlan = { ...prevMealPlan }
      if (updatedMealPlan[selectedDay]) {
        updatedMealPlan[selectedDay][sectionId] = null
      }
      return updatedMealPlan
    })
  }

  const handleOnDrop = (e: React.DragEvent, sectionId: string) => {
    const mealInfo = JSON.parse(e.dataTransfer.getData("mealInfo")) as Meal
    setMealPlan((prevMealPlan) => {
      const updatedMealPlan = { ...prevMealPlan }
      if (!updatedMealPlan[selectedDay]) {
        updatedMealPlan[selectedDay] = {}
      }
      ;(updatedMealPlan[selectedDay] as any)[sectionId] = mealInfo
      return updatedMealPlan
    })
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <section className="w-full">
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          My day
        </h2>
        <DatePicker
          stringDate={selectedDay}
          setDate={(date) => handleDayChange(format(date, "P"))}
        />
      </div>

      <div className="flex flex-col gap-4 text-center px-5 select-none">
        {sections.map((section) => {
          if (mealsForSelectedDay[section.name.toString()]) {
            const currentMeal = mealsForSelectedDay[
              section.name.toString()
            ] as unknown as Meal
            return (
              <div
                className="flex text-xl items-center justify-between border-b pb-4"
                key={cuid()}
                onDrop={(e) => handleOnDrop(e, section.name.toString())}
                onDragOver={handleDragOver}
              >
                <div className="flex cursor-pointer items-center duration-100 hover:scale-105">
                  <img
                    src={currentMeal.image}
                    alt={`${currentMeal.name} image`}
                    className="w-[40%]"
                    onClick={() => openMealModal(currentMeal)}
                  />

                  <p className="w-[60%]">{currentMeal.name}</p>
                </div>

                <Button
                  variant="ghost"
                  className="bg-destructive-foreground z-50"
                  onClick={() => removeMeal(section.name.toString())}
                >
                  <BiSolidTrashAlt className="text-destructive" />
                </Button>
              </div>
            )
          } else {
            return (
              <div
                className="grid grid-cols-3 text-xl items-center opacity-60 border-b pb-4"
                key={cuid()}
                onDrop={(e) => handleOnDrop(e, section.name.toString())}
                onDragOver={handleDragOver}
              >
                <span className="p-4 border-primary border w-fit rounded-lg text-2xl text-primary">
                  {section.icon}
                </span>

                <p>{section.name}</p>

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
