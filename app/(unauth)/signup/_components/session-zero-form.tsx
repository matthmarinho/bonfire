"use client"

import { Button } from "@/app/_components/ui/button"
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/app/_components/ui/multi-select"
import { updateUser } from "@/app/_actions/update-user"

const sessionZeroMock = {
  basicInfo: {
    playerName: "John Doe",
    experienceLevel: ["Beginner", "Intermediate", "Advanced"], // Options for selection
    favoriteSystems: [
      "D&D 5e",
      "Pathfinder",
      "Vampire: The Masquerade",
      "Brave Zenith",
      "Call of Cthulhu",
    ], // Suggested options for tags field
    preferredSessionFrequency: ["One-shot", "Weekly", "Bi-weekly", "Monthly"], // Session frequency
  },

  gameStyle: [
    "Roleplay-heavy",
    "Combat-focused",
    "Story-driven",
    "Mechanics-heavy",
    "Puzzle-solving",
    "Exploration",
    "Fantasy",
    "Mystery",
    "Horror",
    "Drama",
    "Action",
    "Political Intrigue",
  ],

  safety: [
    "No violence",
    "No explicit content",
    "No horror elements",
    "Safe roleplay boundaries",
    "X-Card",
    "Lines and Veils",
    "Script Change",
    "Fade-to-black",
    "Open door policy",
  ],

  goals: [
    "Character development",
    "Exploring world lore",
    "Teamwork-focused",
    "Competitive",
    "Story progression",
    "Casual fun",
    "Skill-building",
    "Friendship-building",
    "High-stakes adventure",
  ],

  logistics: [
    "Evening sessions",
    "Weekend play",
    "Flexible schedule",
    "2-hour sessions",
    "3-hour sessions",
    "4-hour sessions",
    "Roll20",
    "Foundry VTT",
    "Discord",
    "Zoom",
  ],
}

const formSchema = z.object({
  username: z.string().min(2).max(50),
  experienceLevel: z.string(),
  favoriteSystems: z.array(z.string()),
  gameStyle: z.array(z.string()),
  safety: z.array(z.string()),
  goals: z.array(z.string()),
  logistics: z.array(z.string()),
})

interface SessionZeroFormProps {
  // eslint-disable-next-line no-unused-vars
  setFormSent: (value: boolean) => void
}

const SessionZeroForm = ({ setFormSent }: SessionZeroFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      experienceLevel: "",
      favoriteSystems: [],
      gameStyle: [],
      safety: [],
      goals: [],
      logistics: [],
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await updateUser(values)
    } catch (error) {
      console.error(error)
    }
    setFormSent(true)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="no-scrollbar space-y-6 overflow-y-auto px-4 pb-4 md:w-1/2">
        <h1 className="text-lg font-medium">Session Zero</h1>
        <p className="text-sm text-muted-foreground">
          A quick-start form to align on your play style, preferences, and goals
          for RPG campaigns. Set expectations with your group to ensure a
          smooth, enjoyable experience for everyone.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the name you{`&apos`}d like to be called during
                    sessions.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experienceLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience Level</FormLabel>
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
                      {[...sessionZeroMock.basicInfo.experienceLevel].map(
                        (option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select your familiarity with role-playing games.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="favoriteSystems"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Favorite Systems</FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select..." />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {[...sessionZeroMock.basicInfo.favoriteSystems].map(
                            (option) => (
                              <MultiSelectorItem key={option} value={option}>
                                {option}
                              </MultiSelectorItem>
                            ),
                          )}
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>
                  <FormDescription>
                    List the RPG systems you enjoy playing the most.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gameStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Game Style</FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select..." />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {[...sessionZeroMock.gameStyle].map((option) => (
                            <MultiSelectorItem key={option} value={option}>
                              {option}
                            </MultiSelectorItem>
                          ))}
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>
                  <FormDescription>
                    Choose your focus: roleplay, combat, or balanced. Select
                    themes you enjoy.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="safety"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Safety</FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select..." />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {[...sessionZeroMock.safety].map((option) => (
                            <MultiSelectorItem key={option} value={option}>
                              {option}
                            </MultiSelectorItem>
                          ))}
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>
                  <FormDescription>
                    Let us know any topics you{`&apos`}d like to avoid for a
                    comfortable experience.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="goals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goals</FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select..." />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {[...sessionZeroMock.goals].map((option) => (
                            <MultiSelectorItem key={option} value={option}>
                              {option}
                            </MultiSelectorItem>
                          ))}
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>
                  <FormDescription>
                    Set your main goals and the type of group vibe you prefer.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="logistics"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logistics</FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select..." />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {[...sessionZeroMock.logistics].map((option) => (
                            <MultiSelectorItem key={option} value={option}>
                              {option}
                            </MultiSelectorItem>
                          ))}
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>
                  <FormDescription>
                    Pick your preferred play times, session length, and
                    platform.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default SessionZeroForm
