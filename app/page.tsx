import TabBar from "./_components/tab-bar"
import Grimoire from "./_components/grimoire"
import { redirect } from "next/navigation"
import Header from "./_components/header"

export default function Home() {
  if (true) {
    redirect(`/grimoire`)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Grimoire />
      <TabBar />
    </div>
  )
}
