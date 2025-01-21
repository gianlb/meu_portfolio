interface SkillBarProps {
  skill: string
  level: number
}

const SkillBar = ({ skill, level }: SkillBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-300">{skill}</span>
        <span className="text-sm font-medium text-blue-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  )
}

export default SkillBar

