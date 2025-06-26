import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 bg-garbagio-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Your Space Back!</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Contact us today for a free, no-obligation estimate and experience the Garbaggio difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-garbagio-accent hover:bg-white/90" asChild>
              <Link href="/estimate">Get A Free Estimate</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-garbagio-gold text-garbagio-gold hover:bg-garbagio-gold/20 hover:text-white group relative"
              asChild
            >
              <a href="tel:2392306200">
                <Phone className="mr-2 h-4 w-4" />
                <span className="group-hover:hidden">Call Now</span>
                <span className="hidden group-hover:inline">(239) 230-6200</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
