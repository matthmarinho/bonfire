"use client"

import { signIn, useSession } from "next-auth/react"
import { Button } from "../../_components/ui/button"
import GoogleIcon from "../../_components/icons/google-icon"
import { cn } from "../../_lib/utils"
import { useState } from "react"
import D20Icon from "../../_components/icons/d20Icon"
import SessionZeroForm from "./_components/session-zero-form"
import Celebration from "./_components/celebration"

const SignUp = () => {
  const [formSent, setFormSet] = useState<boolean>(false)
  const { status } = useSession()

  const handleLoginGoogle = () => {
    signIn("google")
  }

  if (formSent) {
    return <Celebration />
  }

  if (status === "authenticated") {
    return <SessionZeroForm setFormSent={setFormSet} />
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
            <span>Sign in with Google</span>
          </div>
        </Button>
      </div>
    </>
  )
}

export default SignUp
