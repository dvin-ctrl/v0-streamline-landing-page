import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import HowWeWork from "@/components/how-we-work"
import FounderStory from "@/components/founder-story"
import InnovativeServices from "@/components/innovative-services"
import ProcessSection from "@/components/process-section"
import ROICalculatorHome from "@/components/roi-calculator-home"
import AnimatedFooter from "@/components/animated-footer"
import CaseStudies from "@/components/case-studies"
import FAQSection from "@/components/faq-section"
import TechStackSection from "@/components/tech-stack-section"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowWeWork />
        <FounderStory />
        <InnovativeServices />
        <ProcessSection />
        <TechStackSection />
        <CaseStudies />
        <ROICalculatorHome />
        <FAQSection />
        <AnimatedFooter />
      </div>
    </div>
  )
}
