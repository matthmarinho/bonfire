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
  CalendarIcon,
  ClockIcon,
  TimerIcon,
  UsersRoundIcon,
} from "lucide-react"
import Image from "next/image"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"

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
    <div className="mb-4">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="px-4 pb-6">
          {grimoireData.map((card) => (
            <CarouselItem key={card.id}>
              <Card>
                <CardContent
                  className="relative flex h-[calc(100vh-136px)] w-full flex-col items-center justify-center"
                  onClick={handleCardClick}
                >
                  <Image
                    alt={card.title}
                    src={card.banner}
                    fill
                    className={"object-cover"}
                  />
                  <div className="rounded-base absolute inset-x-0 bottom-0 z-50 m-4 border-2 border-border bg-background shadow-light">
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
                          <p className="font-semibold">
                            {card.dungeonMaster.name}
                          </p>
                        </div>
                        <Rating
                          size={14}
                          score={card.dungeonMaster.rating.score}
                          totalRatings={card.dungeonMaster.rating.totalRatings}
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
  )
}

export default AdventureCarousel
