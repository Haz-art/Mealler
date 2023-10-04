import NavBar from "@/components/NavBar"
import RecipeSection from "./components/RecipeSection"
import MyDay from "./components/MyDay"

export default function App() {
  return (
    <div className="py-4 px-8 w-full min-h-screen max-w-[1800px] mx-auto [&>*]:mb-8">
      <NavBar />
      <main className="flex gap-8">
        <RecipeSection />
        <MyDay />
      </main>
    </div>
  )
}
