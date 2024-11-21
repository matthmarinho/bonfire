"use client"

import getDMAdventures from "@/app/_actions/get-dm-adventures"
import getDMSessions from "@/app/_actions/get-dm-sessions"
import LoadingAnim from "@/app/_components/loading-anim"
import RenderBadge from "@/app/_components/render-badge"
import SearchBar from "@/app/_components/search-bar"
import { Badge } from "@/app/_components/ui/badge"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import Loading from "@/app/loading"
import { useUser } from "@clerk/nextjs"
import { Prisma, Session } from "@prisma/client"
import dayjs from "dayjs"
import { PlusIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import NewAdventureDrawer from "./_components/new-adventure-drawer"
dayjs.locale("pt-br")

type AdventureWithSessions = Prisma.AdventureGetPayload<{
  include: {
    sessions: true
  }
}>

type SessionWithPayload = Prisma.SessionGetPayload<{
  include: {
    adventure: true
  }
}>

const DM = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const { isSignedIn, user } = useUser()
  const [loadingAdventures, setLoadingAdventures] = useState(true)
  const [adventures, setAdventures] = useState<AdventureWithSessions[]>([])
  const [loadingSessions, setLoadingSessions] = useState(true)
  const [sessions, setSessions] = useState<SessionWithPayload[]>([])

  const handleOpenDrawer = () => {
    setOpen(true)
  }

  const handleClear = () => {
    setValue("")
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoadingAdventures(true)
      const data = await getDMAdventures({ clerkUserId: user?.id as string })
      console.log(data)
      setAdventures(data)
      setLoadingAdventures(false)
    }
    if (user) {
      fetchData()
    }
  }, [user])

  useEffect(() => {
    const fetchData = async () => {
      setLoadingSessions(true)
      const data = await getDMSessions({ clerkUserId: user?.id as string })
      console.log(data)
      setSessions(data)
      setLoadingSessions(false)
    }

    if (user) {
      fetchData()
    }
  }, [user])

  if (!isSignedIn) {
    ;<Loading />
  }

  const renderSessionBadge = (session: Session) => {
    if (dayjs().isSame(dayjs(session.date), "day")) {
      return <Badge variant="destructive">Today</Badge>
    } else {
      return <Badge>{dayjs(session.date).format("DD/MM")}</Badge>
    }
  }

  return (
    <>
      <div className="h-[calc(100dvh-6rem)] w-full space-y-2 p-4">
        <div className="flex w-full flex-row justify-between gap-2 pb-4">
          <SearchBar
            value={value}
            setValue={setValue}
            handleClear={handleClear}
          />
          <Button
            size="icon"
            onClick={handleOpenDrawer}
            className="aspect-square"
          >
            <PlusIcon />
          </Button>
        </div>
        Your sessions
        <div className="no-scrollbar flex h-48 gap-4 overflow-y-auto pb-2 pr-2">
          {loadingSessions ? (
            <LoadingAnim />
          ) : (
            sessions.map((session, index) => (
              <Card
                key={index}
                className="flex aspect-[3/4] flex-col hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              >
                <a href={`dm/adventure/${session.adventureId}`}>
                  <CardContent className="relative flex-grow p-0 text-sm">
                    <div className="relative aspect-[3/4] rounded-lg">
                      <Image
                        alt={session.title}
                        src={session.adventure.imageUrl || ""}
                        fill
                        className={"h-full w-full rounded-lg object-cover"}
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 m-2 space-y-2 rounded-lg border-2 border-border bg-white p-2">
                      <div className="absolute -top-3 left-3">
                        {renderSessionBadge(session)}
                      </div>
                      <p className="text-base font-semibold">{session.title}</p>
                    </div>
                  </CardContent>
                </a>
              </Card>
            ))
          )}
        </div>
        Pending requisitions
        <div></div>
        Your adventures
        <div className="no-scrollbar flex h-48 gap-4 overflow-y-auto pb-2 pr-2">
          {loadingAdventures ? (
            <LoadingAnim />
          ) : (
            adventures.map((adventure, index) => (
              <Card
                key={index}
                className="flex aspect-[3/4] flex-col hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              >
                <a href={`dm/adventure/${adventure.id}`}>
                  <CardContent className="relative flex-grow p-0 text-sm">
                    <div className="relative aspect-[3/4] rounded-lg">
                      <Image
                        alt={adventure.title}
                        src={adventure.imageUrl || ""}
                        fill
                        className={"h-full w-full rounded-lg object-cover"}
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 m-2 space-y-2 rounded-lg border-2 border-border bg-white p-2">
                      <div className="absolute -top-3 left-3">
                        <RenderBadge
                          adventure={adventure}
                          session={adventure.sessions[0]}
                        />
                      </div>
                      <p className="text-base font-semibold">
                        {adventure.title}
                      </p>
                    </div>
                  </CardContent>
                </a>
              </Card>
            ))
          )}
        </div>
      </div>
      <NewAdventureDrawer open={open} setOpen={setOpen} />
    </>
  )
}

export default DM
