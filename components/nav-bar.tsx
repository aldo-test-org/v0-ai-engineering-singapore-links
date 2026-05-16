"use client"

import { motion } from "framer-motion"
import { VercelLogomark } from "./vercel-logo"

const navLinks = [
  { label: "Resources", href: "#resources" },
  { label: "AEO", href: "#aeo" },
  { label: "Open Source", href: "#opensource" },
  { label: "Contact", href: "#contact" },
]

export function NavBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-foreground transition-opacity hover:opacity-80"
          aria-label="Vercel"
        >
          <VercelLogomark className="h-5 w-5" />
        </a>

        {/* Navigation links */}
        <nav className="hidden items-center gap-1 rounded-full border border-border bg-background/80 px-1.5 py-1 backdrop-blur-xl md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Support CTA */}
        <a
          href="https://vercel.com/help"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-foreground transition-colors duration-200 hover:bg-muted"
        >
          Support
        </a>
      </div>
    </motion.header>
  )
}
