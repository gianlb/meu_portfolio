import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portfólio de Gian - Programador Back-end",
  description: "Desenvolvedor back-end especializado em C#, Java, Python, e mais.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${poppins.className} bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-100 min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

