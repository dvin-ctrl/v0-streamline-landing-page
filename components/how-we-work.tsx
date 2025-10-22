"use client"

import { Magnet, Hammer, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Outbound Outreach",
    description:
      "We build scrapers and leverage AI to craft personalized outreach that feels 1:1 with the goal of booking meetings that actually convert into pipeline.",
    icon: <Rocket className="w-8 h-8" />,
    mockup: "discovery",
    gradient: "from-blue-500/20 to-blue-600/10",
  },
  {
    number: "02",
    title: "Inbound Outreach",
    description:
      "We qualify & reach out to prospects from every marketing channel, whether they come from paid advertising, webinars, or organic website traffic.",
    icon: <Magnet className="w-8 h-8" />,
    mockup: "development",
    gradient: "from-blue-500/20 to-blue-600/10",
  },
  {
    number: "03",
    title: "RevOps",
    description:
      "We keep your CRM clean and your data accurate. Which means, we track job changes, update contact records, validate emails, phone numbers so your team isn't reaching out to the wrong people.",
    icon: <Hammer className="w-8 h-8" />,
    mockup: "launch",
    gradient: "from-blue-500/20 to-blue-600/10",
  },
]

export default function HowWeWork() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Services that <span className="italic">grow</span> with you
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A simple, effective approach to building your brand with excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`bg-gradient-to-br ${step.gradient} border border-gray-800/50 rounded-3xl p-8 backdrop-blur-sm hover:border-gray-700/50 hover:-translate-y-2 transition-all duration-300 group`}
            >
              {/* Mockup Area */}
              <div className="aspect-video bg-gray-900 rounded-2xl mb-6 overflow-hidden relative border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                  {/* Discovery Mockup */}
                  {step.mockup === "discovery" && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-full max-w-[200px] space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-500 rounded"></div>
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="bg-gray-700 h-2 w-full rounded"></div>
                            <div className="bg-gray-700 h-2 w-3/4 rounded"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-700 h-12 rounded-lg"></div>
                          <div className="bg-gray-700 h-12 rounded-lg"></div>
                        </div>
                        <div className="bg-gray-700 h-8 w-full rounded"></div>
                      </div>
                    </div>
                  )}

                  {/* Development Mockup */}
                  {step.mockup === "development" && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-full max-w-[200px] space-y-3">
                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-gray-700 h-2 w-full rounded"></div>
                            <div className="bg-gray-700 h-2 w-2/3 rounded"></div>
                            <div className="bg-blue-500 h-2 w-1/2 rounded"></div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="bg-gray-700 h-8 flex-1 rounded"></div>
                          <div className="bg-blue-500 h-8 w-16 rounded"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Launch Mockup */}
                  {step.mockup === "launch" && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-full max-w-[200px] space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-400">CRM</div>
                          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <div className="text-xs text-gray-300">Company</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <div className="text-xs text-gray-300">Contact</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <div className="text-xs text-gray-300">Email Address</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <div className="text-xs text-gray-300">Enriching...</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-gray-600">{step.number}</div>
                  <div className="text-blue-400">{step.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
