import React from "react"
import { useMealViewModal } from "@/hooks/useMealViewModal"
import { Meal } from "@/types/meal"
import { useQuery } from "@tanstack/react-query"
import { AiFillStar } from "react-icons/ai"
import { Button } from "./ui/button"
import { useAddMealModal } from "@/hooks/useAddMealModal"

export default function RecipeSection() {
  const {
    data: meals,
    error,
    isFetching,
  } = useQuery<Meal[]>({
    queryKey: ["meals"],
    queryFn: async () => {
      const response = await fetch(
        "https://localhost:7176/api/Meal/meal?startId=1&count=99",
        {
          method: "GET",
        }
      )
      const data = await response.json()
      return data
    },
  })

  const openMealModal = useMealViewModal((state) => state.onOpen)
  const openAddMealModal = useAddMealModal((state) => state.onOpen)

  const handleOnDrag = (e: React.DragEvent, mealInfo: Meal) => {
    e.dataTransfer.setData("mealInfo", JSON.stringify(mealInfo))
  }

  if (isFetching) {
    return <p>Loading</p>
  }

  if (error || !meals) {
    return <p>Something went wrong</p>
  }

  return (
    <section className="w-full">
      <div className="w-full flex items-center justify-between border-b pb-4 mb-6">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Popular dishes
        </h2>

        <Button onClick={openAddMealModal}>Add Meal</Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((el) => (
          <div
            key={el.id}
            onClick={() => openMealModal(el)}
            className="cursor-pointer duration-100 hover:scale-105"
            draggable
            onDragStart={(e) => handleOnDrag(e, el)}
          >
            <img
              src={el.image}
              alt={`${el.name} image`}
              className="rounded-tl-xl rounded-tr-xl h-44 w-full object-cover object-top select-none pointer-events-none"
            />
            <div className="mt-2">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {el.name}
              </h4>

              <div className="flex justify-between opacity-70">
                <p className="flex gap-2 items-center">
                  <AiFillStar />
                  <span className="font-bold">{el.rating}</span>
                </p>

                {el?.mealCategories && (
                  <div className="flex gap-2">
                    {el.mealCategories.map((mealCategory) => (
                      <Button
                        variant="ghost"
                        size="sm"
                        key={mealCategory.categoryId}
                      >
                        {mealCategory.category.name}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
