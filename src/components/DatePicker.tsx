import { format } from "date-fns"
import { GoCalendar } from "react-icons/go"

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { useState } from "react"
import { Calendar } from "./ui/calendar"
import { cn } from "@/lib/utils"

export default function DatePicker() {
  const [date, setDate] = useState(new Date())

  const onChange = (value: any) => {
    setDate(value)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {format(date, "PPP")}
          <GoCalendar className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e) => onChange(e)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
