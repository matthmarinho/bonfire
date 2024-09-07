import Link from "next/link"
import { Button } from "./ui/button"
import {
  DicesIcon,
  FlameKindlingIcon,
  MessagesSquareIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react"

const Nav = () => {
  return (
    <div className="flex h-12 w-full items-center justify-around bg-background">
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
          <DicesIcon />
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
