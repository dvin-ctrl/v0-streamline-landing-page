"use client"

import { CheckCircle, Database, Target, Zap, Settings } from "lucide-react"

const processSteps = [
  {
    icon: Zap,
    title: "Create systems that allow you to sell, not prepare to sell",
    description:
      "We build systems that help your sales team work more efficiently, freeing them up to focus on actually closing sales. No more spending time on research, writing copy, or juggling multiple different platforms and tools",
  },
  {
    icon: Database,
    title: "Deeply researched enrichment beyond conventional data providers",
    description:
      "Whatever information you need to locate, we will help you gather it efficiently and at large volumes. We build specialized AI systems that can extract data from messy, unorganized sources with precision",
  },
  {
    icon: CheckCircle,
    title: "Ensure your data is actually usable",
    description:
      "CRMs are useless if the data in them is stale or messy. we help clean, enrich and normalize data to make your CRM a true source of truth again.",
  },
  {
    icon: Target,
    title: "Make inbound leads actionable before they fall off the vine",
    description:
      "We will aggregate leads from your marketing campaigns, score them on just about any criteria, and then reach out to them",
  },
  {
    icon: Settings,
    title: "Take full advantage of the new GTM tool stack",
    description:
      "Tools like Clay, HubSpot, SalesForce, are powerful and complex. We spark new ideas on how to use them effectively, while integrating the existing stack you've worked so hard to build.",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-indigo-900/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="italic">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A systematic approach to transforming your sales operations and maximizing revenue potential.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-blue-600 h-full hidden lg:block" />

          {/* Timeline steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`flex items-center ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}>
                  {/* Process box */}
                  <div
                    className={`relative bg-slate-900/80 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/50 hover:scale-105 hover:shadow-2xl transition-all duration-300 max-w-lg w-full lg:w-auto ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"} shadow-2xl`}
                  >
                    {/* Icon and number */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg relative">
                        <step.icon className="w-8 h-8 text-white" />
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Connecting line */}
                    <div
                      className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-8 h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-blue-600 to-transparent -right-8" : "from-transparent to-blue-600 -left-8"}`}
                    />
                  </div>
                </div>

                {/* Timeline dots */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-950 z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20"></div>
      </div>
    </section>
  )
}
