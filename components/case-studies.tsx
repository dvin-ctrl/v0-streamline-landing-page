"use client"

import { Play } from "lucide-react"

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-slate-950/50 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Case Studies</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">What some of our customers are saying</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Ben DeLisle Testimonial */}
          <div className="hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm hover:shadow-2xl hover:border-gray-700 transition-all duration-300">
              {/* Video Section */}
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden relative border border-gray-700 shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300">
                <iframe
                  src="https://drive.google.com/file/d/1Xc9WHGtt3Z__x2zGWwyyJitnhFubOtwz/preview"
                  className="w-full h-full"
                  allow="autoplay"
                  title="Customer Testimonial Video"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-gray-800 ml-1" />
                  </div>
                </div>
              </div>

              {/* Client Info and Logo Section */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    Ben DeLisle
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    VP of Strategic Insights
                  </p>
                </div>

                <div className="w-28 h-10 flex items-center justify-center hover:scale-105 transition-transform duration-200">
                  <img
                    src="/images/profound-networks-logo.png"
                    alt="Profound Networks"
                    className="max-w-full max-h-full object-contain group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm hover:shadow-2xl hover:border-gray-700 transition-all duration-300">
              {/* Video Section */}
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden relative border border-gray-700 shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300">
                <iframe
                  src="https://drive.google.com/file/d/1ko6YrgWwETVudTaU3WXnPVpVr05YhZ6K/preview"
                  className="w-full h-full"
                  allow="autoplay"
                  title="Chad Vanags Testimonial Video"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-gray-800 ml-1" />
                  </div>
                </div>
              </div>

              {/* Client Info and Logo Section */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    Chad Vanags
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Founder</p>
                </div>

                <div className="w-36 h-14 flex items-center justify-center hover:scale-105 transition-transform duration-200">
                  <img
                    src="/images/uncharted-spirits-logo.png"
                    alt="Uncharted Spirits"
                    className="max-w-full max-h-full object-contain group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
