import { AiFillStar } from "react-icons/ai"
import Modal from "./Modal"
import { useMealViewModal } from "@/hooks/useMealViewModal"

const MealViewModal: React.FC = () => {
  const isOpen = useMealViewModal((state) => state.isOpen)
  const dish = useMealViewModal((state) => state.dish)
  const onClose = useMealViewModal((state) => state.onClose)

  if (!dish) {
    onClose()
    return <></>
  }

  const bodyContent = (
    <div className="grid md:grid-cols-2 gap-8">
      <img
        src={dish.image}
        alt={`${dish.name} image`}
        className="w-full max-h-[250px] object-cover object-top select-none pointer-events-none"
      />
      <p>{dish.description}</p>
    </div>
  )

  const footer = (
    <p className="flex justify-end gap-2 items-center text-xl">
      <AiFillStar />
      <span className="font-bold">{dish.rating}</span>
    </p>
  )
  return (
    <Modal
      title={dish.name}
      isOpen={isOpen}
      onClose={onClose}
      body={bodyContent}
      footer={footer}
    />
  )
}

export default MealViewModal
