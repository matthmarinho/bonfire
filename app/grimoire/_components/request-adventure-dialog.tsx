"use client"

import { AdventureProps } from "@/app/_actions/get-adventure"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select"
import { Button } from "@/app/_components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip"
import { CircleHelpIcon } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

const FormSchema = z.object({
  players: z.string({
    required_error: "Please select the number of players you are booking for.",
  }),
})

interface RequestAdventureProps {
  adventure: AdventureProps
  // eslint-disable-next-line no-unused-vars
  setRequested: (value: boolean) => void
}

const RequestAdventureDialog = ({
  adventure,
  setRequested,
}: RequestAdventureProps) => {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { players: "1" },
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log({
      title: "You submitted the following values:",
      data: data,
    })
    toast({
      description: "Your request has been sent.",
    })
    setRequested(true)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Join</Button>
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(event) => event.preventDefault()}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>Request to join {adventure.format.name}</DialogTitle>
        </DialogHeader>
        <div>
          {adventure && (
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex flex-row gap-1">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Adventure Type
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <CircleHelpIcon size={16} />
                      </TooltipTrigger>
                      <TooltipContent className="w-full max-w-[90vw] md:max-w-[600px]">
                        <p>{adventure.format.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="font-semibold">{adventure.format.name}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Schedule
                </label>
                <p className="font-semibold">
                  {adventure.schedule.frequency} / {adventure.schedule.day} -{" "}
                  {adventure.schedule.time}
                </p>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="players"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Player Count</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="1">1</SelectValue>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              ...Array(
                                adventure.maxPlayers - adventure.currentPlayers,
                              ),
                            ].map((_, index) => (
                              <SelectItem
                                key={index}
                                value={(index + 1).toString()}
                              >
                                {index + 1}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Select the number of players you are booking for.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogClose asChild>
                    <Button className="w-full" type="submit">
                      Request
                    </Button>
                  </DialogClose>
                </form>
              </Form>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default RequestAdventureDialog
