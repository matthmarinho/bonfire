import Image from "next/image"
import { Lexend_Mega } from "next/font/google"
import { cn } from "../_lib/utils"
import { Button } from "../_components/ui/button"
import TextAnim from "../_components/text-anim"
import Link from "next/link"
const lexend = Lexend_Mega({ subsets: ["latin"] })

const HeroPage = () => {
  return (
    <div className="text-semibold inset-x-0 bottom-0 z-50 flex h-dvh w-full flex-col justify-items-stretch space-y-4 bg-background p-4">
      <div className="flex items-center justify-center pb-8">
        <p className={cn("text-3xl font-bold", lexend.className)}>BONFIRE</p>
      </div>
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
      <div className="flex flex-col rounded-lg border-2 border-border bg-white p-4 shadow-light">
        <h1
          className={cn(
            "mb-4 text-3xl font-extrabold tracking-tight",
            lexend.className,
          )}
        >
          Find an adventure!
        </h1>
        <p className="text-sm font-base">
          We connect you with DM{`&apos;`}s and players for unforgettable RPG
          experiences.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Button size="lg" className="w-full font-semibold">
          <Link href="/sign-up">Explore Now!</Link>
        </Button>
      </div>
    </div>
  )
}

export default HeroPage
