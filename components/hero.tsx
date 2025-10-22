"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import TypingText from "./typing-text"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-12 pb-16 overflow-hidden bg-slate-900">
      {/* Animated blue background with floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-indigo-900/80 animate-pulse"
          style={{ animationDuration: "4s" }}
        />

        {/* Floating animated shapes */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "6s", animationDelay: "0s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-400/25 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />

        {/* Trusted companies section blended with background */}
        <div className="absolute bottom-8 left-0 w-full">
          <div className="text-center mb-2">
            <h3 className="text-sm font-semibold text-white">Trusted by...</h3>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-seamless items-center" style={{ animationDuration: "30s" }}>
              {/* First set of logos */}
              <div className="flex flex-shrink-0">
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/profound-networks.png"
                    alt="Profound Networks"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/dk-kim-foundation.png"
                    alt="D.K. Kim Foundation"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/uncharted-spirits.png"
                    alt="Uncharted Spirits"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/ab-analytics.png"
                    alt="AB Analytics"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/company-5.png"
                    alt="Fill my Funnel"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Second set - exact duplicate for seamless loop */}
              <div className="flex flex-shrink-0">
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/profound-networks.png"
                    alt="Profound Networks"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/dk-kim-foundation.png"
                    alt="D.K. Kim Foundation"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/uncharted-spirits.png"
                    alt="Uncharted Spirits"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/ab-analytics.png"
                    alt="AB Analytics"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/company-5.png"
                    alt="Fill my Funnel"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Third set - additional duplicate to fill blank space */}
              <div className="flex flex-shrink-0">
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/profound-networks.png"
                    alt="Profound Networks"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/dk-kim-foundation.png"
                    alt="D.K. Kim Foundation"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/uncharted-spirits.png"
                    alt="Uncharted Spirits"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/ab-analytics.png"
                    alt="AB Analytics"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/company-5.png"
                    alt="Fill my Funnel"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Fourth set - extra duplicate to ensure no gaps */}
              <div className="flex flex-shrink-0">
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/profound-networks.png"
                    alt="Profound Networks"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/dk-kim-foundation.png"
                    alt="D.K. Kim Foundation"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/uncharted-spirits.png"
                    alt="Uncharted Spirits"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/ab-analytics.png"
                    alt="AB Analytics"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-48 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/company-5.png"
                    alt="Fill my Funnel"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/30 rounded-full text-sm text-white font-medium backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span>Full-Service Outbound</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                <span className="block text-white mb-2">FULL-SERVICE </span>
                <span className="block text-white mb-2">OUTBOUND FOR </span>
                <span className="block mb-2">
                  <TypingText
                    texts={["B2B Businesses", "Founders", "GTM teams"]}
                    className={cn(
                      "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold",
                      pacifico.className,
                    )}
                    typingSpeed={150}
                    pauseDuration={2500}
                    deletingSpeed={75}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              >
                We use 105+ data sources + AI to flood you with qualified leads so you can focus on{" "}
                <span className="font-bold">closing deals</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-1"
              >
                <a
                  href="https://calendly.com/dvin-warmleads/schedule-some-time-to-chat?month=2025-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
