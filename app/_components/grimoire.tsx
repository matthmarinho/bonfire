"use client"

import { DicesIcon, PinIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import XIcon from "../_constants/xIcon"
import HeartIcon from "../_constants/heartIcon"
import { AnimatePresence, motion, transform, useAnimation } from "framer-motion"

export const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
]

const Grimoire = () => {
  const rotateValue = transform([-200, 200], [-50, 50])(0)

  const animControls = useAnimation()

  return (
    <AnimatePresence initial={false}>
      <motion.div
        // className={styles.img}
        // key={page}
        // custom={direction}
        initial="enter"
        animate={{ rotate: rotateValue }}
        drag="x"
        dragConstraints={{ left: -1000, right: 1000 }}
        dragElastic={1}
        onDragEnd={(event, info) => {
          // If the card is dragged only upto 150 on x-axis
          // bring it back to initial position
          if (Math.abs(info.point.x) <= 150) {
            animControls.start({ x: 0 })
          } else {
            // If card is dragged beyond 150
            // make it disappear
            // making use of ternary operator
            animControls.start({ x: info.point.x < 0 ? -200 : 200 })
          }
        }}
        className="relative h-[300px] w-full flex-grow"
      >
        <Image
          alt={"image"}
          src="/girl.jpg"
          fill
          className="rounded-xl object-cover px-1"
        />
        <div className="absolute inset-x-0 bottom-0 z-50 mx-1 rounded-b-xl bg-gradient-to-t from-black via-black to-black/10">
          <div className="space-y-2 p-2">
            <h1 className="text-3xl font-semibold text-white">
              Sabrina Carpenter
            </h1>
            <div>
              <div className="justify-left flex flex-row items-center gap-1 text-white">
                <PinIcon size={16} />
                <p>Recife</p>
              </div>
              <div className="justify-left flex flex-row items-center gap-1 text-white">
                <DicesIcon size={16} />
                <p>D&D | Cyberpunk</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-around p-2">
            <Button
              size="rounded"
              className="border-2 border-red-600 bg-transparent fill-red-600 hover:bg-red-600 hover:fill-white"
            >
              <XIcon className="h-6 w-6" />
            </Button>
            <Button
              size="rounded"
              className="border-2 border-green-600 bg-transparent fill-green-600 hover:bg-green-600 hover:fill-white"
            >
              <HeartIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Grimoire
