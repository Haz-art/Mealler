import { GoCalendar } from "react-icons/go"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"

import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface DataPickerProps {
  date: Date
  setDate: (value: Date) => void
}

export default function DatePicker({
  date,
  setDate
} : DataPickerProps) {
  const onChange = (value: Date | undefined) => {
    console.log(value);
    
    if(!value) return

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
          <span className="md:hidden">{format(date, "EEE")}</span>
          <span className="hidden md:block">{format(date, "PPP")}</span>
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
