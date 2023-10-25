import { Button } from "./ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import { Category } from "@/types/category"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"

export default function RecipeCategory() {
  const {
    data: categories,
    error,
    isFetching,
  } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch("https://localhost:7176/api/categories", {
        method: "GET",
      })
      const data = await response.json()
      return data
    },
  })

  const [activeIndex, setActiveIndex] = useState<number>(0)

  const buttonHandler = (id: number) => {
    setActiveIndex(id)
  }

  if (isFetching) {
    return <p>Loading</p>
  }

  if (error || !categories) {
    console.log(
      "🚀 ~ file: RecipeCategory.tsx:35 ~ RecipeCategory ~ error:",
      error
    )
    return <p>Something went wrong</p>
  }

  return (
    <ScrollArea className="whitespace-nowrap">
      <div className="flex gap-3 mx-auto w-fit overflow-x-auto select-none">
        {categories.map((el, index) => {
          return (
            <Button
              variant="outline"
              className={cn(
                "py-8 px-6 opacity-50",
                index === activeIndex
                  ? "border-primary opacity-100"
                  : "opacity-60"
              )}
              key={index}
              onClick={() => buttonHandler(index)}
            >
              <div className="flex flex-col items-center gap-2">
                <span>{el.name}</span>
              </div>
            </Button>
          )
        })}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
