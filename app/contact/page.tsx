import { Navbar } from "@/components/navbar"
import { ContactPage } from "@/components/contact-page-updated"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us - Get Your Free Estimate | Garbaggio Junk Removal",
  description:
    "Contact Garbaggio Junk Removal for fast, friendly service in Southwest Florida. Call (239) 230-6200 or fill out our form for a free estimate.",
}

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <ContactPage />
      </div>
      <Footer />
    </main>
  )
}
