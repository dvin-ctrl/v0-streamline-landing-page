import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Streamline - Transform Your Business Operations",
  description:
    "Streamline delivers innovative, high-performance software solutions that transform business operations and drive growth. Discover cutting-edge tools designed for the future of work.",
  keywords:
    "business software, operations management, digital transformation, productivity tools, enterprise solutions",
  authors: [{ name: "Streamline" }],
  creator: "Streamline",
  publisher: "Streamline",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://streamline.com",
    title: "Streamline - Transform Your Business Operations",
    description: "Innovative software solutions that transform business operations and drive growth.",
    siteName: "Streamline",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "Streamline Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Streamline - Transform Your Business Operations",
    description: "Innovative software solutions that transform business operations and drive growth.",
    images: ["/apple-touch-icon.png"],
    creator: "@streamline",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#ffffff",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}
