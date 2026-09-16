import { Benefit, CallAction, Footer, GenerateWebsite, HeroSection, Navbar, Pricing } from "@/components/landingPage"

export default function Page() {
  return (
    // Framed canvas: white rounded frame on the dot-grid backdrop, 16px margin.
    <div className="bg-dot-paper flex-1 p-2 md:p-4">
      <div className="overflow-clip rounded-2xl border border-line bg-card text-card-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <Benefit />
          <GenerateWebsite />
          <Pricing />
          <CallAction />
        </main>
        <Footer />
      </div>
    </div>
  )
}
