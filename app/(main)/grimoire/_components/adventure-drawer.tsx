import { Button } from "@/app/_components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/app/_components/ui/drawer"
import { Separator } from "@/app/_components/ui/separator"
import { Prisma } from "@prisma/client"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import {
  CalendarIcon,
  ClockIcon,
  TimerIcon,
  UsersRoundIcon,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import RequestAdventureDialog from "./request-adventure-dialog"
dayjs.locale("pt-br")

type AdventureWithPayload = Prisma.AdventureGetPayload<{
  include: {
    sessions: true
    players: true
  }
}>

interface AdventureDrawerProps {
  open: boolean
  // eslint-disable-next-line no-unused-vars
  setOpen: (value: boolean) => void
  adventure: AdventureWithPayload
}

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

const AdventureDrawer = ({
  open,
  setOpen,
  adventure,
}: AdventureDrawerProps) => {
  const [requested, setRequested] = useState(false)
  // const alert = () => {
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

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="border-none">
        <div className="no-scrollbar h-[calc(100dvh-6.5rem)] overflow-y-auto border-none pb-2">
          <div className="flex flex-col gap-8 px-4">
            <div className="relative h-60 rounded-lg border-2 border-border shadow-light">
              <Image
                alt={adventure.title}
                src={adventure.imageUrl || ""}
                fill
                className={"h-full w-full object-cover"}
              />
            </div>
            <DrawerHeader className="p-0 text-left">
              <DrawerTitle className="text-2xl font-semibold leading-none tracking-tight">
                {adventure.title}
              </DrawerTitle>
              <DrawerDescription>{adventure.system}</DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 text-sm">
                <span className="pb-1 font-semibold text-muted">DETAILS</span>
                {adventure.sessions[0] && (
                  <>
                    <div className="justify-left flex flex-row items-center gap-1">
                      <CalendarIcon size={16} />
                      <p>
                        {dayjs(adventure.sessions[0].date).format("DD/MM/YYYY")}
                      </p>
                    </div>
                    <div className="justify-left flex flex-row items-center gap-1">
                      <ClockIcon size={16} />
                      <p>{dayjs(adventure.sessions[0].date).format("HH:mm")}</p>
                    </div>
                    <div className="justify-left flex flex-row items-center gap-1">
                      <TimerIcon size={16} />
                      <p>
                        {
                          durations.find(
                            (x) => x.value === adventure.sessions[0].duration,
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
              <Separator />
              {/* <div className="flex flex-col gap-1 text-sm">
                <span className="pb-1 font-semibold text-muted">DETAILS</span>
                <p>Experience required: {adventure.experience}</p>
                <p>Age: {adventure.age}</p>
              </div> */}
              {/* {alert()} */}
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
