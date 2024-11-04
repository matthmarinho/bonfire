"use client"

import { signIn } from "next-auth/react"
import { Button } from "../../_components/ui/button"
import GoogleIcon from "../../_components/icons/google-icon"
import { cn } from "../../_lib/utils"
import { useState } from "react"
import D20Icon from "../../_components/icons/d20Icon"

const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const handleLoginGoogle = () => {
    setLoading(true)
    signIn("google").then(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-6",
        )}
      >
        <Button className="" onClick={handleLoginGoogle} disabled={loading}>
          <div className="flex items-center gap-1 font-semibold">
            {loading ? <D20Icon className="animate-spin" /> : <GoogleIcon />}
            <span>Log in with Google</span>
          </div>
        </Button>
      </div>
    </>
  )
}

export default SignUp
