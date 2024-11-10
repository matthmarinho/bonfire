"use client"

import React, { useEffect, useState } from "react"
import { Lexend_Mega } from "next/font/google"
import { cn } from "../../../_lib/utils"
import { VelocityScroll } from "@/app/_components/ui/scroll-based-velocity"

const lexend = Lexend_Mega({ subsets: ["latin"] })

const SplashScreen = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 2000)
  }, [])

  if (!show) return null

  return (
    <section className="flex h-dvh w-full flex-col items-center justify-center">
      <VelocityScroll
        text="BONFIRE"
        default_velocity={5}
        className={cn(
          "font-display text-center text-6xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]",
          lexend.className,
        )}
      />
    </section>
  )
}

export default SplashScreen
