"use client"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import * as React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { cn } from "../_utils/utils"
import { Calendar } from "./ui/calendar"
import { TimePicker } from "./time-picker"

interface DatePickerProps {
  date: Date
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
  setDate: (value: any) => void
}

export default function DatePicker({ date, setDate }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="noShadow"
          className={cn(
            "w-full justify-start bg-white text-left font-base",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-text" />
          {date ? (
            format(date, "PPP HH:mm")
          ) : (
            <span className="text-text">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto rounded-lg !border-0 bg-transparent p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg"
          initialFocus
        />
        <div className="mt-2 rounded-lg border-2 border-border bg-main p-3 shadow-light">
          <TimePicker setDate={setDate} date={date} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
