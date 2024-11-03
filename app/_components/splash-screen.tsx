import React from "react"
import { motion } from "framer-motion"
import { Lexend_Mega } from "next/font/google"
import { cn } from "../_lib/utils"

const lexend = Lexend_Mega({ subsets: ["latin"] })

interface SplashScreenProps {
  finishLoading: () => void
}

const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
  return (
    <section className="flex h-dvh w-full flex-col items-center justify-center">
      <div className="container">
        <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:content-['']">
          <motion.div
            transition={{
              duration: 2,
              ease: "linear",
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className={cn("flex flex-none gap-16 pr-16", lexend.className)}
            onAnimationComplete={() => finishLoading()}
          >
            {[...new Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                {[...new Array(6)].map((_, k) => (
                  <p key={`${k}-name`} className="text-6xl font-extrabold">
                    BONFIRE
                  </p>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SplashScreen
