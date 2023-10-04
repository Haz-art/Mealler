import { Input } from "@/components/ui/input"
import { BiSearchAlt2 } from "react-icons/bi"

export default function SearchBar() {
  return (
    <div className="relative">
      <Input placeholder="Search" className="rounded-lg" />
      <BiSearchAlt2 className="text-primary absolute right-4 top-1/2 transform -translate-y-1/2 text-lg" />
    </div>
  )
}
