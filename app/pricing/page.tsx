import { Navbar } from "@/components/navbar"
import { PricingPage } from "@/components/pricing-page"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Pricing - Transparent Junk Removal Rates | Garbaggio",
  description:
    "View our transparent, competitive pricing for junk removal services in Southwest Florida. Volume-based pricing and flat-rate individual items.",
}

export default function Pricing() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <PricingPage />
      </div>
      <CTASection />
      <Footer />
    </main>
  )
}
