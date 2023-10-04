import { BiSolidSushi } from "react-icons/bi"
import {
  FaHamburger,
  FaPepperHot,
  FaPizzaSlice,
  FaUtensils,
} from "react-icons/fa"
import { Button } from "./ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  {
    name: "All",
    icon: <FaPizzaSlice />, // Replace with the actual react-icons component for Pizza
  },
  {
    name: "Pizza",
    icon: <FaPizzaSlice />, // Replace with the actual react-icons component for Pizza
  },
  {
    name: "Burgers",
    icon: <FaHamburger />, // Replace with the actual react-icons component for Burgers
  },
  {
    name: "Sushi",
    icon: <BiSolidSushi />, // Replace with the actual react-icons component for Sushi
  },
  {
    name: "Mexican",
    icon: <FaPepperHot />, // Replace with the actual react-icons component for Mexican
  },
  {
    name: "Italian",
    icon: <FaPizzaSlice />, // Replace with the actual react-icons component for Italian
  },
  {
    name: "Chinese",
    icon: <FaUtensils />, // Replace with the actual react-icons component for Chinese
  },
  {
    name: "Indian",
    icon: <FaPepperHot />, // Replace with the actual react-icons component for Indian
  },
  {
    name: "Thai",
    icon: <FaPepperHot />, // Replace with the actual react-icons component for Thai
  },
  {
    name: "Mediterranean",
    icon: <FaUtensils />, // Replace with the actual react-icons component for Mediterranean
  },
  {
    name: "Japanese",
    icon: <BiSolidSushi />, // Replace with the actual react-icons component for Japanese
  },
]

export default function RecipeCategory() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const buttonHandler = (id: number) => {
    setActiveIndex(id)
  }

  return (
    <div className="flex gap-2 overflow-x-auto select-none">
      {categories.map((el, index) => (
        <Button
          variant="outline"
          className={cn(
            "py-8 px-6 opacity-50",
            index === activeIndex ? "border-primary opacity-100" : "opacity-60"
          )}
          key={index}
          onClick={() => buttonHandler(index)}
        >
          <div className="flex flex-col items-center gap-2">
            {el.icon}
            <span>{el.name}</span>
          </div>
        </Button>
      ))}
    </div>
  )
}
