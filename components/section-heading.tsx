"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  badge?: string
}

export function SectionHeading({ label, title, description, badge }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10"
    >
      <div className="flex items-center gap-3">
        <span className="mb-2 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
        {badge && (
          <span className="mb-2 inline-flex rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {badge}
          </span>
        )}
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  )
}
