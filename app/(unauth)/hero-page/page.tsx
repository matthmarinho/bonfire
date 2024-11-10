import { Lexend_Mega } from "next/font/google"
import { cn } from "../../_lib/utils"
import { Button } from "../../_components/ui/button"
import { SignInButton } from "@clerk/nextjs"
import SplashScreen from "./_components/splash-screen"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import HeroCards from "./_components/hero-cards"
const lexend = Lexend_Mega({ subsets: ["latin"] })

const HeroPage = async () => {
  const { userId } = await auth()

  if (userId) {
    redirect("/")
  }

  return (
    <>
      <SplashScreen />
      <div className="text-semibold justify-items inset-x-0 bottom-0 z-50 flex h-dvh flex-col items-center space-y-4 bg-background p-4">
        <div className="flex items-center justify-center pb-8">
          <h1 className={cn("text-3xl font-bold", lexend.className)}>
            BONFIRE
          </h1>
        </div>
        <HeroCards />
        <div className="flex flex-col rounded-lg border-2 border-border bg-white p-4 shadow-light md:w-1/2">
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
        <div className="flex w-full items-center justify-center md:w-1/2">
          <SignInButton>
            <Button size="lg" className="w-full font-semibold">
              Explore Now!
            </Button>
          </SignInButton>
        </div>
      </div>
    </>
  )
}

export default HeroPage
