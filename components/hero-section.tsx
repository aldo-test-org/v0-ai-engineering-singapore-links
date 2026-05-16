"use client"

import { motion } from "framer-motion"
import { VercelLogomark } from "./vercel-logo"

const ease = [0.22, 1, 0.36, 1]

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden px-6 pb-20 pt-28 text-center md:pb-24 md:pt-36">
      {/* Grid background */}
      <div className="grid-bg pointer-events-none absolute inset-0" />

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-foreground/[0.03] blur-[120px]" />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease }}
        className="relative"
      >
        <VercelLogomark className="mb-8 h-10 w-10 text-foreground md:h-12 md:w-12" />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        className="relative max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        AI Engineering Singapore
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
        className="relative mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base"
      >
        Links and resources from Vercel to explore during and after the talk.
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative mt-14"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-8 w-px bg-border" />
          <div className="size-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
