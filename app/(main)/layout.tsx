import Header from "../_components/header"
import TabBar from "../_components/tab-bar"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <TabBar />
    </>
  )
}
