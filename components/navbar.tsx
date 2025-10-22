"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import AnimatedButton from "./animated-button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <motion.nav
        className="relative bg-gray-900/60 backdrop-blur-md border rounded-2xl shadow-lg overflow-hidden"
        animate={{
          borderColor: [
            "rgba(59, 130, 246, 0.3)",
            "rgba(147, 51, 234, 0.3)",
            "rgba(236, 72, 153, 0.3)",
            "rgba(34, 197, 94, 0.3)",
            "rgba(59, 130, 246, 0.3)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.2)",
              "0 0 20px rgba(147, 51, 234, 0.2)",
              "0 0 20px rgba(236, 72, 153, 0.2)",
              "0 0 20px rgba(34, 197, 94, 0.2)",
              "0 0 20px rgba(59, 130, 246, 0.2)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <div className="relative z-10 px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/warmleads-logo.png"
                  alt="WarmLeads.io"
                  width={334}
                  height={111}
                  className="w-auto h-32"
                />
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#process" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Process
                </a>
                <a href="#tech-stack" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Tech Stack
                </a>
                <a href="#case-studies" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Case Studies
                </a>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  FAQ
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <AnimatedButton size="sm" className="bg-white text-black hover:bg-gray-100">
                Get Started
              </AnimatedButton>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5 text-gray-300" /> : <Menu className="h-5 w-5 text-gray-300" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-md rounded-b-2xl">
            <div className="px-6 py-4 space-y-3">
              <a href="#process" className="block text-gray-300 hover:text-white transition-colors py-2">
                Process
              </a>
              <a href="#tech-stack" className="block text-gray-300 hover:text-white transition-colors py-2">
                Tech Stack
              </a>
              <a href="#case-studies" className="block text-gray-300 hover:text-white transition-colors py-2">
                Case Studies
              </a>
              <a href="#faq" className="block text-gray-300 hover:text-white transition-colors py-2">
                FAQ
              </a>
              <div className="pt-3 border-t border-gray-700">
                <AnimatedButton className="w-full bg-white text-black hover:bg-gray-100">Get Started</AnimatedButton>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </header>
  )
}
