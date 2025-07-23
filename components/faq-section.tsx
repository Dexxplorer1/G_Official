"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, MapPin, Truck, Recycle, Phone } from "lucide-react"

interface FAQItem {
  question: string
  answer: string | React.ReactNode
  icon?: React.ReactNode
}

const faqData: FAQItem[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve all of Southwest Florida, including Lee, Collier, and Charlotte Counties — from Fort Myers to Naples, Cape Coral, Bonita Springs, Punta Gorda, Lehigh Acres, Sanibel, Captiva, Estero, Fort Myers Beach, Babcock Ranch, Alva, and North Fort Myers.",
    icon: <MapPin className="h-6 w-6 text-garbagio-accent" />,
  },
  {
    question: "What type of equipment do you use?",
    answer: (
      <div>
        <p className="mb-3">We use a heavy-duty 16 ft dump trailer with:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>16,000 lb GVWR</li>
          <li>4 ft high sides</li>
          <li>16.5 cubic yard capacity</li>
          <li>12,000 lb hauling capacity</li>
        </ul>
        <p className="mt-3 font-semibold text-garbagio-accent">Big jobs, no problem.</p>
      </div>
    ),
    icon: <Truck className="h-6 w-6 text-garbagio-accent" />,
  },
  {
    question: "What do you haul?",
    answer: (
      <div>
        <p className="mb-3">We remove:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Furniture, mattresses, and appliances</li>
          <li>Yard waste and storm debris</li>
          <li>Renovation and construction debris</li>
          <li>Office equipment and general junk</li>
          <li>Sheds, fencing, hot tubs, and more</li>
        </ul>
      </div>
    ),
    icon: <Recycle className="h-6 w-6 text-garbagio-accent" />,
  },
  {
    question: "What don't you haul?",
    answer: (
      <div>
        <p className="mb-3">We cannot remove:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Hazardous materials (paint, solvents, fuel, etc.)</li>
          <li>Asbestos or any regulated toxic waste</li>
          <li>Live animals or biological waste</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Do I need to move my junk to the curb?",
    answer: "Nope! We're full-service — just point, and we'll handle the heavy lifting, loading, and clean-up.",
  },
  {
    question: "Do you recycle or donate items?",
    answer:
      "Yes. We do our best to donate usable items and recycle materials whenever possible to reduce landfill waste and support the community.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "You can request a quote by submitting our estimate form and uploading photos of your junk. We'll review it and provide transparent pricing with fast turnaround.",
  },
  {
    question: "Is same-day service available?",
    answer:
      "Yes — same-day service is available, but only when you call directly. Availability depends on the schedule and time of your call, so don't wait — call early!",
    icon: <Phone className="h-6 w-6 text-garbagio-accent" />,
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section className="py-16 bg-gradient-to-b from-garbagio-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-garbagio-background mb-4">
            F-A-Q — Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our junk removal services in Southwest Florida.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {item.icon && <div className="flex-shrink-0">{item.icon}</div>}
                    <h3 className="text-lg font-semibold text-garbagio-background">{item.question}</h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-garbagio-accent" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-garbagio-accent" />
                    )}
                  </div>
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <div className="text-gray-700 leading-relaxed">{item.answer}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-garbagio-background rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-garbagio-gold mb-4">Still Have Questions?</h3>
            <p className="text-garbagio-light/80 mb-6">
              Can't find what you're looking for? Give us a call and we'll be happy to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2394861170"
                className="inline-flex items-center justify-center px-6 py-3 bg-garbagio-accent hover:bg-garbagio-accent/90 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                (239) 486-1170
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-garbagio-gold text-garbagio-gold hover:bg-garbagio-gold/10 font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
