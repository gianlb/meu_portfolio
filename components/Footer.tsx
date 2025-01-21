import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 text-gray-300 p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2023 Gian. Todos os direitos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://github.com/gianlb" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-blue-400 transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/gian-luiggi-bueno" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
          </Link>
          <Link href="mailto:gianluiggibueno7@gmail.com">
            <Mail className="w-6 h-6 hover:text-blue-400 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

