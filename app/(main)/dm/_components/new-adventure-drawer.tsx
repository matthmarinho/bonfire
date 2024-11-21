import createAdventure from "@/app/_actions/create-adventure"
import uploadImage from "@/app/_actions/upload-image"
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
import { Textarea } from "@/app/_components/ui/textarea"
import { useUser } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zfd } from "zod-form-data"
dayjs.locale("pt-br")

interface NewAdventureDrawerProps {
  open: boolean
  // eslint-disable-next-line no-unused-vars
  setOpen: (value: boolean) => void
}

const systems = [
  "D&D 5e",
  "Pathfinder",
  "Vampire: The Masquerade",
  "Brave Zenith",
  "Call of Cthulhu",
]

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z
    .string()
    .min(10, { message: "A descrição deve ter pelo menos 10 caracteres" })
    .max(300, { message: "A descrição deve ter no máximo 300 caracteres" }),
  system: z.string().min(1, { message: "Deve escolher um sistema de jogo" }),
  format: z.string().min(1, { message: "Deve escolher um formato de jogo" }),
  selectedFile: zfd
    .file()
    .refine((file) => file.size < 5000000, {
      message: "File can't be bigger than 5MB.",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
      {
        message: "File format must be either jpg, jpeg lub png.",
      },
    ),
})

const NewAdventureDrawer = ({ open, setOpen }: NewAdventureDrawerProps) => {
  const { isSignedIn, user } = useUser()
  const [isSafeToReset, setIsSafeToReset] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      system: "",
      format: "",
    },
  })

  useEffect(() => {
    if (!isSafeToReset) return

    form.reset()
  }, [form, isSafeToReset])

  if (!isSignedIn) {
    return null
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (user) {
      setIsSafeToReset(true)
      setOpen(false)
      const imageUrl = (await uploadImage({
        selectedFile: values.selectedFile,
      })) as string
      await createAdventure({
        title: values.title,
        description: values.description,
        system: values.system,
        format: values.format,
        imageUrl: imageUrl,
        clerkUserId: user?.id,
      })
    }
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="h-full border-none">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-2xl font-semibold leading-none tracking-tight">
            Create a new adventure!
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
                        draw your players into the game. If you are running a
                        module, don{"'"}t just use the name of the module.
                        Change it up and make it more unique to you so that it
                        stands out in the game search.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Description..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Describe your game and who it{"'"}s for! What is the
                        setting, theme, and how do you like to play? Imagine
                        this section as the back cover of a book, and help your
                        players know what the game will look like. Typically,
                        2-4 paragraphs of description is the sweet spot!
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="system"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Game System</FormLabel>
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
                            {[...systems].map((option) => (
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

                <FormField
                  control={form.control}
                  name="format"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Format</FormLabel>
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
                            <SelectItem value="oneshot">Oneshot</SelectItem>
                            <SelectItem value="campaign">Campaign</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
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
                  name="selectedFile"
                  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          {...fieldProps}
                          accept="image/png, image/jpeg, image/jpg"
                          onChange={(event) =>
                            onChange(
                              event.target.files && event.target.files[0],
                            )
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        If you are having trouble finding art for your games,
                        check out this{" "}
                        <a
                          className="font-semibold underline"
                          target="_blank"
                          href="https://drive.google.com/drive/folders/1X0TNPYROmD3FvDDT_PDrvMdeAiM1AVSn/"
                        >
                          Google Drive
                        </a>{" "}
                        where there are tons of art available!
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

export default NewAdventureDrawer
