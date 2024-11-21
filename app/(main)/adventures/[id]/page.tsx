"use client"

import GetAdventure from "@/app/_actions/get-adventure"
import Loading from "@/app/_components/loading-anim"
import { Button } from "@/app/_components/ui/button"
import { Separator } from "@/app/_components/ui/separator"
import { Prisma } from "@prisma/client"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  TimerIcon,
  UsersRoundIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
dayjs.locale("pt-br")

interface AdventureParamsProps {
  params: {
    id: string
  }
}

type AdventureWithPayload = Prisma.AdventureGetPayload<{
  include: {
    sessions: true
    players: true
  }
}>

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

const Adventure = ({ params }: AdventureParamsProps) => {
  const [adventure, setAdventure] = useState<AdventureWithPayload | null>(null)
  const [loading, setLoading] = useState(true)

  // const alert = () => {
  //   if (!adventure) return

  //   const isNotReady = adventure.currentPlayers < adventure.minPlayers
  //   return (
  //     isNotReady && (
  //       <>
  //         <Separator />
  //         <Alert>
  //           <AlertDescription>
  //             This adventure will begin once{" "}
  //             {adventure.minPlayers - adventure.currentPlayers} players have
  //             joined
  //           </AlertDescription>
  //         </Alert>
  //       </>
  //     )
  //   )
  // }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await GetAdventure({ adventureId: params.id })
      setAdventure(data)
      setLoading(false)
    }

    fetchData()
  }, [params.id])

  return (
    <div className="h-dvh p-4">
      {loading && <Loading />}
      {adventure && (
        <>
          <Button size="icon" className="fixed z-50" asChild>
            <Link href="/dm">
              <ArrowLeftIcon />
            </Link>
          </Button>
          <div className="flex h-full flex-col">
            <div className="no-scrollbar relative flex-grow px-0 pb-20 pt-0 text-sm">
              <div className="flex flex-col gap-8">
                <div className="relative h-60 rounded-lg border-2">
                  <Image
                    alt={adventure.title}
                    src={adventure.imageUrl || ""}
                    fill
                    className={"h-full w-full object-cover"}
                  />
                </div>
                <div className="p-0 text-left">
                  <h1 className="text-xl font-heading leading-none tracking-tight">
                    {adventure.title}
                  </h1>
                  <span className="!mt-3 text-sm font-base">
                    {adventure.system}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-1 text-sm">
                      <span className="pb-1 font-semibold text-muted">
                        NEXT SESSION DETAILS
                      </span>
                      {adventure.sessions[0] && (
                        <>
                          <div className="justify-left flex flex-row items-center gap-1">
                            <CalendarIcon size={16} />
                            <p>
                              {dayjs(adventure.sessions[0].date).format(
                                "DD/MM/YYYY",
                              )}
                            </p>
                          </div>
                          <div className="justify-left flex flex-row items-center gap-1">
                            <ClockIcon size={16} />
                            <p>
                              {dayjs(adventure.sessions[0].date).format(
                                "HH:mm",
                              )}
                            </p>
                          </div>
                          <div className="justify-left flex flex-row items-center gap-1">
                            <TimerIcon size={16} />
                            <p>
                              {
                                durations.find(
                                  (x) =>
                                    x.value === adventure.sessions[0].duration,
                                )?.label
                              }
                            </p>
                          </div>
                          <div className="justify-left flex flex-row items-center gap-1">
                            <UsersRoundIcon size={16} />
                            <p>{adventure.players.length} Seats filled</p>
                            {/* <p>
                                {adventure.players.length} / {adventure.maxPlayers}{" "}
                                Seats filled
                              </p> */}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <Separator />
                  {/* <div className="flex flex-col gap-1 text-sm">
                      <span className="pb-1 font-semibold text-muted">
                        DETAILS
                      </span>
                      <p>Experience required: {adventure.experience}</p>
                      <p>Age: {adventure.age}</p>
                    </div>
                    {alert()} */}
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    About the adventure
                  </h1>
                  <p className="whitespace-break-spaces text-sm">
                    {adventure.description}
                  </p>
                </div>
                {/* <DMCard dungeonMaster={adventure.dungeonMaster} /> */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Adventure
