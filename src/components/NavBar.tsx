import SearchBar from "@/components/SearchBar"
import UserHero from "@/components/UserHero"

export default function NavBar() {
  return (
    <nav className="grid grid-cols-3 font">
      <h1 className="scroll-m-20 text-2xl tracking-tight lg:text-3xl">
        Make your diet easy
      </h1>

      <SearchBar />

      <UserHero />
    </nav>
  )
}
