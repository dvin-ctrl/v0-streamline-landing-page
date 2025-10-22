"use client"

import Image from "next/image"

const techStackLogos = [
  { name: "HubSpot", src: "/images/hubspot-logo-new.png" },
  { name: "ZoomInfo", src: "/images/zoominfo-logo.png" },
  { name: "Clay", src: "/images/clay-logo.png" },
  { name: "ChatGPT", src: "/images/chatgpt-logo.png" },
  { name: "LeadMagic", src: "/images/leadmagic-logo.png" },
  { name: "Apollo", src: "/images/apollo-logo.png" },
  { name: "HeyReach", src: "/images/heyreach-logo.png" },
  { name: "Apify", src: "/images/apify-logo.png" },
  { name: "Instantly", src: "/images/instantly-logo.png" },
  { name: "RB2B", src: "/images/rb2b-logo.png" },
  { name: "Salesforce", src: "/images/salesforce-logo.png" },
  { name: "Claude", src: "/images/claude-logo.png" },
]

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 bg-gradient-to-b from-black to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-blue-900/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          {/* Small badge */}
          <div className="inline-block mb-6">
            <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-600/30">
              Tech Stack
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6">
            The Best Tech Stack for the Best Results
          </h2>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {techStackLogos.map((logo, index) => (
            <div key={logo.name} className="group hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              <div className="bg-white border border-gray-300 rounded-2xl p-8 hover:border-gray-400 hover:shadow-lg transition-all duration-300 h-48 flex items-center justify-center group-hover:shadow-2xl">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  width={240}
                  height={120}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
