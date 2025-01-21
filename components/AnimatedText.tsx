"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface AnimatedTextProps {
  text: string
  delay?: number
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const animateText = () => {
      if (!isDeleting && displayText !== text) {
        setDisplayText(text.slice(0, displayText.length + 1))
      } else if (isDeleting && displayText !== "") {
        setDisplayText(displayText.slice(0, -1))
      } else if (!isDeleting && displayText === text) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
      }
    }

    timer = setTimeout(animateText, isDeleting ? delay / 2 : delay)

    return () => clearTimeout(timer)
  }, [text, delay, displayText, isDeleting])

  return (
    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
      {displayText}
      <span className="animate-blink">|</span>
    </h1>
  )
}

export default AnimatedText

