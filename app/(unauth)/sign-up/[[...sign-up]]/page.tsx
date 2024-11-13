import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex h-dvh items-center">
      <div className="flex w-full items-center justify-center">
        <SignUp />
      </div>
    </div>
  )
}
