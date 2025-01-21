"use client"

import Image from "next/image"
import AnimatedText from "@/components/AnimatedText"
import SkillsSection from "@/components/SkillsSection"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mb-8"
        >
          <Image
            src="/Gian.jpg"
            alt="Gian"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <AnimatedText text="Olá, me chamo Gian e sou programador back-end" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl text-gray-300 text-center max-w-2xl"
        >
          Especializado em desenvolvimento de aplicações robustas e escaláveis, com foco em C#, Java e Banco de Dados.
          Apaixonado por criar soluções eficientes e inovadoras para desafios complexos.
        </motion.p>
        <SkillsSection />
      </div>
    </div>
  )
}

