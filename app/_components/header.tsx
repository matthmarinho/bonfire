import { Lexend_Mega } from "next/font/google"
import { cn } from "../_lib/utils"

const lexend = Lexend_Mega({ subsets: ["latin"] })

const Header = () => {
  return (
    <div
      className={cn(
        "flex h-12 flex-row items-center justify-center gap-1",
        lexend.className,
      )}
    >
      <p className="text-xl font-bold">BONFIRE</p>
    </div>
  )
}

export default Header
