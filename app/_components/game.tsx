import { GrimoireCardProps } from "../_services/getGrimoire"
import { Button } from "./ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer"
import Image from "next/image"
import {
  CalendarIcon,
  ClockIcon,
  TimerIcon,
  UsersRoundIcon,
} from "lucide-react"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import { Separator } from "./ui/separator"
import { Alert, AlertDescription } from "./ui/alert"
dayjs.locale("pt-br")

interface GameProps {
  open: boolean
  // eslint-disable-next-line no-unused-vars
  setOpen: (value: boolean) => void
  game: GrimoireCardProps
}

const Game = ({ open, setOpen, game }: GameProps) => {
  const alert = () => {
    const isNotReady = game.currentPlayers < game.minPlayers
    return (
      isNotReady && (
        <>
          <Separator />
          <Alert>
            <AlertDescription>
              This game will begin once {game.minPlayers - game.currentPlayers}{" "}
              players have joined
            </AlertDescription>
          </Alert>
        </>
      )
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="border-none">
        <div className="h-screen overflow-y-auto">
          <div className="relative inset-y-0 h-60 w-full">
            <Image
              alt={game.title}
              src={game.banner}
              fill
              className={"h-full w-full rounded-md object-cover"}
            />
          </div>
          <div className="flex flex-col gap-8 p-4">
            <DrawerHeader className="p-0 text-left">
              <DrawerTitle className="font-semibold">{game.title}</DrawerTitle>
              <DrawerDescription>{game.system}</DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 text-sm">
                <span className="pb-1 font-semibold text-muted">DETAILS</span>
                <div className="justify-left flex flex-row items-center gap-1">
                  <ClockIcon size={16} />
                  <p>
                    {game.schedule.frequency} / {game.schedule.day} -{" "}
                    {game.schedule.time}
                  </p>
                </div>
                <div className="justify-left flex flex-row items-center gap-1">
                  <CalendarIcon size={16} />
                  <p>
                    {dayjs(game.nextSession.date).format("DD MMM")} / Session{" "}
                    {game.nextSession.sessionNumber}
                  </p>
                </div>
                <div className="justify-left flex flex-row items-center gap-1">
                  <TimerIcon size={16} />
                  <p>{game.duration} Hour duration</p>
                </div>
                <div className="justify-left flex flex-row items-center gap-1">
                  <UsersRoundIcon size={16} />
                  <p>
                    {game.currentPlayers} / {game.maxPlayers} Seats filled
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex flex-col gap-1 text-sm">
                <span className="pb-1 font-semibold text-muted">DETAILS</span>
                <p>Experience required: {game.experience}</p>
                <p>Age: {game.age}</p>
              </div>
              {alert()}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold leading-none tracking-tight">
                About the adventure
              </h1>
              <p className="whitespace-break-spaces">{game.about}</p>
            </div>
          </div>
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button>Join</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Game
