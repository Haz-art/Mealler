import { Button } from "@/components/ui/button"

export default function UserHero() {
  return (
    <div className="flex justify-center gap-4 select-none">
      <Button variant="ghost">Log in</Button>
      <Button>Sign up</Button>
    </div>
  )
}
