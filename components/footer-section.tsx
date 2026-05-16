"use client"

import { motion } from "framer-motion"
import { VercelLogomark } from "./vercel-logo"

const footerLinks = [
  { label: "Vercel", href: "https://vercel.com" },
  { label: "v0", href: "https://v0.dev" },
  { label: "Next.js", href: "https://nextjs.org" },
  { label: "Support", href: "https://vercel.com/help" },
]

export function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-border px-6 py-8"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 text-muted-foreground">
          <VercelLogomark className="h-3.5 w-3.5" />
          <span className="text-xs">Powered by Vercel</span>
        </div>
        <nav className="flex items-center gap-6" aria-label="Footer">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.footer>
  )
}
