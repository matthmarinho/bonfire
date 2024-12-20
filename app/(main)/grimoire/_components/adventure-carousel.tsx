import { GrimoireProps } from "@/app/_actions/get-grimoire"
import Rating from "@/app/_components/rating"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar"
import { Badge } from "@/app/_components/ui/badge"
import { Card, CardContent } from "@/app/_components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel"
import {
  ArrowBigDownIcon,
  CalendarIcon,
  ClockIcon,
  TimerIcon,
  UsersRoundIcon,
} from "lucide-react"
import Image from "next/image"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import { Button } from "@/app/_components/ui/button"

dayjs.locale("pt-br")

interface AdventureCarouselProps {
  grimoireData: GrimoireProps[]
  // eslint-disable-next-line no-unused-vars
  setApi: (arg0: CarouselApi) => void
  handleCardClick: () => void
}

const AdventureCarousel = ({
  grimoireData,
  setApi,
  handleCardClick,
}: AdventureCarouselProps) => {
  return (
    <>
      <Carousel setApi={setApi}>
        <CarouselContent className="px-6 py-4">
          {grimoireData.map((card) => (
            <CarouselItem key={card.id}>
              <Card>
                <CardContent className="relative flex h-[calc(100dvh-6rem)] w-full flex-col items-center justify-center rounded-lg">
                  <Image
                    alt={card.title}
                    src={card.banner}
                    fill
                    className={"rounded-lg object-cover"}
                  />
                  <div className="absolute inset-x-0 bottom-0 z-50 m-4 rounded-lg border-2 border-border bg-white">
                    <div className="absolute -top-3 left-3">
                      {card.currentPlayers === 0 ? (
                        <Badge className="bg-tertiary">
                          {card.minPlayers} NEEDED TO START
                        </Badge>
                      ) : (
                        <Badge>
                          {card.maxPlayers - card.currentPlayers} SEAT LEFT
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-4 p-4">
                      <div>
                        <h1 className="text-2xl font-semibold">{card.title}</h1>
                        <p className="text-sm">
                          {card.system} | {card.format.name}
                        </p>
                      </div>
                      <div className="text-sm">
                        <div className="justify-left flex flex-row items-center gap-1">
                          <ClockIcon size={16} />
                          <p>
                            {card.schedule.frequency} / {card.schedule.day} -{" "}
                            {card.schedule.time}
                          </p>
                        </div>
                        <div className="justify-left flex flex-row items-center gap-1">
                          <CalendarIcon size={16} />
                          <p>
                            {dayjs(card.nextSession.date).format("DD MMM")} /
                            Session {card.nextSession.sessionNumber}
                          </p>
                        </div>
                        <div className="justify-left flex flex-row items-center gap-1">
                          <TimerIcon size={16} />
                          <p>{card.duration} Hour duration</p>
                        </div>
                        <div className="justify-left flex flex-row items-center gap-1">
                          <UsersRoundIcon size={16} />
                          <p>
                            {card.currentPlayers} / {card.maxPlayers} Seats
                            filled
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src="/girl.jpg" alt="@shadcn" />
                            <AvatarFallback>DM</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <p className="font-semibold">
                              {card.dungeonMaster.name}
                            </p>
                            <Rating
                              size={14}
                              score={card.dungeonMaster.rating.score}
                              totalRatings={
                                card.dungeonMaster.rating.totalRatings
                              }
                            />
                          </div>
                        </div>
                        <Button size="icon" onClick={handleCardClick}>
                          <ArrowBigDownIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}

export default AdventureCarousel
