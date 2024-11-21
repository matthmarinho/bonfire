"use client"

import createDungeonMaster from "@/app/_actions/create-dungeon-master"
import LoadingAnim from "@/app/_components/loading-anim"
import { Button } from "@/app/_components/ui/button"
import { checkUserRole } from "@/utils/roles"
import { useClerk, useUser } from "@clerk/nextjs"
import { BookOpenIcon, LogOutIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const UserProfilePage = () => {
  const router = useRouter()
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useClerk()

  if (!isLoaded || !isSignedIn) {
    return <LoadingAnim />
  }

  const handleCreateDungeonMaster = () => {
    createDungeonMaster({ clerkUserId: user.id })
  }

  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-row justify-between">
        <div className="flex gap-4">
          <div className="relative h-14 w-14 rounded-full border-2 border-border shadow-light">
            <Image
              alt={user.firstName || "image"}
              src={user.imageUrl}
              fill
              className={"h-full w-full rounded-full object-cover"}
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-base font-heading leading-none tracking-tight">
              {user.firstName}
            </h1>
            <span className="text-sm font-base leading-none">
              {user.primaryEmailAddress?.emailAddress}
            </span>
          </div>
        </div>

        <Button
          size="icon"
          onClick={() => signOut(() => router.push("/"))}
          className="py-3"
        >
          <LogOutIcon />
        </Button>
      </div>
      {checkUserRole(user) !== "dungeon_master" && (
        <div className="flex items-center justify-between">
          <span>Become a Dungeon Master!</span>
          <Button
            size="icon"
            onClick={() => handleCreateDungeonMaster()}
            className="py-3"
          >
            <BookOpenIcon />
          </Button>
        </div>
      )}
    </div>
  )
}

export default UserProfilePage
