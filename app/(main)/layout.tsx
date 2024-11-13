import TabBar from "../_components/tab-bar"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="container h-[calc(100dvh-3.5rem)] w-full">{children}</div>
      <TabBar />
    </>
  )
}
