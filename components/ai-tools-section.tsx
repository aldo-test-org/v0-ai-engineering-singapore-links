"use client"

import { Bot, Cpu, MessageSquare, Blocks, Workflow, Sparkles, Terminal, BookOpen, Smartphone, Paintbrush, Globe2 } from "lucide-react"
import { ResourceCard } from "./resource-card"
import { SectionHeading } from "./section-heading"

const resources = [
  {
    title: "Vercel",
    description: "The frontend cloud. Build, scale, and secure a faster, personalized web.",
    href: "https://vercel.com",
    icon: <Globe2 className="size-4" />,
  },
  {
    title: "v0",
    description: "Chat with v0 to generate UI, write code, and build full-stack web apps.",
    href: "https://v0.dev",
    icon: <Sparkles className="size-4" />,
  },
  {
    title: "v0 Mobile",
    description: "Build and iterate on apps from your phone with the v0 mobile experience.",
    href: "https://v0.dev/mobile",
    icon: <Smartphone className="size-4" />,
  },
  {
    title: "v0 API Docs",
    description: "API reference for programmatically integrating v0 into your workflows.",
    href: "https://v0.dev/docs",
    icon: <BookOpen className="size-4" />,
  },
  {
    title: "AI Gateway",
    description: "Unified API for 200+ models from OpenAI, Anthropic, Google, and more.",
    href: "https://vercel.com/products/ai-gateway",
    icon: <Cpu className="size-4" />,
  },
  {
    title: "AI SDK",
    description: "Open-source TypeScript toolkit for building AI-powered applications.",
    href: "https://sdk.vercel.ai",
    icon: <Bot className="size-4" />,
  },
  {
    title: "Chat SDK",
    description: "Build chat bots across Slack, Teams, Google Chat, Discord, and more.",
    href: "https://chat-sdk.dev",
    icon: <MessageSquare className="size-4" />,
  },
  {
    title: "AI Elements",
    description: "Pre-built React components for polished AI chat interfaces.",
    href: "https://ai-elements.dev",
    icon: <Blocks className="size-4" />,
  },
  {
    title: "Workflow Dev Kit",
    description: "Durable, resumable workflows that survive restarts and retry on failure.",
    href: "https://useworkflow.dev",
    icon: <Workflow className="size-4" />,
  },
  {
    title: "Vercel Workflows",
    description: "Production-grade workflow orchestration built into the Vercel platform.",
    href: "https://vercel.com/products/workflow",
    icon: <Workflow className="size-4" />,
  },
  {
    title: "Skills.sh",
    description: "Shareable, reusable AI skills for v0 that encode domain knowledge.",
    href: "https://skills.sh",
    icon: <Terminal className="size-4" />,
  },
  {
    title: "shadcn Create",
    description: "Scaffold new projects with shadcn/ui components, themes, and configs.",
    href: "https://ui.shadcn.com/create",
    icon: <Paintbrush className="size-4" />,
  },
]

export function AiToolsSection() {
  return (
    <section className="px-6 py-20 md:py-24" id="resources">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Explore"
          title="Products & Resources"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((tool, i) => (
            <ResourceCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
              delay={i * 0.03}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
