import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ShareCTA } from "@/components/share-cta"

export const metadata = {
  title: "Garbaggio Junk Removal – Junk Gone. Job Done.",
  description: "Southwest Florida's fast, reliable junk removal service. Book online or get a free estimate today.",
  alternates: {
    canonical: "https://www.garbaggioservices.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <ShareCTA variant="floating" />
      <Footer />
    </main>
  );
}
