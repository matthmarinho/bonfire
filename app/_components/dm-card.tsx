import { FlagIcon, FlameKindlingIcon } from "lucide-react"
import { DungeonMasterProps } from "../_actions/get-grimoire"
import Rating from "./rating"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import { cn } from "../_lib/utils"
// import { Button } from "./ui/button"
// import { Instagram, Youtube, Twitter } from 'lucide-react'

interface DMProps {
  dungeonMaster: DungeonMasterProps
  className?: string
}

const DMCard = ({ dungeonMaster, className }: DMProps) => {
  return (
    <Card
      className={cn(
        "shadow-light hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-none",
        className,
      )}
    >
      <CardHeader className="p-4">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src={dungeonMaster.avatarUrl} />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="text-sm font-medium">
              <p className="leading-none">{dungeonMaster.name}</p>
              <Rating
                size={14}
                score={dungeonMaster.rating.score}
                totalRatings={dungeonMaster.rating.totalRatings}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          {[...dungeonMaster.proficiencies].map((proficience, index) => (
            <Badge key={`${index}-proficience`}>{proficience}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 px-4 pb-4">
        <div className="flex flex-col gap-1 text-sm">
          <div className="justify-left flex flex-row items-center gap-1">
            <FlameKindlingIcon size={16} />
            <p>{dungeonMaster.platformTime} on bonfire</p>
          </div>
          <div className="justify-left flex flex-row items-center gap-1">
            <FlagIcon size={16} />
            <p>{dungeonMaster.sessionsPlayed} games hosted</p>
          </div>
        </div>
        {/* <div className="flex gap-2 text-lg">
          {dungeonMaster.socialLinks.instagram &&
            <a target="_blank" href={dungeonMaster.socialLinks.instagram}>
              <Button size="icon" variant="invisible">
                <Instagram size={20} />
              </Button>
            </a>
          }
          {dungeonMaster.socialLinks.twitter &&
            <a target="_blank" href={dungeonMaster.socialLinks.twitter}>
              <Button size="icon" variant="invisible">
                <Twitter size={20} />
              </Button>
            </a>
          }
          {dungeonMaster.socialLinks.youtube &&
            <a target="_blank" href={dungeonMaster.socialLinks.youtube}>
              <Button size="icon" variant="invisible">
                <Youtube size={20} />
              </Button>
            </a>
          }
        </div> */}
      </CardContent>
    </Card>
  )
}

export default DMCard
