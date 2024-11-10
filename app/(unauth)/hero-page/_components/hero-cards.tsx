"use client"

import TextAnim from "@/app/_components/text-anim"
import Image from "next/image"

const HeroCards = () => {
  return (
    <div className="relative mb-8 flex grow items-center justify-center">
      <div className="relative z-30 flex aspect-[3/4] h-full transform items-center justify-center rounded-lg border-2 border-border bg-white shadow-light transition-transform duration-300 hover:scale-105">
        <Image
          alt={"first card"}
          src={"/blue.jpeg"}
          fill
          className={"h-full w-full rounded-lg object-cover"}
        />
        <div className="z-35 absolute inset-x-0 bottom-0 m-4 min-h-8 rounded-lg border-2 border-border bg-white px-1">
          <TextAnim />
        </div>
      </div>

      <div className="absolute z-20 flex aspect-[3/4] h-full -rotate-20 transform items-center justify-center rounded-lg border-2 border-border bg-green-500 shadow-light">
        <Image
          alt={"first card"}
          src={"/colored.jpeg"}
          fill
          className={"h-full w-full rounded-lg object-cover"}
        />
        <div className="z-25 absolute inset-x-0 bottom-0 m-4 min-h-8 rounded-lg border-2 border-border bg-white px-1">
          <span className="inline text-xl">{"Dungeons & Dragons (D&D)"}</span>
        </div>
      </div>

      <div className="absolute z-10 flex aspect-[3/4] h-full rotate-20 transform items-center justify-center rounded-lg border-2 border-border bg-red-500 shadow-light">
        <Image
          alt={"first card"}
          src={"/dark.jpeg"}
          fill
          className={"h-full w-full rounded-lg object-cover"}
        />
        <div className="z-15 absolute inset-x-0 bottom-0 m-4 min-h-8 rounded-lg border-2 border-border bg-white px-1">
          <span className="inline text-xl">{"Call of Cthulhu"}</span>
        </div>
      </div>
    </div>
  )
}

export default HeroCards
