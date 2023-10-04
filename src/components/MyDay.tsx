import { LuSandwich } from "react-icons/lu"
import { MdOutlineLocalCafe } from "react-icons/md"
import { GiHotMeal } from "react-icons/gi"
import { PiWineFill } from "react-icons/pi"
import { RiDragDropLine } from "react-icons/ri"

const sections = [
  {
    icon: <MdOutlineLocalCafe />,
    name: "Breakfast",
  },
  {
    icon: <LuSandwich />,
    name: "Sandwich",
  },
  {
    icon: <GiHotMeal />,
    name: "Dinner",
  },
  {
    icon: <PiWineFill />,
    name: "Supper",
  },
]

export default function MyDay() {
  return (
    <section className="w-full">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 pl-5 mb-6">
        My day
      </h2>

      <div className="flex flex-col gap-4 text-center px-5 select-none">
        {sections.map((el, index) => (
          <div
            className="grid grid-cols-3 text-xl items-center opacity-60 border-b pb-4"
            key={index}
          >
            <span className="p-4 border-primary border w-fit rounded-lg text-2xl text-primary">
              {el.icon}
            </span>

            <p>{el.name}</p>

            <div className="flex justify-end">
              <RiDragDropLine />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
