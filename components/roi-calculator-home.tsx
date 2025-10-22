"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { DollarSign, TrendingUp, Target, Briefcase, Palette, Home, BarChart3 } from "lucide-react"

const businessTypes = [
  {
    id: "retail",
    name: "Retail",
    icon: <Briefcase className="w-6 h-6" />,
    multiplier: 3.2,
    description: "E-commerce & Physical Stores",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: <Home className="w-6 h-6" />,
    multiplier: 4.1,
    description: "Agents & Property Management",
  },
  {
    id: "artist",
    name: "Artist",
    icon: <Palette className="w-6 h-6" />,
    multiplier: 2.8,
    description: "Musicians & Content Creators",
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: <Target className="w-6 h-6" />,
    multiplier: 3.7,
    description: "Consultants & Service Providers",
  },
]

export default function ROICalculatorHome() {
  const [selectedBudget, setSelectedBudget] = useState(5000)
  const [selectedBusiness, setSelectedBusiness] = useState("retail")

  const selectedBusinessType = businessTypes.find((b) => b.id === selectedBusiness)
  const multiplier = selectedBusinessType?.multiplier || 3.2

  const calculateROI = (budget: number) => {
    const baseReturn = budget * multiplier
    const scaleFactor = budget / 10000
    return Math.round(baseReturn * (1 + scaleFactor * 0.3))
  }

  const calculateMonthlyRevenue = (budget: number) => {
    return Math.round(calculateROI(budget) / 12)
  }

  return (
    <section className="py-24 bg-black relative backdrop-blur-sm">
      
    </section>
  )
}
