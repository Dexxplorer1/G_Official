"use client"

import type React from "react"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  Home,
  Building,
  Heart,
  Archive,
  Sofa,
  Zap,
  Monitor,
  Hammer,
  Leaf,
  Waves,
  Music,
  CircleDot,
  ChefHat,
  Trash2,
  Truck,
  CloudRain,
  Shield,
  TreePine,
  Droplets,
  HardHat,
  Dumbbell,
  Flame,
  Cog,
  Wind,
  Recycle,
  SignpostBig,
  Package,
  Circle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceItem {
  title: string
  description: string
  icon: React.ReactNode
}

const cleanoutServices: ServiceItem[] = [
  {
    title: "Residential Cleanouts",
    description:
      "Garbaggio Junk Removal offers comprehensive cleanout services for homes, including garages, attics, basements, and entire properties. Whether you're decluttering, moving, or handling an estate, our team ensures a thorough and stress-free experience.",
    icon: <Home className="h-8 w-8" />,
  },
  {
    title: "Commercial Cleanouts",
    description:
      "We provide efficient cleanout services for commercial spaces such as offices, retail stores, and warehouses. Our team works swiftly to minimize downtime and help you maintain a clutter-free environment.",
    icon: <Building className="h-8 w-8" />,
  },
  {
    title: "Estate Cleanouts",
    description:
      "Handling an estate cleanout can be overwhelming. Garbaggio Junk Removal approaches these situations with sensitivity and professionalism, assisting in sorting, removing, and responsibly disposing of items.",
    icon: <Heart className="h-8 w-8" />,
  },
  {
    title: "Storage Unit Cleanouts",
    description:
      "If you have a storage unit filled with unwanted items, we can help. Our team will clear out the unit, ensuring items are donated, recycled, or disposed of appropriately, leaving you with a clean space.",
    icon: <Archive className="h-8 w-8" />,
  },
]

const junkRemovalServices: ServiceItem[] = [
  {
    title: "Furniture Removal",
    description:
      "From sofas and chairs to tables and dressers, we remove all types of furniture, ensuring they are donated or recycled whenever possible.",
    icon: <Sofa className="h-8 w-8" />,
  },
  {
    title: "Appliance Removal",
    description:
      "We handle the removal of household appliances, including refrigerators, washers, dryers, and ovens, ensuring proper disposal or recycling.",
    icon: <Zap className="h-8 w-8" />,
  },
  {
    title: "Electronics Removal",
    description:
      "Disposing of old electronics can be tricky. Garbaggio Junk Removal safely removes and recycles items like computers, TVs, and other electronic devices.",
    icon: <Monitor className="h-8 w-8" />,
  },
  {
    title: "Construction Debris Removal",
    description:
      "After a renovation or construction project, debris can pile up. Our team efficiently removes materials like wood, drywall, and other construction waste.",
    icon: <Hammer className="h-8 w-8" />,
  },
  {
    title: "Yard Waste Removal",
    description:
      "We assist in clearing out yard waste, including branches, leaves, and other organic debris, helping you maintain a tidy outdoor space.",
    icon: <Leaf className="h-8 w-8" />,
  },
  {
    title: "Hot Tub Removal",
    description:
      "Removing a hot tub can be challenging. Garbaggio Junk Removal has the expertise to dismantle and haul away your old hot tub safely and efficiently.",
    icon: <Waves className="h-8 w-8" />,
  },
  {
    title: "Piano Removal",
    description:
      "Pianos are heavy and cumbersome. Our trained professionals handle piano removals with care, ensuring safe transportation and disposal.",
    icon: <Music className="h-8 w-8" />,
  },
  {
    title: "Above Ground Pool Removal",
    description:
      "If you're looking to remove an above ground pool, our team can dismantle and dispose of it, restoring your yard to its original state.",
    icon: <CircleDot className="h-8 w-8" />,
  },
  {
    title: "Cabinet and Countertop Removal",
    description:
      "During renovations, removing old cabinets and countertops is essential. We provide quick and safe removal services to keep your project on track.",
    icon: <ChefHat className="h-8 w-8" />,
  },
  {
    title: "Trash and Bagged Waste Removal",
    description:
      "Whether it's post-event cleanup or accumulated household trash, we remove bagged waste promptly, ensuring cleanliness and hygiene.",
    icon: <Trash2 className="h-8 w-8" />,
  },
  {
    title: "Gym Equipment Removal",
    description:
      "Heavy gym equipment like treadmills, weight machines, and exercise bikes require specialized handling. Our team safely removes and disposes of all types of fitness equipment.",
    icon: <Dumbbell className="h-8 w-8" />,
  },
  {
    title: "BBQ Grills",
    description:
      "Old gas and charcoal grills can be bulky and difficult to dispose of. We handle the removal of all types of BBQ grills and outdoor cooking equipment.",
    icon: <Flame className="h-8 w-8" />,
  },
  {
    title: "Heavy Machinery",
    description:
      "Industrial equipment, generators, and heavy machinery require specialized removal. Our team has the expertise to safely handle and dispose of heavy equipment.",
    icon: <Cog className="h-8 w-8" />,
  },
  {
    title: "HVAC Units",
    description:
      "Air conditioning units, furnaces, and HVAC equipment contain refrigerants that require proper disposal. We ensure environmentally safe removal and recycling.",
    icon: <Wind className="h-8 w-8" />,
  },
  {
    title: "Scrap Metal",
    description:
      "We collect and properly recycle all types of scrap metal, from small metal items to large steel structures, ensuring maximum recycling value.",
    icon: <Recycle className="h-8 w-8" />,
  },
  {
    title: "Large Signs",
    description:
      "Business signs, billboards, and large advertising displays require careful removal. We handle the dismantling and disposal of all types of signage.",
    icon: <SignpostBig className="h-8 w-8" />,
  },
  {
    title: "Pallets",
    description:
      "Wooden and plastic pallets can accumulate quickly in commercial spaces. We provide efficient pallet removal and recycling services.",
    icon: <Package className="h-8 w-8" />,
  },
  {
    title: "Tires",
    description:
      "Old tires require special disposal methods. We collect and properly dispose of tires of all sizes, from car tires to large truck and equipment tires.",
    icon: <Circle className="h-8 w-8" />,
  },
]

const hurricaneServices: ServiceItem[] = [
  {
    title: "Debris Removal",
    description:
      "We clear out storm debris including tree branches, roofing materials, drywall, insulation, and damaged household items.",
    icon: <TreePine className="h-8 w-8" />,
  },
  {
    title: "Water-Damaged Item Removal",
    description:
      "We remove soaked carpets, mattresses, furniture, appliances, and other belongings compromised by floodwaters or mold.",
    icon: <Droplets className="h-8 w-8" />,
  },
  {
    title: "Yard & Property Cleanup",
    description:
      "Fallen fences, landscape waste, patio furniture, siding, and more — we'll get your outdoor areas back in shape.",
    icon: <Leaf className="h-8 w-8" />,
  },
  {
    title: "Interior Clearouts",
    description:
      "We assist with flooded basements, garages, and entire home cleanouts. Whether you need a few rooms cleared or an entire property, we're ready.",
    icon: <Home className="h-8 w-8" />,
  },
  {
    title: "Structure Tear-Downs",
    description:
      "For sheds, playsets, pergolas, or detached structures that were destroyed or made unsafe by the storm, we offer safe demolition and removal.",
    icon: <HardHat className="h-8 w-8" />,
  },
  {
    title: "Curbside & Full-Service Pickup",
    description:
      "Whether you're handling cleanup yourself and just need pickup, or want full-service hauling from inside your home — we're here to work how you need.",
    icon: <Truck className="h-8 w-8" />,
  },
]

export function ServicesPage() {
  const [openSection, setOpenSection] = useState<string | null>("junk-removal")

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-garbagio-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-garbagio-background mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive junk removal and cleanout services throughout Southwest Florida. From single items to complete
            property cleanouts, we handle it all.
          </p>
        </div>

        {/* Service Categories */}
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Junk Removal Section */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100">
            <button
              onClick={() => toggleSection("junk-removal")}
              className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-garbagio-gold/10 rounded-lg">
                  <Truck className="h-8 w-8 text-garbagio-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-garbagio-background">Junk Removal</h2>
                  <p className="text-gray-600">Specialized removal services for specific items.</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                {openSection === "junk-removal" ? (
                  <ChevronUp className="h-6 w-6 text-garbagio-accent" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-garbagio-accent" />
                )}
              </div>
            </button>

            {openSection === "junk-removal" && (
              <div className="px-6 pb-6">
                <div className="border-t border-gray-100 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {junkRemovalServices.map((service, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                        <div className="text-garbagio-accent mb-4">{service.icon}</div>
                        <h3 className="text-lg font-semibold text-garbagio-background mb-3">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Cleanouts Section */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100">
            <button
              onClick={() => toggleSection("cleanouts")}
              className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-garbagio-accent/10 rounded-lg">
                  <Home className="h-8 w-8 text-garbagio-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-garbagio-background">Cleanouts</h2>
                  <p className="text-gray-600">Complete property and space cleanout services.</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                {openSection === "cleanouts" ? (
                  <ChevronUp className="h-6 w-6 text-garbagio-accent" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-garbagio-accent" />
                )}
              </div>
            </button>

            {openSection === "cleanouts" && (
              <div className="px-6 pb-6">
                <div className="border-t border-gray-100 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cleanoutServices.map((service, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="text-garbagio-accent flex-shrink-0 mt-1">{service.icon}</div>
                          <div>
                            <h3 className="text-xl font-semibold text-garbagio-background mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Hurricane Disaster Relief Section */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-lg border-2 border-red-200">
            <button
              onClick={() => toggleSection("hurricane")}
              className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-red-50/50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <CloudRain className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-red-800">Hurricane Disaster Relief Cleanup</h2>
                  <p className="text-red-700 font-medium italic">
                    Serving Southwest Florida with Urgency, Compassion, and Strength
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                {openSection === "hurricane" ? (
                  <ChevronUp className="h-6 w-6 text-red-600" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-red-600" />
                )}
              </div>
            </button>

            {openSection === "hurricane" && (
              <div className="px-6 pb-6">
                <div className="border-t border-red-200 pt-6">
                  <div className="mb-6 text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      When hurricanes hit — like Ian did in 2022 — the aftermath can be overwhelming. Flooding, storm
                      surge, wind damage, and fallen debris often leave homes and properties in complete disarray. At
                      Garbaggio Junk Removal, we understand firsthand what Southwest Florida residents go through, and
                      we're here to help you recover, clean up, and move forward.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-red-800 mb-4">What We Offer During Disaster Cleanup:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {hurricaneServices.map((service, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-red-100">
                        <div className="text-red-600 mb-4">{service.icon}</div>
                        <h4 className="text-lg font-semibold text-red-800 mb-3">{service.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-red-200">
                    <h3 className="text-xl font-bold text-red-800 mb-4">Why Choose Garbaggio for Storm Cleanup?</h3>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Based in Southwest Florida</strong> — we're local, experienced, and deeply connected
                          to the community.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Fast response and flexible scheduling</strong> — including emergency and weekend
                          service.
                        </span>
                      </li>
                    </ul>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="text-lg font-bold text-red-800 mb-2">
                        Let Us Do the Heavy Lifting So You Can Focus on Rebuilding.
                      </h4>
                      <p className="text-gray-700 mb-3">
                        Whether it's your home, your business, or your entire property, Garbaggio Junk Removal will show
                        up ready to work. We're here to lighten your load in the toughest times — one load at a time.
                      </p>
                      <p className="text-red-700 font-semibold">
                        Call us directly for priority scheduling during active storm recovery efforts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Equipment Information */}
        <div className="mt-12 bg-garbagio-background rounded-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-garbagio-gold mb-4">Our Equipment</h3>
            <p className="text-garbagio-light/80">
              For all services, Garbaggio Junk Removal utilizes professional-grade equipment to handle any job size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-garbagio-accent mb-2">16 FT</div>
              <div className="text-garbagio-light/70">Dump Trailer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-garbagio-accent mb-2">16,000 LB</div>
              <div className="text-garbagio-light/70">GVWR</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-garbagio-accent mb-2">4 FT</div>
              <div className="text-garbagio-light/70">High Sides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-garbagio-accent mb-2">16.5</div>
              <div className="text-garbagio-light/70">Cubic Yard Capacity</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-garbagio-light/80 mb-4">
              This equipment allows us to handle large volumes efficiently, ensuring timely and effective junk removal.
            </p>
            <p className="text-garbagio-accent font-semibold">
              Note: Same-day service is available when you call us directly. Availability depends on our schedule and
              the time of your call.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-garbagio-background mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today for a free estimate. We'll provide transparent pricing and fast turnaround for all your
            junk removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-garbagio-accent hover:bg-garbagio-accent/90 text-white" asChild>
              <Link href="/estimate">Get A Free Estimate</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-garbagio-gold text-garbagio-background hover:bg-garbagio-gold/10"
            >
              Call (239) 230-6200
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
