"use client"

import LoadingAnim from "@/app/_components/loading-anim"
import { Button } from "@/app/_components/ui/button"
import { useClerk, useUser } from "@clerk/nextjs"
import { LogOutIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const UserProfilePage = () => {
  const router = useRouter()
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useClerk()

  if (!isLoaded || !isSignedIn) {
    return <LoadingAnim />
  }

  console.log(user)

  return (
    <div className="flex flex-row items-center justify-between p-4">
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
  )
}

export default UserProfilePage
