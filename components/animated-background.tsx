"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.min(window.innerHeight * 2, document.documentElement.scrollHeight)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const orbs = [
      { x: 0, y: 0, radius: 300, color: "59, 130, 246", speed: 0.2, angle: 0, offsetY: 0 },
      { x: 0, y: 0, radius: 250, color: "147, 51, 234", speed: 0.15, angle: Math.PI, offsetY: 300 },
      { x: 0, y: 0, radius: 280, color: "34, 197, 94", speed: 0.18, angle: Math.PI / 2, offsetY: 600 },
    ]

    let animationId: number
    let time = 0
    let lastTime = 0

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < 32) {
        // Limit to ~30fps instead of 60fps
        animationId = requestAnimationFrame(animate)
        return
      }
      lastTime = currentTime

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.003 // Reduced animation speed

      orbs.forEach((orb) => {
        orb.angle += orb.speed * 0.008 // Reduced movement speed
        orb.x = canvas.width / 2 + Math.cos(orb.angle + time) * (canvas.width * 0.3)
        orb.y = orb.offsetY + canvas.height * 0.2 + Math.sin(orb.angle + time) * (canvas.height * 0.15)

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        gradient.addColorStop(0, `rgba(${orb.color}, 0.06)`) // Reduced opacity
        gradient.addColorStop(0.5, `rgba(${orb.color}, 0.03)`)
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "transparent",
        willChange: "transform", // Added hardware acceleration
      }}
    />
  )
}
