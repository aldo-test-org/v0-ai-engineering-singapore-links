"use client"

import { motion } from "framer-motion"
import { Github, FlaskConical, ArrowUpRight } from "lucide-react"

const ease = [0.22, 1, 0.36, 1]

const repos = [
  {
    title: "vercel",
    description: "Official open-source projects including Next.js, Turborepo, SWR, and more.",
    href: "https://github.com/vercel",
    icon: <Github className="size-4" />,
  },
  {
    title: "vercel-labs",
    description: "Experimental projects and bleeding-edge prototypes, sorted by popularity.",
    href: "https://github.com/vercel-labs?q=&type=all&language=&sort=stargazers",
    icon: <FlaskConical className="size-4" />,
  },
]

export function OpensourceSection() {
  return (
    <section className="px-6 py-20 md:py-24" id="opensource">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-10"
        >
          <span className="mb-2 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Open Source
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Browse Our Repositories
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Explore the open-source projects and experiments that power the Vercel ecosystem.
          </p>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.title}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease }}
              whileHover={{ y: -3 }}
              className="card-glow group relative flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:bg-secondary/50"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                    {repo.icon}
                  </div>
                  <span className="font-mono text-sm font-medium text-foreground">{repo.title}</span>
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="pl-12 text-xs leading-relaxed text-muted-foreground">
                {repo.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
