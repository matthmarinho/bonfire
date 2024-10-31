"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  CalendarIcon,
  ClockIcon,
  TimerIcon,
  UsersRoundIcon,
} from "lucide-react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Rating from "./rating"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import GetGrimoire, { GrimoireProps } from "../_actions/get-grimoire"
import Loading from "./loading"
import Game from "../grimoire/_components/adventure-drawer"

dayjs.locale("pt-br")

const Grimoire = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [, setCount] = useState(0)
  const [grimoireData, setGrimoireData] = useState<GrimoireProps[] | []>([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [currentAdventure, setCurrentAdventure] =
    useState<GrimoireProps | null>(null)

  const handleCardClick = () => {
    setCurrentAdventure(grimoireData[current - 1])
    setOpen(true)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await GetGrimoire()
      setGrimoireData(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <div className="w-full">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {grimoireData.map((card) => (
              <CarouselItem key={card.id}>
                <Card className="border-none">
                  <CardContent
                    className="relative flex h-[calc(100vh-96px)] w-screen flex-col items-center justify-center p-0"
                    onClick={handleCardClick}
                  >
                    <Image
                      alt={card.title}
                      src={card.banner}
                      fill
                      className={"rounded-md object-cover"}
                    />
                    <div className="absolute inset-x-0 bottom-0 z-50 rounded-b-xl bg-gradient-to-t from-black via-black/90 to-black/10">
                      <div className="space-y-4 p-4">
                        {card.currentPlayers === 0 ? (
                          <Badge className="bg-tertiary">
                            {card.minPlayers} NEEDED TO START
                          </Badge>
                        ) : (
                          <Badge>
                            {card.maxPlayers - card.currentPlayers} SEAT LEFT
                          </Badge>
                        )}
                        <div>
                          <h1 className="text-3xl font-semibold text-primary-foreground">
                            {card.title}
                          </h1>
                          <p className="text-sm text-primary-foreground">
                            {card.system} | {card.format.name}
                          </p>
                        </div>
                        <div className="text-sm">
                          <div className="justify-left flex flex-row items-center gap-1 text-primary-foreground">
                            <ClockIcon size={16} />
                            <p>
                              {card.schedule.frequency} / {card.schedule.day} -{" "}
                              {card.schedule.time}
                            </p>
                          </div>
                          <div className="justify-left flex flex-row items-center gap-1 text-primary-foreground">
                            <CalendarIcon size={16} />
                            <p>
                              {dayjs(card.nextSession.date).format("DD MMM")} /
                              Session {card.nextSession.sessionNumber}
                            </p>
                          </div>
                          <div className="justify-left flex flex-row items-center gap-1 text-primary-foreground">
                            <TimerIcon size={16} />
                            <p>{card.duration} Hour duration</p>
                          </div>
                          <div className="justify-left flex flex-row items-center gap-1 text-primary-foreground">
                            <UsersRoundIcon size={16} />
                            <p>
                              {card.currentPlayers} / {card.maxPlayers} Seats
                              filled
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <Avatar>
                              <AvatarImage src="/girl.jpg" alt="@shadcn" />
                              <AvatarFallback>DM</AvatarFallback>
                            </Avatar>
                            <p className="font-semibold text-primary-foreground">
                              {card.dungeonMaster.name}
                            </p>
                          </div>
                          <Rating
                            color="#ffffff"
                            size={14}
                            score={card.dungeonMaster.rating.score}
                            totalRatings={
                              card.dungeonMaster.rating.totalRatings
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      {currentAdventure && (
        <Game open={open} setOpen={setOpen} adventure={currentAdventure} />
      )}
    </>
  )
}

export default Grimoire
