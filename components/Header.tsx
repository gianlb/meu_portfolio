"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-md text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto">
        <ul className="flex justify-center space-x-8">
          {["Home", "Portfolio", "Contato"].map((item) => (
            <li key={item}>
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="relative text-lg font-semibold">
                {pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-blue-400"
                  />
                )}
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

