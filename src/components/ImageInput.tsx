import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from "@/lib/utils"
import toast from "react-hot-toast"
import { AiOutlineCloudUpload } from "react-icons/ai"

interface ImageInputProps {
  setValue: (value: string) => void
  value: string
  name: string
}

export const ImageInput: React.FC<ImageInputProps> = ({
  setValue,
  name,
  value,
}) => {
  const uploadImage = async (files: FileList | null) => {
    if (!files) return

    const formData = new FormData()
    formData.append("file", files[0])
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET)

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )

    if (!response.ok) {
      toast.error("Failed to add meal")
      return
    }

    const data = await response.json()
    setValue(data.url)
  }

  return (
    <div className="w-64 h-36 relative rounded-lg border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground flex flex-col justify-center items-center gap-2">
      {!value ? (
        <>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Click to upload
          </h4>
          <AiOutlineCloudUpload size="32" />
        </>
      ) : (
        <img
          src={value}
          alt="Image preview"
          className="w-full h-full rounded-lg object-cover object-center"
        />
      )}
      <input
        className="w-full h-full absolute inset-0 opacity-0 cursor-pointer"
        name={name}
        type="file"
        accept="image/png, image/jpeg, image/webp"
        multiple={false}
        onChange={(event) => uploadImage(event.target.files)}
      />
    </div>
  )
}
