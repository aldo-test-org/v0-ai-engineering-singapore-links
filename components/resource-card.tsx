"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface ResourceCardProps {
  title: string
  description?: string
  href: string
  icon?: React.ReactNode
  delay?: number
  featured?: boolean
}

export function ResourceCard({
  title,
  description,
  href,
  icon,
  delay = 0,
  featured = false,
}: ResourceCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={`card-glow group relative flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:bg-secondary/50 ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
              {icon}
            </div>
          )}
          <span className="text-sm font-medium text-foreground">{title}</span>
        </div>
        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      {description && (
        <p className="text-xs leading-relaxed text-muted-foreground pl-12">
          {description}
        </p>
      )}
    </motion.a>
  )
}
