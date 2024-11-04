import { Button } from "@/app/_components/ui/button"
import Link from "next/link"
import { Lexend_Mega } from "next/font/google"
import { cn } from "@/app/_lib/utils"
const lexend = Lexend_Mega({ subsets: ["latin"] })

const Celebration = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 p-4">
      <div className="flex flex-col rounded-lg border-2 border-border bg-white p-4 shadow-light">
        <h1
          className={cn(
            "mb-4 text-3xl font-extrabold tracking-tight",
            lexend.className,
          )}
        >
          Adventure Awaits!
        </h1>
        <p className="text-sm font-base">
          Your profile is complete, and you’re now ready to discover and join
          amazing RPG groups!
        </p>
      </div>

      <Button size="lg" className="w-full font-semibold" asChild>
        <Link href="/grimoire">Explore Now!</Link>
      </Button>
    </div>
  )
}

export default Celebration
