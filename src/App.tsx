import NavBar from "@/components/NavBar"
import RecipeSection from "./components/RecipeSection"
import MyDay from "./components/MyDay"
import RecipeCategory from "./components/RecipeCategory"
import { UseQueryProvider } from "./components/providers/UseQueryProvider"
import { ModalsProvider } from "./components/providers/ModalsProvider"
import { Toaster } from "react-hot-toast"

export default function App() {
  return (
    <UseQueryProvider>
      <div className="py-4 px-8 w-full min-h-screen max-w-[1800px] mx-auto [&>*]:mb-8">
        <NavBar />
        <RecipeCategory />

        <main className="space-y-5 md:space-y-0 md:grid md:grid-cols-md-main lg:grid-cols-lg-main gap-4 lg:gap-8">
          <RecipeSection />
          <MyDay />
        </main>
      </div>

      <Toaster position="bottom-center" />
      <ModalsProvider />
    </UseQueryProvider>
  )
}
