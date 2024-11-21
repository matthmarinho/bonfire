import createSession from "@/app/_actions/create-session"
import DatePicker from "@/app/_components/date-picker"
import { Button } from "@/app/_components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/app/_components/ui/drawer"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form"
import { Input } from "@/app/_components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
dayjs.locale("pt-br")

interface NewSessionDrawerProps {
  open: boolean
  // eslint-disable-next-line no-unused-vars
  setOpen: (value: boolean) => void
  params: {
    id: string
  }
}

const durations = [
  { label: "1 hora", value: "1" },
  { label: "1 hora e 30 minutos", value: "1.5" },
  { label: "2 horas", value: "2" },
  { label: "2 horas e 30 minutos", value: "2.5" },
  { label: "3 horas", value: "3" },
  { label: "3 horas e 30 minutos", value: "3.5" },
  { label: "4 horas", value: "4" },
  { label: "5 horas", value: "5" },
  { label: "6 horas", value: "6" },
]

const locations = ["Presencial", "Discord", "Roll20"]

const formSchema = z.object({
  title: z.string().min(2).max(50),
  date: z.string().datetime({ offset: true }),
  duration: z.string().min(1, { message: "Deve escolher a duração da sessão" }),
  location: z
    .string()
    .min(1, { message: "Deve escolher onde a sessão vai acontecer" }),
})

const NewSessionDrawer = ({ open, setOpen, params }: NewSessionDrawerProps) => {
  const today = new Date()
  const [isSafeToReset, setIsSafeToReset] = useState(false)
  const [date, setDate] = useState<Date>(today)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      duration: "",
      location: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSafeToReset(true)
    setOpen(false)
    console.log(values)
    await createSession({
      title: values.title,
      date: date,
      duration: values.duration,
      location: values.location,
      adventureId: params.id,
    })
  }

  const handleSetDate = (value: Date) => {
    setDate(value)
    form.setValue("date", dayjs(value).format())
  }

  useEffect(() => {
    if (!isSafeToReset) return

    form.reset()
  }, [isSafeToReset, form])

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="h-full border-none">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-2xl font-semibold leading-none tracking-tight">
            Create a new session!
          </DrawerTitle>
          {/* <DrawerDescription>{adventure.system}</DrawerDescription> */}
        </DrawerHeader>
        <div className="no-scrollbar h-dvh overflow-y-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-8 px-4 pb-20">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Title" {...field} />
                      </FormControl>
                      <FormDescription>
                        The title of your game should be clear, concise, and
                        draw your players into the game.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <div>
                        <DatePicker date={date} setDate={handleSetDate} />
                      </div>
                      <FormDescription>
                        Once the template is submitted for approval, the type
                        can no longer be changed.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            {[...durations].map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Which Game System will be played in this game? List only
                        the system you are going to use.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            {[...locations].map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Which Game System will be played in this game? List only
                        the system you are going to use.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DrawerFooter className="fixed bottom-0 w-full bg-background">
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default NewSessionDrawer
