import { Adventure, AdventureStatus, Session } from "@prisma/client"
import dayjs from "dayjs"
import { Badge } from "./ui/badge"

interface RenderBadgeProps {
  adventure: Adventure
  session: Session
}

const AdventureStatusTranslations: Record<AdventureStatus, string> = {
  [AdventureStatus.WAITING_FOR_PLAYERS]: "Pendente",
  [AdventureStatus.ACTIVE]: "Ativa",
  [AdventureStatus.PAUSED]: "Pausada",
}

const RenderBadge = ({ adventure, session }: RenderBadgeProps) => {
  switch (adventure.status) {
    case "WAITING_FOR_PLAYERS":
      return <Badge>{AdventureStatusTranslations[adventure.status]}</Badge>
    case "PAUSED":
      return (
        <Badge variant="destructive">
          {AdventureStatusTranslations[adventure.status]}
        </Badge>
      )
    default:
      return (
        <Badge variant="positive">{dayjs(session.date).format("DD MMM")}</Badge>
      )
  }
}

export default RenderBadge
