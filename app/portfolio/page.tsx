import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Lista de Tarefas",
    description: "Um projeto simples para o usuário inserir sua lista de tarefas utilizando HTML, CSS E JavaScript.",
    image: "/ToDoList.png?height=200&width=300",
    github: "https://github.com/gianlb/To-Do-List_projeto",
  },
  {
    id: 2,
    title: "Neuron",
    description: "A Neuron foi um projeto em grupo, onde fiz parte do FullStack. Utilizei React para o Front-End, e no Back-end utilizei o ASP.NET e o SQL Server para banco de dados.",
    image: "/neuron_logo.png?height=200&width=300",
    github: "https://github.com/Neuron-DemoDay",
  },
  {
    id: 3,
    title: "Mapa de Carreira",
    description: "Projeto feito para mostrar o meu plano de carreira, como objetivos e metas que tenho na área de tecnologia, utilizando BootStrap.",
    image: "/image.png?height=200&width=300",
    github: "https://github.com/gianlb/mapa-de-carreira",
  },
]

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-300">Meu Portfólio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-300">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                <Github size={24} className="mr-2" />
                Ver no GitHub
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

