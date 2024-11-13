import { Button } from "@/app/_components/ui/button"
import { PlusIcon } from "lucide-react"
import Link from "next/link"

const DM = () => {
  return (
    <>
      <div className="h-[calc(100dvh-6rem)] w-full p-4">
        <div className="flex w-full flex-row justify-end">
          <Button size="icon" asChild>
            <Link href="/adventures">
              <PlusIcon />
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default DM
