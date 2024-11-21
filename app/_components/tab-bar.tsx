"use client"

import { useUser } from "@clerk/nextjs"
import { BookOpenIcon, FlameKindlingIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { checkUserRole } from "../_utils/roles"
import D20Icon from "./icons/d20Icon"
import { Button } from "./ui/button"

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
        {role === "dungeon_master" && (
          <Button
            size={current === "dm" ? "default" : "icon"}
            variant={current === "dm" ? "pressed" : "neutral"}
            className="aspect-square"
            onClick={() => handleMenu("dm")}
            asChild
          >
            <Link href="/dm">
              {current === "dm" ? (
                <span className="font-semibold">Dungeon Master</span>
              ) : (
                <BookOpenIcon />
              )}
            </Link>
          </Button>
        )}
        <Button
          size={current === "adventures" ? "default" : "icon"}
          variant={current === "adventures" ? "pressed" : "neutral"}
          className="aspect-square"
          onClick={() => handleMenu("adventures")}
          asChild
        >
          <Link href="/adventures">
            {current === "adventures" ? (
              <span className="font-semibold">Adventures</span>
            ) : (
              <D20Icon />
            )}
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
          size={current === "grimoire" ? "default" : "icon"}
          variant={current === "grimoire" ? "pressed" : "neutral"}
          className="aspect-square"
          onClick={() => handleMenu("grimoire")}
          asChild
        >
          <Link href="/grimoire">
            {current === "grimoire" ? (
              <span className="font-semibold">Grimoire</span>
            ) : (
              <FlameKindlingIcon />
            )}
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
          size={current === "profile" ? "default" : "icon"}
          variant={current === "profile" ? "pressed" : "neutral"}
          className="aspect-square"
          onClick={() => handleMenu("profile")}
          asChild
        >
          <Link href="/profile">
            {current === "profile" ? (
              <span className="font-semibold">Profile</span>
            ) : (
              <UserIcon />
            )}
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default TabBar
