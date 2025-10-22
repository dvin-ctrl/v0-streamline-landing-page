"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Linkedin, Youtube, Mail, MapPin } from "lucide-react"

export default function AnimatedFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
    setEmail("")
  }

  return (
    <footer className="relative bg-black border-t border-gray-800/50">
      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-gray-800/50"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="group flex justify-center lg:justify-start">
              <Image
                src="/images/warmleads-logo.png"
                alt="WarmLeads.io"
                width={400}
                height={133}
                className="h-24 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Empowering B2B professionals and entrepreneurs to build pipeline and find message-market-fit
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/warmleads-io/", label: "LinkedIn" },
                { icon: Youtube, href: "https://youtube.com/@dvinb2b?si=KQ9HCAzoVktin6xy", label: "YouTube" },
              ].map(({ icon: Icon, href, label }, index) => (
                <div key={label}>
                  <Link href={href} className="group relative" aria-label={label}>
                    <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-800 group-hover:border-gray-700 transition-colors">
                      <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Links and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
            {/* Quick Links */}

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400 justify-center sm:justify-start">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span>dvin@warmleads.io</span>
                </div>

                <div className="flex items-center space-x-3 text-gray-400 justify-center sm:justify-start">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} WarmLeads.io. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-500">Privacy Policy</span>
              <span className="text-gray-500">Terms of Service</span>
              <span className="text-gray-500">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
