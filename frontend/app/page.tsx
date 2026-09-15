import {
  Benefit,
  CallAction,
  Footer,
  GenerateWebsite,
  HeroSection,
  Navbar,
  Pricing,
  Testimonials,
} from "@/components/landingPage"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Benefit />
        <GenerateWebsite />
        <Pricing />
        <Testimonials />
        <CallAction />
      </main>
      <Footer />
    </>
  )
}
