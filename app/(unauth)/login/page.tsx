"use client"

import { signIn, useSession } from "next-auth/react"
import { Button } from "../../_components/ui/button"
import GoogleIcon from "../../_components/icons/google-icon"
import { cn } from "../../_lib/utils"
import D20Icon from "../../_components/icons/d20Icon"
import { useEffect, useState } from "react"

const Login = () => {
  const { status } = useSession()
  const [callbackUrl, setCallbackUrl] = useState("/")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setCallbackUrl(urlParams.get("callbackUrl") || "/")
  }, [])

  const handleLoginGoogle = () => {
    signIn("google", { callbackUrl })
  }

  return (
    <>
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-6",
        )}
      >
        <Button
          className=""
          onClick={handleLoginGoogle}
          disabled={status === "loading"}
        >
          <div className="flex items-center gap-1 font-semibold">
            {status === "loading" ? (
              <D20Icon className="animate-spin" />
            ) : (
              <GoogleIcon />
            )}
            <span>Log in with Google</span>
          </div>
        </Button>
      </div>
    </>
  )
}

export default Login
