import { Navbar } from "@/components/navbar"
import { EstimateForm } from "@/components/estimate-form"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Get Your Free Estimate | Garbaggio Junk Removal",
  description:
    "Get a free, accurate estimate for your junk removal needs. Upload photos and schedule your service with Garbaggio Junk Removal in Southwest Florida.",
}

export default function Estimate() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <EstimateForm />
      </div>
      <Footer />
    </main>
  )
}
