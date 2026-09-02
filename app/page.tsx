import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { HowIBuild } from "@/components/sections/HowIBuild";
import { Capabilities } from "@/components/sections/Capabilities";
import { AboutJourney } from "@/components/sections/AboutJourney";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#fafafa] selection:bg-blue-500/30 selection:text-white">
      {/* Background Subtle Tech Grid Texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-40"
        aria-hidden="true"
      />

      {/* Top Ambient Glow */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-radial-gradient -z-10"
        aria-hidden="true"
      />

      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <SelectedWork />
        <HowIBuild />
        <Capabilities />
        <AboutJourney />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
