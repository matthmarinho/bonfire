import React from "react"
import { motion } from "framer-motion"
import D20Icon from "./icons/d20Icon"

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
}

const loadingCircleTransition = {
  duration: 0.75,
  repeat: Infinity,
  ease: "easeInOut",
  repeatType: "mirror" as const,
}

export default function Loading() {
  return (
    <div className="flex h-full items-center">
      <div className="flex w-full items-center justify-center">
        <motion.div
          className="flex justify-around gap-2 text-primary"
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            className="display-block"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          >
            <D20Icon width={16} height={16} />
          </motion.span>
          <motion.span
            className="display-block"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          >
            <D20Icon width={16} height={16} />
          </motion.span>
          <motion.span
            className="display-block"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          >
            <D20Icon width={16} height={16} />
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}
