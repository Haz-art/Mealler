import SearchBar from "@/components/SearchBar"
import UserHero from "@/components/UserHero"

export default function NavBar() {
  return (
    <nav className="flex justify-between md:grid md:grid-cols-3">
      <h1 className="hidden md:block scroll-m-20 text-2xl tracking-tight lg:text-3xl">
        Make your diet easy
      </h1>

      <SearchBar />

      <UserHero />
    </nav>
  )
}
