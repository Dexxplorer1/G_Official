import { Navbar } from "@/components/navbar"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "FAQ - Frequently Asked Questions | Garbaggio Junk Removal",
  description:
    "Get answers to common questions about our junk removal services in Southwest Florida. Learn about our service areas, equipment, and what we haul.",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function FAQPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <FAQSection />
      </div>
      <CTASection />
      <Footer />
    </main>
  )
}
