import { Navbar } from "@/components/navbar"
import { PhotoGallery } from "@/components/photo-gallery"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Photo Gallery - Garbaggio Junk Removal",
  description: "See our professional junk removal work throughout Lee, Collier, and Charlotte counties in Florida.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <PhotoGallery />
      </div>
      <CTASection />
      <Footer />
    </main>
  )
}
