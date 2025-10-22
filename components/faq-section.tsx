"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Why should I outsource my outreach?",
    answer:
      "It depends on your needs; both approaches have merits. Hiring in house can be expensive, not to mention that you have to train and onboard them which can take a ton of time.",
  },
  {
    question: "My Email Campaigns Get Low Reply Rates. Can You Help me?",
    answer:
      "Yes! Our system improves reply rates by 2.4x on average through targeted leads, optimized infrastructure, and high-converting copy.",
  },
  {
    question: "Why Should I Choose Your Agency And Not An AI SDR Company That Does Everything For Me?",
    answer:
      "AI SDR companies may look appealing, but they can't compete with us in lead listing, copywriting, and infrastructure setup—the pillars of a successful campaign.",
  },
  {
    question: "I've never done outbound before, how do I know this is for me?",
    answer:
      'This is a great place to start because we believe in finding "Message-Market-Fit" through trial and error, we\'re here to work with you strategically!',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-300">FAQ</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl backdrop-blur-sm overflow-hidden hover:border-gray-700 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div
                  className={`flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
