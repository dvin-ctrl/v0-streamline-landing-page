"use client"

import Image from "next/image"

export default function FounderStory() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What makes us different?</h2>
          <p className="text-xl text-gray-400 italic">We know what good looks like, we've been in the trenches...</p>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-gray-700/50 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Hi, I'm <span className="text-white font-semibold">Dvin Malekian</span>, founder of WarmLeads.io, and
                  as a former HubSpot BDR and Account Executive, I was ranked{" "}
                  <span className="text-blue-400 font-bold">#3 BDR in North America</span> out of 350+ representatives
                  in 2023, placing in the {/* Making "top 0.01%" bold and blue */}
                  <span className="text-blue-400 font-bold">top 0.01%</span> for meetings booked and pipeline generated.
                </p>
                <p>
                  That performance earned me a spot at HubSpot's exclusive{" "}
                  <span className="text-white">President's Club</span> - their most prestigious recognition for top
                  performers.
                </p>
                <p>
                  We've taken that experience and built a system that applies the same proven methodology and more to
                  help your business succeed.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-48 h-56 md:w-56 md:h-64 overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/dvin-malekian.png"
                  alt="Dvin Malekian, Founder of WarmLeads.io"
                  width={224}
                  height={256}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
