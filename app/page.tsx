import { HeroSection } from "@/components/hero-section"
import { AiToolsSection } from "@/components/ai-tools-section"
import { AeoSection } from "@/components/aeo-section"
import { OpensourceSection } from "@/components/opensource-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"
import { SectionDivider } from "@/components/section-divider"
import { NavBar } from "@/components/nav-bar"

export default function Page() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <SectionDivider />
      <AiToolsSection />
      <SectionDivider />
      <AeoSection />
      <SectionDivider />
      <OpensourceSection />
      <SectionDivider />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
