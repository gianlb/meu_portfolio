import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Contato() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h1 className="text-3xl font-bold mb-12 text-center text-blue-300">Contato</h1>
      <div className="flex justify-center space-x-12">
        <Link href="https://github.com/gianlb" target="_blank" rel="noopener noreferrer">
          <Github size={64} className="text-gray-300 hover:text-blue-400 transition-colors" />
        </Link>
        <Link href="https://linkedin.com/in/gian-luiggi-bueno" target="_blank" rel="noopener noreferrer">
          <Linkedin size={64} className="text-gray-300 hover:text-blue-400 transition-colors" />
        </Link>
        <Link href="mailto:gianluiggibueno7@gmail.com">
          <Mail size={64} className="text-gray-300 hover:text-blue-400 transition-colors" />
        </Link>
      </div>
    </div>
  )
}

