import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Phone } from "lucide-react"
import { BeforeAfterSlider } from "./before-after-slider"

const beforeAfterImages = [
  {
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
    title: "Storage Unit Cleanout",
    description: "Complete storage unit transformation - from cluttered chaos to clean, usable space.",
    type: "before-after" as const,
    beforePosition: "center center",
    afterPosition: "center center", // Centered to show the interior of the unit clearly
  },
  {
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
    title: "Garage Cleanout",
    description: "Professional garage cleanout - transforming cluttered spaces into organized, functional areas.",
    type: "before-after" as const,
    beforePosition: "center center", // Positioned to show the same garage angle
    afterPosition: "center center", // Matching position to show it's the same location
  },
  {
    single: "/images/trailer-packed.jpg",
    title: "Efficient Loading",
    description: "The first layer down in preparation for the top layer of load.",
    type: "single" as const,
    singlePosition: "center center",
  },
  {
    single: "/images/dump-site-1.jpg",
    title: "Proper Disposal",
    description: "Professional disposal at licensed facilities - we handle all the logistics so you don't have to.",
    type: "single" as const,
    singlePosition: "center center",
  },
  {
    single: "/images/dump-site-2.jpg",
    title: "Eco-Friendly Process",
    description: "We will take as many full trips as needed to get your space back.",
    type: "single" as const,
    singlePosition: "center center",
  },
]

export function HeroSection() {
  return (
    <section className="relative bg-garbagio-background py-12 md:py-16 lg:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-garbagio-gold">
              Cleanouts, Hauling, and Junk Removal Done Right
              <div className="flex items-center justify-center lg:justify-start my-4">
                <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-garbagio-accent to-garbagio-gold max-w-xs"></div>
                <div className="mx-4">
                  <div className="w-3 h-3 bg-garbagio-accent rounded-full"></div>
                </div>
                <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-garbagio-gold to-garbagio-accent max-w-xs"></div>
              </div>
              <span className="text-garbagio-accent text-2xl md:text-3xl lg:text-4xl block mt-2">
                Serving all of Southwest Florida
              </span>
            </h1>
            <p className="text-lg md:text-xl text-garbagio-light/90">
              We take the hassle out of junk removal. From old furniture to construction debris, we handle it all so you
              don't have to lift a finger.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle className="h-5 w-5 text-garbagio-accent" />
                <span className="text-garbagio-light">Same-day service available</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle className="h-5 w-5 text-garbagio-accent" />
                <span className="text-garbagio-light">Eco-friendly disposal</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle className="h-5 w-5 text-garbagio-accent" />
                <span className="text-garbagio-light">Free estimates</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-garbagio-accent hover:bg-garbagio-accent/90 text-white group relative transition-all duration-300"
                asChild
              >
                <a href="tel:2392306200" className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5 animate-pulse" />
                  <span className="group-hover:hidden">Call Now</span>
                  <span className="hidden group-hover:inline font-bold">(239) 230-6200</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-garbagio-gold text-garbagio-gold hover:bg-garbagio-gold/10"
                asChild
              >
                <Link href="/services">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] mt-6 lg:mt-0">
            <BeforeAfterSlider images={beforeAfterImages} />
          </div>
        </div>
      </div>
    </section>
  )
}
