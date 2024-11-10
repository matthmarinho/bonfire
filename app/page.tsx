import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"

const Home = async () => {
  const { userId } = await auth()

  if (!userId) {
    redirect("/hero-page")
  }

  redirect("/grimoire")

  // return (
  //   <div className="flex h-full items-center justify-center">
  //     <UserButton showName />
  //   </div>
  //   // <>
  //   //   {loading ? <SplashScreen finishLoading={finishLoading} /> : <HeroPage />}
  //   // </>
  // )
}

export default Home
