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
  const pathname = usePathname().replace("/", "")
  const [current, setCurrent] = useState(pathname)

  const handleMenu = (value: string) => {
    setCurrent(value)
  }

  return (
    <div className="fixed bottom-0 flex h-20 w-full items-center justify-around bg-transparent">
      <div className="flex gap-4">
        <Link href="/adventures" legacyBehavior passHref>
          <Button
            size="icon"
            variant={current === "adventures" ? "pressed" : "neutral"}
            className="aspect-square"
            onClick={() => handleMenu("adventures")}
          >
            <D20Icon />
          </Button>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <Button
            size="icon"
            variant={current === "search" ? "pressed" : "neutral"}
            onClick={() => handleMenu("search")}
          >
            <SearchIcon />
          </Button>
        </Link>
        <Link href="/grimoire" legacyBehavior passHref>
          <Button
            size="icon"
            variant={current === "grimoire" ? "pressed" : "neutral"}
            onClick={() => handleMenu("grimoire")}
          >
            <FlameKindlingIcon />
          </Button>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <Button
            size="icon"
            variant={current === "messages" ? "pressed" : "neutral"}
            onClick={() => handleMenu("messages")}
          >
            <MessagesSquareIcon />
          </Button>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <Button
            size="icon"
            variant={current === "account" ? "pressed" : "neutral"}
            onClick={() => handleMenu("account")}
          >
            <UserIcon />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default TabBar
