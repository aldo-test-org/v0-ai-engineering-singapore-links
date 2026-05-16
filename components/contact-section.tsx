"use client"

import { motion } from "framer-motion"
import { LifeBuoy, Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const ease = [0.22, 1, 0.36, 1]

export function ContactSection() {
  return (
    <section className="px-6 py-20 md:py-24" id="contact">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Support Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="card-glow group rounded-xl border border-border bg-card p-8 md:p-10"
          >
            <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-secondary">
              <LifeBuoy className="size-5 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Need Help?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {"Get support from the Vercel team. We're here to help you build, deploy, and scale."}
            </p>
            <a
              href="https://vercel.com/help"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_20px_oklch(0.95_0_0/0.15)]"
            >
              <LifeBuoy className="size-3.5" />
              Open a Ticket
              <ArrowUpRight className="size-3 opacity-50" />
            </a>
          </motion.div>

          {/* Contact Aldo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="card-glow rounded-xl border border-border bg-card p-8 md:p-10"
          >
            <div className="mb-5 size-12 overflow-hidden rounded-xl">
              <Image
                src="/images/aldo-avatar.png"
                alt="Aldo Schellenberg"
                width={48}
                height={48}
                className="size-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Contact Aldo</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Have questions? Reach out directly.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <ContactPill href="mailto:aldo@vercel.com" label="Email" icon={<Mail className="size-3.5" />} />
              <ContactPill
                href="https://linkedin.com/in/aldosch"
                label="LinkedIn"
                icon={<Linkedin className="size-3.5" />}
              />
              <ContactPill
                href="https://github.com/aldosch"
                label="GitHub"
                icon={<Github className="size-3.5" />}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactPill({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="group/pill inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-muted-foreground/40 hover:bg-secondary"
    >
      {icon}
      {label}
      <ArrowUpRight className="size-3 text-muted-foreground opacity-0 transition-all duration-200 group-hover/pill:opacity-100 group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5" />
    </a>
  )
}
