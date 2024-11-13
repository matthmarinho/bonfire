"use client"

import GetAdventure, { AdventureProps } from "@/app/_actions/get-adventure"
import Loading from "@/app/_components/loading-anim"
import { Alert, AlertDescription } from "@/app/_components/ui/alert"
import { Separator } from "@/app/_components/ui/separator"
import {
  ArrowLeftIcon,
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
import { Button } from "@/app/_components/ui/button"
import Link from "next/link"
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
    <div className="h-dvh p-4">
      {loading && <Loading />}
      {adventure && (
        <>
          <Button size="icon" className="fixed z-50" asChild>
            <Link href="/adventures">
              <ArrowLeftIcon />
            </Link>
          </Button>
          <div className="flex h-full flex-col">
            <div className="no-scrollbar relative flex-grow px-0 pb-20 pt-0 text-sm">
              <div className="flex flex-col gap-8">
                <div className="relative h-60 rounded-lg border-2">
                  <Image
                    alt={adventure.title}
                    src={adventure.banner}
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
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="pb-1 font-semibold text-muted">
                      DETAILS
                    </span>
                    <div className="justify-left flex flex-row items-center gap-1">
                      <ClockIcon size={16} />
                      <p>
                        {adventure.schedule.frequency} /{" "}
                        {adventure.schedule.day} - {adventure.schedule.time}
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
                        {adventure.currentPlayers} / {adventure.maxPlayers}{" "}
                        Seats filled
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="pb-1 font-semibold text-muted">
                      DETAILS
                    </span>
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
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Adventure
