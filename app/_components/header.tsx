import { Lexend_Mega } from "next/font/google"
import { cn } from "../_lib/utils"

const lexend = Lexend_Mega({ subsets: ["latin"] })

const Header = () => {
  return (
    <header>
      <nav
        className={cn(
          "flex-no-wrap relative flex h-12 w-full items-center justify-center gap-1 bg-transparent",
          lexend.className,
        )}
      >
        <p className="text-xl font-bold">BONFIRE</p>
      </nav>
    </header>
  )
}

export default Header
