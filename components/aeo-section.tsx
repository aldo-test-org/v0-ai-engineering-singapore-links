"use client"

import { FileSearch, Globe, BarChart3 } from "lucide-react"
import { ResourceCard } from "./resource-card"
import { SectionHeading } from "./section-heading"

const aeoResources = [
  {
    title: "Agent Readability Spec",
    description: "Make your pages readable by AI agents with the agent readability specification.",
    href: "https://vercel.com/kb/guide/agent-readability-spec",
    icon: <FileSearch className="size-4" />,
  },
  {
    title: "Agent-Friendly Pages",
    description: "Serve optimized content to AI agents using content negotiation techniques.",
    href: "https://vercel.com/blog/making-agent-friendly-pages-with-content-negotiation",
    icon: <Globe className="size-4" />,
  },
  {
    title: "AEO Tracking for Agents",
    description: "How Vercel built analytics and tracking for AI coding agents and their interactions.",
    href: "https://vercel.com/blog/how-we-built-aeo-tracking-for-coding-agents",
    icon: <BarChart3 className="size-4" />,
  },
]

export function AeoSection() {
  return (
    <section className="px-6 py-20 md:py-24" id="aeo">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="AEO"
          title="Agent Engine Optimization"
          description="Optimize your web presence for AI agents and autonomous browsing."
          badge="New"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {aeoResources.map((resource, i) => (
            <ResourceCard
              key={resource.title}
              title={resource.title}
              description={resource.description}
              href={resource.href}
              icon={resource.icon}
              delay={i * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
