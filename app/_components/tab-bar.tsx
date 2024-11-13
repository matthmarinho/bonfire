"use client"

import Link from "next/link"
import { BookOpenIcon, FlameKindlingIcon, UserIcon } from "lucide-react"
import D20Icon from "./icons/d20Icon"
import { useState } from "react"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { checkUserRole } from "@/utils/roles"

const TabBar = () => {
  const pathname = usePathname().split("/").filter(Boolean)[0]
  const [current, setCurrent] = useState(pathname)
  const { user } = useUser()
  const role = checkUserRole(user)

  const handleMenu = (value: string) => {
    setCurrent(value)
  }

  return (
    <div className="fixed bottom-0 flex h-14 w-full justify-around bg-transparent">
      <div className="flex gap-4">
        {role === "admin" && (
          <Button
            size="icon"
            variant={current === "dm" ? "pressed" : "neutral"}
            className="aspect-square"
            onClick={() => handleMenu("dm")}
            asChild
          >
            <Link href="/dm">
              <BookOpenIcon />
            </Link>
          </Button>
        )}
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
        {/* <Button
          size="icon"
          variant={current === "search" ? "pressed" : "neutral"}
          onClick={() => handleMenu("search")}
          asChild
        >
          <Link href="/">
            <SearchIcon />
          </Link>
        </Button> */}
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
        {/* <Button
          size="icon"
          variant={current === "messages" ? "pressed" : "neutral"}
          onClick={() => handleMenu("messages")}
          asChild
        >
          <Link href="/">
            <MessagesSquareIcon />
          </Link>
        </Button> */}
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
