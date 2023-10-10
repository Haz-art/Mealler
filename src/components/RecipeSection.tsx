import { useMealViewModal } from "@/hooks/useMealViewModal"
import { AiFillStar } from "react-icons/ai"

const dishes = [
  {
    id: "dish001",
    name: "Spaghetti Carbonara",
    image:
      "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    rating: 4.7,
    tags: ["Italian", "Pasta", "Creamy"],
  },
  {
    id: "dish002",
    name: "Sushi Roll",
    image:
      "https://ichisushi.com/wp-content/uploads/2022/05/Best-Hawaiian-Roll-Sushi-Recipes.jpg",
    rating: 4.9,
    tags: ["Japanese", "Sushi", "Seafood"],
  },
  {
    id: "dish003",
    name: "Chicken Tikka Masala",
    image:
      "https://www.allrecipes.com/thmb/1ul-jdOz8H4b6BDrRcYOuNmJgt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/239867chef-johns-chicken-tikka-masala-ddmfs-3X4-0572-e02a25f8c7b745459a9106e9eb13de10.jpg",
    rating: 4.5,
    tags: ["Indian", "Curry", "Chicken"],
  },
  {
    id: "dish004",
    name: "Caesar Salad",
    image:
      "https://food-images.files.bbci.co.uk/food/recipes/easy_caesar_salad_64317_16x9.jpg",
    rating: 4.3,
    tags: ["Salad", "Healthy", "Vegetarian"],
  },
  {
    id: "dish005",
    name: "Hamburger",
    image:
      "https://www.tastingtable.com/img/gallery/heres-how-hamburgers-got-their-name/l-intro-1653066580.jpg",
    rating: 4.6,
    tags: ["American", "Burger", "Fast Food"],
  },
  {
    id: "dish006",
    name: "Sushi Nigiri",
    image:
      "https://houseofasia.pl/wp-content/uploads/2020/12/nigiri_sishi_losos_krewetka_wegorz_tunczyk_house_of_asia.jpg",
    rating: 4.8,
    tags: ["Japanese", "Sushi", "Seafood"],
  },
  {
    id: "dish007",
    name: "Margarita Pizza",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg",
    rating: 4.4,
    tags: ["Italian", "Pizza", "Cheese"],
  },
  {
    id: "dish008",
    name: "Pad Thai",
    image:
      "https://staticsmaker.iplsc.com/smaker_production_2023_03_03/9d4105132f31fbff06ab61d5f11dbd62-recipe_main.jpg",
    rating: 4.7,
    tags: ["Thai", "Noodles", "Spicy"],
  },
  {
    id: "dish009",
    name: "Grilled Salmon",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg",
    rating: 4.6,
    tags: ["Seafood", "Healthy", "Grilled"],
  },
]

export type Dish = (typeof dishes)[0]

export default function RecipeSection() {
  const openMealModal = useMealViewModal((state) => state.onOpen)

  const handleOnDrag = (e: React.DragEvent, mealInfo: Dish) => {
    e.dataTransfer.setData("mealInfo", JSON.stringify(mealInfo))
  }

  return (
    <section className="w-3/4">
      <h2 className="scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-6">
        Popular dishes
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {dishes.map((el) => (
          <div
            key={el.id}
            onClick={() => openMealModal(el.id)}
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

                <p>{el.tags.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
