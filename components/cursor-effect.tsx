"use client"

import { useEffect, useState, useCallback } from "react"

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [cursorColor, setCursorColor] = useState("rgba(59, 130, 246, 0.5)")
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; size: number; opacity: number; id: number }>>([])
  const [rippleId, setRippleId] = useState(0)

  const colors = [
    "rgba(59, 130, 246, 0.5)",
    "rgba(139, 92, 246, 0.5)",
    "rgba(236, 72, 153, 0.5)",
    "rgba(34, 197, 94, 0.5)",
    "rgba(249, 115, 22, 0.5)",
  ]

  const throttledUpdatePosition = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout | null = null
      return (e: MouseEvent) => {
        if (timeoutId) return
        timeoutId = setTimeout(() => {
          setPosition({ x: e.clientX, y: e.clientY })
          const colorIndex = Math.floor((e.clientX / window.innerWidth) * colors.length)
          setCursorColor(colors[colorIndex])
          timeoutId = null
        }, 16) // ~60fps limit
      }
    })(),
    [colors],
  )

  const handleClick = useCallback(
    (e: MouseEvent) => {
      setClicked(true)
      setTimeout(() => setClicked(false), 200) // Reduced click duration

      if (ripples.length >= 3) return

      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        size: 0,
        opacity: 0.6, // Reduced opacity
        id: rippleId,
      }

      setRipples((prev) => [...prev, newRipple])
      setRippleId((prev) => prev + 1)

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 800) // Reduced animation duration
    },
    [rippleId, ripples.length],
  )

  useEffect(() => {
    window.addEventListener("mousemove", throttledUpdatePosition)
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", throttledUpdatePosition)
      window.removeEventListener("click", handleClick)
    }
  }, [throttledUpdatePosition, handleClick])

  useEffect(() => {
    if (ripples.length === 0) return

    const interval = setInterval(() => {
      setRipples((prev) =>
        prev.map((ripple) => ({
          ...ripple,
          size: ripple.size + 8, // Reduced growth rate
          opacity: ripple.opacity - 0.04, // Faster fade
        })),
      )
    }, 32) // Reduced frequency to ~30fps

    return () => clearInterval(interval)
  }, [ripples])

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-75" // Faster transition
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: clicked ? "30px" : "16px", // Smaller cursor
          height: clicked ? "30px" : "16px",
          backgroundColor: cursorColor,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
          willChange: "transform", // Added hardware acceleration
        }}
      />

      {ripples.slice(0, 2).map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-40 rounded-full"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            backgroundColor: cursorColor,
            opacity: ripple.opacity,
            transform: "translate(-50%, -50%)",
            willChange: "transform", // Added hardware acceleration
          }}
        />
      ))}
    </>
  )
}
