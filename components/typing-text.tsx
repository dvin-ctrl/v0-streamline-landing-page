"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingTextProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  pauseDuration?: number
  deletingSpeed?: number
}

export default function TypingText({
  texts,
  className = "",
  typingSpeed = 100,
  pauseDuration = 2000,
  deletingSpeed = 50,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const currentText = texts[currentTextIndex]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, pauseDuration)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, deletingSpeed)
      } else {
        timeout = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          setIsTyping(true)
        }, 500)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentText, typingSpeed, pauseDuration, deletingSpeed, texts.length])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span
      className={`${className} [&]:text-blue-400 [&]:bg-gradient-to-r [&]:from-blue-400 [&]:via-purple-400 [&]:to-pink-400 [&]:bg-clip-text [&]:text-transparent`}
      style={{
        color: "rgb(96 165 250)", // fallback blue-400 color
        backgroundImage: "linear-gradient(to right, rgb(96 165 250), rgb(168 85 247), rgb(244 114 182))",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="inline-block text-white"
        style={{ WebkitTextFillColor: "white" }}
      >
        |
      </motion.span>
    </span>
  )
}
