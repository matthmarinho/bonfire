// "use client"

// import GetAdventure, { AdventureProps } from "@/app/_actions/get-adventure"
// import Loading from "@/app/_components/loading"
// import { useEffect, useState } from "react"
// import { z } from "zod"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"
// import Link from "next/link"
// import { Button } from "@/app/_components/ui/button"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/_components/ui/tooltip"
// import { CircleHelpIcon } from "lucide-react"

// interface RequestAdventureProps {
//   params: {
//     id: string
//   }
// }

// const FormSchema = z.object({
//   players: z
//     .string({
//       required_error: "Please select the number of players you are booking for.",
//     })
// })

// const RequestAdventure = ({ params }: RequestAdventureProps) => {
//   const [adventure, setAdventure] = useState<AdventureProps | null>(null)
//   const [loading, setLoading] = useState(true)

//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//   })

//   const onSubmit = (data: z.infer<typeof FormSchema>) => {
//     console.log({
//       title: "You submitted the following values:",
//       data: data
//     })
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true)
//       const data = await GetAdventure(params.id)
//       setAdventure(data)
//       setLoading(false)
//     }

//     fetchData()
//   }, [])

//   if (loading) {
//     return <Loading />
//   }

//   return (
//     <div>
//       {adventure && (
//         <div className="space-y-3">
//           <div className="space-y-2">
//             <div className="flex flex-row gap-1">
//               <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Adventure Type</label>
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger>
//                     <CircleHelpIcon size={16} />
//                   </TooltipTrigger>
//                   <TooltipContent className="w-full max-w-[90vw] md:max-w-[600px]">
//                     <p>{adventure.format.description}</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </div>
//             <p className="font-semibold">
//               {adventure.format.name}
//             </p>
//           </div>
//           <div className="space-y-2">
//             <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Schedule</label>
//             <p className="font-semibold">
//               {adventure.schedule.frequency} / {adventure.schedule.day} -{" "}
//               {adventure.schedule.time}
//             </p>
//           </div>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//               <FormField
//                 control={form.control}
//                 name="players"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Player Count</FormLabel>
//                     <Select onValueChange={field.onChange}>
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="1">1</SelectValue>
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         {[...Array(adventure.maxPlayers - adventure.currentPlayers)].map((_, index) => (
//                           <SelectItem key={index} value={(index + 1).toString()}>{index + 1}</SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                     <FormDescription>
//                       Select the number of players you are booking for.
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button type="submit">Submit</Button>
//             </form>
//           </Form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RequestAdventure;
