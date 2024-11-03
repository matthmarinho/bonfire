import Header from "../_components/header"

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className="h-[calc(100dvh-3rem)] w-full">{children}</div>
    </>
  )
}
