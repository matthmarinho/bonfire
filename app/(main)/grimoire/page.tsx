"use client"

import { useEffect, useState } from "react"
import { CarouselApi } from "@/app/_components/ui/carousel"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import GetGrimoire, { GrimoireProps } from "../../_actions/get-grimoire"
import AdventureDrawer from "./_components/adventure-drawer"
import Loading from "../../_components/loading-anim"
import AdventureCarousel from "./_components/adventure-carousel"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

dayjs.locale("pt-br")

const Grimoire = () => {
  const router = useRouter()
  const { status } = useSession()

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [, setCount] = useState(0)
  const [grimoireData, setGrimoireData] = useState<GrimoireProps[] | []>([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [currentAdventure, setCurrentAdventure] =
    useState<GrimoireProps | null>(null)

  const handleCardClick = () => {
    setCurrentAdventure(grimoireData[current - 1])
    setOpen(true)
  }

  useEffect(() => {
    if (status === "unauthenticated") {
      const callbackUrl = encodeURIComponent(window.location.href)
      router.push(`/login?callbackUrl=${callbackUrl}`)
    }
  }, [status, router])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await GetGrimoire()
      setGrimoireData(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
      <div className="h-[calc(100dvh-3rem)] w-full">
        {loading || status === "loading" ? (
          <Loading />
        ) : (
          <AdventureCarousel
            grimoireData={grimoireData}
            setApi={setApi}
            handleCardClick={handleCardClick}
          />
        )}
      </div>
      {currentAdventure && (
        <AdventureDrawer
          open={open}
          setOpen={setOpen}
          adventure={currentAdventure}
        />
      )}
    </>
  )
}

export default Grimoire
