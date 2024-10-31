import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/app/_components/ui/drawer"
import Image from "next/image"
import {
  CalendarIcon,
  ClockIcon,
  TimerIcon,
  UsersRoundIcon,
} from "lucide-react"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import { Separator } from "@/app/_components/ui/separator"
import { Alert, AlertDescription } from "@/app/_components/ui/alert"
import DMCard from "../../_components/dm-card"
import { AdventureProps } from "../../_actions/get-adventure"
import RequestAdventureDialog from "./request-adventure-dialog"
import { useState } from "react"
import { Button } from "@/app/_components/ui/button"
dayjs.locale("pt-br")

interface AdventureDrawerProps {
  open: boolean
  // eslint-disable-next-line no-unused-vars
  setOpen: (value: boolean) => void
  adventure: AdventureProps
}

const AdventureDrawer = ({
  open,
  setOpen,
  adventure,
}: AdventureDrawerProps) => {
  const [requested, setRequested] = useState(false)
  const alert = () => {
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

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="border-none">
        <div className="h-[calc(100vh-106px)] overflow-y-auto border-none">
          <div className="flex flex-col gap-8 px-4">
            <div className="rounded-base relative h-60 border-2 border-border shadow-light">
              <Image
                alt={adventure.title}
                src={adventure.banner}
                fill
                className={"h-full w-full object-cover"}
              />
            </div>
            <DrawerHeader className="p-0 text-left">
              <DrawerTitle className="font-semibold">
                {adventure.title}
              </DrawerTitle>
              <DrawerDescription>{adventure.system}</DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 text-sm">
                <span className="pb-1 font-semibold text-muted">DETAILS</span>
                <div className="justify-left flex flex-row items-center gap-1">
                  <ClockIcon size={16} />
                  <p>
                    {adventure.schedule.frequency} / {adventure.schedule.day} -{" "}
                    {adventure.schedule.time}
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
        </div>
        <DrawerFooter className="pt-2">
          {requested ? (
            <Button variant="noShadow" disabled>
              Requested!
            </Button>
          ) : (
            <RequestAdventureDialog
              adventure={adventure}
              setRequested={setRequested}
            />
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default AdventureDrawer
