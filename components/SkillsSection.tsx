"use client"

import type React from "react"
import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
  color: string
}

const skills: Skill[] = [
  { name: "C#", level: 87, color: "bg-purple-500" },
  { name: "Java", level: 85, color: "bg-red-500" },
  { name: "SQL", level: 80, color: "bg-green-500" },
  { name: "JavaScript", level: 75, color: "bg-yellow-500" },
  
]

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-blue-300">{skill.name}</span>
      <span className="text-sm font-medium text-blue-300">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">
      <motion.div
        className={`h-2.5 rounded-full ${skill.color}`}
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
)

const SkillsSection: React.FC = () => (
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4 text-blue-300">Minhas Habilidades</h2>
    {skills.map((skill) => (
      <SkillBar key={skill.name} skill={skill} />
    ))}
  </div>
)

export default SkillsSection

