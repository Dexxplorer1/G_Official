import { Navbar } from "@/components/navbar"
import { ServicesPage } from "@/components/services-page"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Services - Cleanouts & Junk Removal | Garbaggio",
  description:
    "Comprehensive junk removal and cleanout services in Southwest Florida. From residential cleanouts to specialized item removal, we handle it all.",
}

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <ServicesPage />
      </div>
      <CTASection />
      <Footer />
    </main>
  )
}
