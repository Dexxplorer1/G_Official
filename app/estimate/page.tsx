import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EstimateForm } from "@/components/estimate-form"

export const metadata = {
  title: "Get a Free Estimate | Garbaggio Junk Removal",
  description: "Request your free junk removal estimate from Garbaggio. Fast, friendly, and local to Southwest Florida.",
  alternates: {
    canonical: "https://www.garbaggioservices.com/estimate",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function EstimatePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        {/* Header section */}
        <section className="py-16 bg-gradient-to-b from-garbagio-light to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-garbagio-background mb-4">
                Estimate Form
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fill out the form below and let Garbaggio take it from there. No pressure, just a straightforward quote.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <EstimateForm />
      </div>

      <Footer />
    </main>
  );
}
