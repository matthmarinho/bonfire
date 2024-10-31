import { FlameKindlingIcon } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
    <div className="flex h-12 flex-row items-center justify-center gap-1">
      <Link href="/">
        <FlameKindlingIcon color="#f07421" size={22} />
      </Link>
      <p className="text-xl font-semibold text-primary">bonfire</p>
    </div>
  )
}

export default Header
