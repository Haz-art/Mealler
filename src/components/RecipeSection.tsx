import RecipeCategory from "./RecipeCategory"
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
      "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    rating: 4.9,
    tags: ["Japanese", "Sushi", "Seafood"],
  },
  {
    id: "dish003",
    name: "Chicken Tikka Masala",
    image:
      "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    rating: 4.5,
    tags: ["Indian", "Curry", "Chicken"],
  },
  {
    id: "dish004",
    name: "Caesar Salad",
    image:
      "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    rating: 4.3,
    tags: ["Salad", "Healthy", "Vegetarian"],
  },
  {
    id: "dish005",
    name: "Hamburger",
    image:
      "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    rating: 4.6,
    tags: ["American", "Burger", "Fast Food"],
  },
  {
    id: "dish006",
    name: "Sushi Nigiri",
    image:
      "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    rating: 4.8,
    tags: ["Japanese", "Sushi", "Seafood"],
  },
  {
    id: "dish007",
    name: "Margarita Pizza",
    image:
      "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    rating: 4.4,
    tags: ["Italian", "Pizza", "Cheese"],
  },
  {
    id: "dish008",
    name: "Pad Thai",
    image:
      "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    rating: 4.7,
    tags: ["Thai", "Noodles", "Spicy"],
  },
  {
    id: "dish009",
    name: "Grilled Salmon",
    image:
      "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    rating: 4.6,
    tags: ["Seafood", "Healthy", "Grilled"],
  },
]

export default function RecipeSection() {
  return (
    <section className="w-3/4">
      <RecipeCategory />

      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors my-5">
          Popular dishes
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {dishes.map((el) => (
            <div key={el.id}>
              <img
                src={el.image}
                alt={`${el.name} image`}
                className="rounded-tl-xl rounded-tr-xl h-44 w-full object-cover object-top select-none"
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
      </div>
    </section>
  )
}
