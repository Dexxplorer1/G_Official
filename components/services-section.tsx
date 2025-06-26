import { Truck, Recycle, Home, Building, Construction, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: <Home className="h-10 w-10" />,
    title: "Residential Junk Removal",
    description: "Clear out your home, garage, or yard with our comprehensive residential junk removal services.",
  },
  {
    icon: <Building className="h-10 w-10" />,
    title: "Commercial Cleanouts",
    description: "Office relocations, warehouse cleanouts, and retail junk removal for businesses of all sizes.",
  },
  {
    icon: <Construction className="h-10 w-10" />,
    title: "Construction Debris",
    description: "Fast removal of construction and renovation debris to keep your project on schedule.",
  },
  {
    icon: <Recycle className="h-10 w-10" />,
    title: "Eco-Friendly Disposal",
    description: "We recycle and donate whenever possible to minimize environmental impact.",
  },
  {
    icon: <Truck className="h-10 w-10" />,
    title: "Appliance Removal",
    description: "Safe removal and proper disposal of refrigerators, washers, dryers, and other appliances.",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Same-Day Service",
    description: "Urgent junk removal needs? We offer same-day service when available.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-garbagio-light to-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-garbagio-background mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From single items to complete property cleanouts, we handle all your junk removal needs with professionalism
            and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all hover:border-garbagio-accent/30 group"
            >
              <div className="text-garbagio-accent mb-5 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-garbagio-background mb-3 group-hover:text-garbagio-accent transition-colors">
                {service.title}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mb-4"></div>
              <p className="text-base md:text-lg text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-garbagio-accent to-garbagio-gold hover:from-garbagio-gold hover:to-garbagio-accent text-white text-lg px-8 py-6 h-auto"
            asChild
          >
            <Link href="/estimate">Get A Free Estimate</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
