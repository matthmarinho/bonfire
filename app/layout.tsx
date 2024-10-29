import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "bonfire",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bonfire">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
