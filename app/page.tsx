"use client"

import HeroPage from "./(unauth)/hero-page"
import { useState } from "react"
import SplashScreen from "./_components/splash-screen"

export default function Home() {
  // const { status } = useSession()
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     redirect('/grimoire')
  //   }
  // }, [status])

  const finishLoading = () => {
    setLoading(false)
  }

  return (
    <>
      {loading ? <SplashScreen finishLoading={finishLoading} /> : <HeroPage />}
    </>
  )
}
