"use client"

import HeroPage from "./(unauth)/hero-page"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import SplashScreen from "./_components/splash-screen"

export default function Home() {
  const { status } = useSession()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "authenticated") {
      // router.push(`/grimoire`)
    }
  }, [status])

  const finishLoading = () => {
    setLoading(false)
  }

  return (
    <>
      {loading ? <SplashScreen finishLoading={finishLoading} /> : <HeroPage />}
    </>
  )
}
