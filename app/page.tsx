import { Navbar } from "./components/shared/navbar";
import { HeroSection } from "./components/sections/hero-section";
import { AboutSection } from "./components/sections/about-section";
import { ResumeSection } from "./components/sections/resume-section";
import { PortfolioSection } from "./components/sections/portfolio-section";
import { ContactSection } from "./components/sections/contact-section";
import { Footer } from "./components/shared/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
