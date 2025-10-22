"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Instagram, Youtube, Shield, CheckCircle, DollarSign } from "lucide-react"
import AnimatedButton from "./animated-button"
import Link from "next/link"

const services = [
  {
    title: "Paid Social",
    description:
      "Drive growth and engagement with data-driven paid social media ads, using targeted strategies to elevate your brand.",
    mockup: "social",
  },
  {
    title: "Google Ads",
    description:
      "Reach customers at the right moment with Google Ads, driving traffic and sales through targeted online ads.",
    mockup: "google-ads",
  },
  {
    title: "Email / SMS",
    description: "Reach customers with targeted email and SMS marketing that drives sales, growth, and loyalty.",
    mockup: "email",
  },
  {
    title: "SEO",
    description:
      "Enhance your search engine visibility with SEO services, including audits, keyword analysis, and optimization.",
    mockup: "seo",
  },
  {
    title: "Analytics",
    description:
      "Track performance and gain insights with comprehensive analytics and reporting solutions for data-driven decisions.",
    mockup: "analytics",
  },
  {
    title: "Web Development",
    description:
      "We create everything from simple to complex websites, with flexible plans and custom solutions tailored to your needs.",
    mockup: "web-dev",
    badges: [
      { icon: <Shield className="w-4 h-4" />, text: "SSL Secured" },
      { icon: <DollarSign className="w-4 h-4" />, text: "No Monthly Fees" },
      { icon: <CheckCircle className="w-4 h-4" />, text: "99.9% Uptime" },
    ],
  },
]

export default function InnovativeServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    null
  )
}
