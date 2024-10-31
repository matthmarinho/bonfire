import Link from "next/link"
import { Button } from "./ui/button"
import {
  FlameKindlingIcon,
  MessagesSquareIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react"
import D20Icon from "./icons/d20Icon"

const Nav = () => {
  return (
    <div className="fixed bottom-0 flex h-12 w-full items-center justify-around bg-background">
      <Link href="/">
        <Button size="icon" variant="invisible">
          <FlameKindlingIcon />
        </Button>
      </Link>
      <Link href="/">
        <Button size="icon" variant="invisible">
          <SearchIcon />
        </Button>
      </Link>
      <Link href="/">
        <Button size="icon" variant="invisible">
          <D20Icon />
        </Button>
      </Link>
      <Link href="/">
        <Button size="icon" variant="invisible">
          <MessagesSquareIcon />
        </Button>
      </Link>
      <Link href="/">
        <Button size="icon" variant="invisible">
          <UserIcon />
        </Button>
      </Link>
    </div>
  )
}

export default Nav
