import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Phone } from "lucide-react"
import { BeforeAfterSlider } from "./before-after-slider"

const beforeAfterImages = [
  {
    before: "/images/storage-before-new.jpg",
    after: "/images/storage-after-new.jpg",
    title: "Storage Unit Transformation",
    description: "Complete storage unit cleanout - from cluttered chaos to organized, usable space in one service.",
    type: "before-after" as const,
    beforePosition: "center center",
    afterPosition: "center center",
  },
  {
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
    title: "Storage Unit Cleanout",
    description: "Complete storage unit transformation - from cluttered chaos to clean, usable space.",
    type: "before-after" as const,
    beforePosition: "center center",
    afterPosition: "center center",
  },
  {
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
    title: "Garage Cleanout",
    description: "Professional garage cleanout - transforming cluttered spaces into organized, functional areas.",
    type: "before-after" as const,
    beforePosition: "center center",
    afterPosition: "center center",
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
    <section className="relative bg-garbagio-background py-12 md:py-16 lg:py-24 overflow-x-hidden pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-garbagio-gold leading-tight">
              <div className="flex flex-col space-y-2">
                <span className="flex items-center justify-center lg:justify-start font-black">
                  <span className="text-garbagio-accent font-black text-[1.2em] mr-3">•</span>
                  Cleanouts
                </span>
                <span className="flex items-center justify-center lg:justify-start font-black">
                  <span className="text-garbagio-accent font-black text-[1.2em] mr-3">•</span>
                  Hauling
                </span>
                <span className="flex items-center justify-center lg:justify-start font-black">
                  <span className="text-garbagio-accent font-black text-[1.2em] mr-3">•</span>
                  Junk Removal
                </span>
                <span className="text-garbagio-accent font-black mt-4" style={{ fontSize: "1.1em" }}>
                  Done Right
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start my-6">
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
                className="bg-garbagio-accent hover:bg-garbagio-accent/90 text-white group relative transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="tel:2394861170" className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5 animate-pulse" />
                  <span>(239) 486-1170</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-garbagio-gold text-garbagio-gold hover:border-garbagio-accent hover:text-garbagio-accent hover:bg-transparent bg-transparent transition-all duration-300"
                asChild
              >
                <Link href="/services">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[650px] mt-6 lg:mt-0 lg:ml-8">
            <BeforeAfterSlider images={beforeAfterImages} />
          </div>
        </div>
      </div>
    </section>
  )
}
