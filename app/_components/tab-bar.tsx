"use client"

import Link from "next/link"
import {
  FlameKindlingIcon,
  MessagesSquareIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react"
import D20Icon from "./icons/d20Icon"
import { useState } from "react"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"

const TabBar = () => {
  const pathname = usePathname().split("/").filter(Boolean)[0]
  const [current, setCurrent] = useState(pathname)

  const handleMenu = (value: string) => {
    setCurrent(value)
  }

  return (
    <div className="fixed bottom-0 flex h-20 w-full items-center justify-around bg-transparent">
      <div className="flex gap-4">
        <Button
          size="icon"
          variant={current === "adventures" ? "pressed" : "neutral"}
          className="aspect-square"
          onClick={() => handleMenu("adventures")}
          asChild
        >
          <Link href="/adventures">
            <D20Icon />
          </Link>
        </Button>
        <Button
          size="icon"
          variant={current === "search" ? "pressed" : "neutral"}
          onClick={() => handleMenu("search")}
          asChild
        >
          <Link href="/">
            <SearchIcon />
          </Link>
        </Button>
        <Button
          size="icon"
          variant={current === "grimoire" ? "pressed" : "neutral"}
          onClick={() => handleMenu("grimoire")}
          asChild
        >
          <Link href="/grimoire">
            <FlameKindlingIcon />
          </Link>
        </Button>
        <Button
          size="icon"
          variant={current === "messages" ? "pressed" : "neutral"}
          onClick={() => handleMenu("messages")}
          asChild
        >
          <Link href="/">
            <MessagesSquareIcon />
          </Link>
        </Button>
        <Button
          size="icon"
          variant={current === "profile" ? "pressed" : "neutral"}
          onClick={() => handleMenu("profile")}
          asChild
        >
          <Link href="/profile">
            <UserIcon />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default TabBar
