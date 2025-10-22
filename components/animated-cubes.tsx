"use client"

import { useEffect, useRef } from "react"

export default function AnimatedCubes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const cubes = Array.from({ length: 4 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 30 + Math.random() * 50, // Smaller cubes
      rotationX: Math.random() * 360,
      rotationY: Math.random() * 360,
      rotationZ: Math.random() * 360,
      speedX: (Math.random() - 0.5) * 0.3, // Reduced speed
      speedY: (Math.random() - 0.5) * 0.3,
      rotSpeedX: (Math.random() - 0.5) * 1,
      rotSpeedY: (Math.random() - 0.5) * 1,
      rotSpeedZ: (Math.random() - 0.5) * 1,
      opacity: 0.08 + Math.random() * 0.12, // Reduced opacity
    }))

    let animationId: number
    let lastTime = 0

    const drawCube = (cube: any) => {
      ctx.save()
      ctx.translate(cube.x, cube.y)

      const size = cube.size
      const perspective = Math.cos((cube.rotationX * Math.PI) / 180) * 0.5 + 0.5

      ctx.fillStyle = `rgba(100, 116, 139, ${cube.opacity * perspective})`
      ctx.fillRect(-size / 2, -size / 2, size, size)

      ctx.restore()
    }

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < 50) {
        // Limit to ~20fps
        animationId = requestAnimationFrame(animate)
        return
      }
      lastTime = currentTime

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      cubes.forEach((cube) => {
        cube.x += cube.speedX
        cube.y += cube.speedY
        cube.rotationX += cube.rotSpeedX

        if (cube.x > canvas.width + cube.size) cube.x = -cube.size
        if (cube.x < -cube.size) cube.x = canvas.width + cube.size
        if (cube.y > canvas.height + cube.size) cube.y = -cube.size
        if (cube.y < -cube.size) cube.y = canvas.height + cube.size

        drawCube(cube)
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
