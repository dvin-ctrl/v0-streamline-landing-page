"use client"

import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 8 * position} -${189 + i * 10}C-${
      380 - i * 8 * position
    } -${189 + i * 10} -${312 - i * 8 * position} ${216 - i * 10} ${
      152 - i * 8 * position
    } ${343 - i * 10}C${616 - i * 8 * position} ${470 - i * 10} ${
      684 - i * 8 * position
    } ${875 - i * 10} ${684 - i * 8 * position} ${875 - i * 10}`,
    width: 0.6 + i * 0.02, // Thinner strokes
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-gray-600"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        style={{ willChange: "transform" }} // Added hardware acceleration
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.08 + path.id * 0.006} // Reduced opacity
            initial={{ pathLength: 0.5, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3], // Reduced opacity range
            }}
            transition={{
              duration: 30 + Math.random() * 10, // Slower animations
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function BackgroundStripes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0" style={{ height: "400vh" }}>
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
    </div>
  )
}
