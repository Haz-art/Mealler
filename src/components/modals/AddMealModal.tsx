import { useAddMealModal } from "@/hooks/useAddMealModal"
import Modal from "./Modal"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import * as z from "zod"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name can not be empty",
  }),
  image: z.string().url({
    message: "Image must be a valid link",
  }),
  description: z.string().min(1, {
    message: "Description can not be empty",
  }),
  rating: z.string().min(1, {
    message: "Rating can not be empty",
  }),
})

type FormSchemaType = z.infer<typeof formSchema>

export const AddMealModal: React.FC = () => {
  const addMealMutation = useMutation({
    mutationFn: async (values: FormSchemaType) => {
      const response = await fetch("https://localhost:7176/api/Meal/meal", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(
        "🚀 ~ file: AddMealModal.tsx:44 ~ mutationFn: ~ JSON.stringify(values):",
        JSON.stringify(values)
      )
      console.log(
        "🚀 ~ file: AddMealModal.tsx:47 ~ mutationFn: ~ response:",
        response
      )

      if (!response.ok) throw new Error("Failed to add meal")

      return response.json()
    },

    onSuccess: () => toast.success("Meal successfully added 😎"),
    onError: (err) => {
      console.log(err)

      toast.error("Something went wrong 🎃")
    },
    onMutate: () => toast.loading("Processing..."),
  })

  const isOpen = useAddMealModal((state) => state.isOpen)
  const onClose = useAddMealModal((state) => state.onClose)

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: "",
      rating: "",
      description: "",
    },
  })

  function onSubmit(values: FormSchemaType) {
    console.log("🚀 ~ file: AddMealModal.tsx:65 ~ onSubmit ~ values:", values)
    addMealMutation.mutate(values)
  }

  const bodyContent = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter meal name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter meal description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image (link)</FormLabel>
              <FormControl>
                <Input placeholder="Enter meal image link" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter meal rating"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2">
          <Button type="reset" variant="ghost" size="lg">
            Cancel
          </Button>
          <Button type="submit" size="lg">
            Add
          </Button>
        </div>
      </form>
    </Form>
  )

  return (
    <Modal
      title="Add Meal"
      isOpen={isOpen}
      onClose={onClose}
      body={bodyContent}
    />
  )
}
