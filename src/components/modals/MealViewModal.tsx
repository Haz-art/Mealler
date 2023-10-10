import Modal from "./Modal"
import { useMealViewModal } from "@/hooks/useMealViewModal"

const content = {
  id: "dish001",
  name: "Spaghetti Carbonara",
  image:
    "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
  rating: 4.7,
  description: `Slice the chicken into bite-sized chunks. Combine the cubed chicken with the yogurt, lemon juice, garlic, ginger, salt, cumin, garam masala, and paprika and stir until well-coated.
  Cover and refrigerate for at least 1 hour, or overnight.

  Preheat the oven to 500°F (260°C). Line a high-sided baking pan or roasting tray with parchment paper.
  Place the marinated chicken pieces on bamboo or wooden skewers, then set them over the prepared baking pan, making sure there is space underneath the chicken to help distribute the heat more evenly. Bake for about 15 minutes, until slightly dark brown on the edges.
  Make the sauce: Heat the oil in a large pot over medium heat, then sauté the onions, ginger, and garlic until tender but not browned. Add the cumin, turmeric, coriander, paprika, chili powder, and garam masala and stir constantly for about 30 seconds, until the spices are fragrant. Stir in the tomato puree, tomato sauce, and 1 ¼ cups of water, then bring to a boil and cook for about 5 minutes. Pour in the cream.
  Remove the chicken from the skewers and add to the sauce, cooking for another 1-2 minutes. Garnish with cilantro and serve over rice or alongside naan bread.
  Enjoy!
  Hate losing that perfect recipe? Save and organize recipes easily on the Tasty app. Download now.`,
  tags: ["Italian", "Pasta", "Creamy"],
}

const MealViewModal: React.FC = () => {
  const isOpen = useMealViewModal((state) => state.isOpen)
  const mealId = useMealViewModal((state) => state.mealId)
  const onClose = useMealViewModal((state) => state.onClose)

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <p>{content.description}</p>
    </div>
  )
  return (
    <Modal
      title={content.name}
      isOpen={isOpen}
      onClose={onClose}
      body={bodyContent}
      onSubmit={() => {}}
    />
  )
}

export default MealViewModal
