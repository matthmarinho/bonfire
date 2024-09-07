import Link from "next/link"
import Nav from "./_components/nav"
import { FlameKindlingIcon } from "lucide-react"
import Grimoire from "./_components/grimoire"

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <div className="flex h-12 flex-row items-center justify-center gap-1">
        <Link href="/">
          <FlameKindlingIcon color="#f07421" size={22} />
        </Link>
        <p className="text-xl font-semibold text-primary">bonfire</p>
      </div>
      <Grimoire />
      <Nav />
    </div>
  )
}
