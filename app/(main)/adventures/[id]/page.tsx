"use client"

import GetAdventure, { AdventureProps } from "@/app/_actions/get-adventure"
import Loading from "@/app/_components/loading-anim"
import { Alert, AlertDescription } from "@/app/_components/ui/alert"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card"
import { Separator } from "@/app/_components/ui/separator"
import {
  CalendarIcon,
  ClockIcon,
  TimerIcon,
  UsersRoundIcon,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import DMCard from "@/app/_components/dm-card"
dayjs.locale("pt-br")

interface AdventureParamsProps {
  params: {
    id: string
  }
}

const Adventure = ({ params }: AdventureParamsProps) => {
  const [adventure, setAdventure] = useState<AdventureProps | null>(null)
  const [loading, setLoading] = useState(true)

  const alert = () => {
    if (!adventure) return

    const isNotReady = adventure.currentPlayers < adventure.minPlayers
    return (
      isNotReady && (
        <>
          <Separator />
          <Alert>
            <AlertDescription>
              This adventure will begin once{" "}
              {adventure.minPlayers - adventure.currentPlayers} players have
              joined
            </AlertDescription>
          </Alert>
        </>
      )
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await GetAdventure(params.id)
      setAdventure(data)
      setLoading(false)
    }

    fetchData()
  }, [params.id])

  return (
    <div className="h-[calc(100dvh-3rem)] px-4">
      {loading && <Loading />}
      {adventure && (
        <Card className="flex h-[calc(100dvh-8rem)] flex-col px-0 py-4">
          <CardContent className="no-scrollbar relative flex-grow overflow-auto px-0 pb-2 pt-0 text-sm">
            <div className="flex flex-col gap-8 px-4">
              <div className="relative h-60 rounded-lg border-2">
                <Image
                  alt={adventure.title}
                  src={adventure.banner}
                  fill
                  className={"h-full w-full object-cover"}
                />
              </div>
              <CardHeader className="p-0 text-left">
                <CardTitle className="font-semibold">
                  {adventure.title}
                </CardTitle>
                <CardDescription>{adventure.system}</CardDescription>
              </CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 text-sm">
                  <span className="pb-1 font-semibold text-muted">DETAILS</span>
                  <div className="justify-left flex flex-row items-center gap-1">
                    <ClockIcon size={16} />
                    <p>
                      {adventure.schedule.frequency} / {adventure.schedule.day}{" "}
                      - {adventure.schedule.time}
                    </p>
                  </div>
                  <div className="justify-left flex flex-row items-center gap-1">
                    <CalendarIcon size={16} />
                    <p>
                      {dayjs(adventure.nextSession.date).format("DD MMM")} /
                      Session {adventure.nextSession.sessionNumber}
                    </p>
                  </div>
                  <div className="justify-left flex flex-row items-center gap-1">
                    <TimerIcon size={16} />
                    <p>{adventure.duration} Hour duration</p>
                  </div>
                  <div className="justify-left flex flex-row items-center gap-1">
                    <UsersRoundIcon size={16} />
                    <p>
                      {adventure.currentPlayers} / {adventure.maxPlayers} Seats
                      filled
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-1 text-sm">
                  <span className="pb-1 font-semibold text-muted">DETAILS</span>
                  <p>Experience required: {adventure.experience}</p>
                  <p>Age: {adventure.age}</p>
                </div>
                {alert()}
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold leading-none tracking-tight">
                  About the adventure
                </h1>
                <p className="whitespace-break-spaces text-sm">
                  {adventure.about}
                </p>
              </div>
              <DMCard dungeonMaster={adventure.dungeonMaster} />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Adventure
