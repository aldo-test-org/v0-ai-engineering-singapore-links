"use client"

import { motion } from "framer-motion"

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center px-6">
      <motion.div
        className="h-px w-full max-w-5xl bg-border"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
