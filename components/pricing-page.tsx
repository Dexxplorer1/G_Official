import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PricingPage() {
  return (
    <section className="py-16 bg-gradient-to-b from-garbagio-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-garbagio-background mb-4">
            Garbaggio Junk Removal – Basic Pricing Sheet
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We charge based on the volume your items take up in our{" "}
            <span className="font-semibold text-garbagio-accent">16 ft dump trailer</span> (
            <span className="font-semibold text-garbagio-gold">16,000 lb GVWR</span>,{" "}
            <span className="font-semibold text-garbagio-gold">4 ft high sides</span>,{" "}
            <span className="font-semibold text-garbagio-gold">16.5 cubic yard / 445.5 cubic ft capacity</span>). Our
            rates are transparent and competitive for residential, commercial, and contractor customers across Southwest
            Florida.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Volume-Based Pricing */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 mb-8">
            <div className="px-6 py-6 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔄</span>
                <h2 className="text-2xl font-bold text-garbagio-background">Volume-Based Pricing (Per Load)</h2>
              </div>
            </div>

            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-garbagio-background">Load Size</th>
                      <th className="text-left py-3 px-4 font-semibold text-garbagio-background">Approx. Volume</th>
                      <th className="text-left py-3 px-4 font-semibold text-garbagio-background">Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-semibold text-garbagio-accent">Minimum Load</td>
                      <td className="py-4 px-4 text-gray-600">~50 – 60 ft³</td>
                      <td className="py-4 px-4 font-bold text-garbagio-background">$150</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-semibold text-garbagio-accent">1/8 Load</td>
                      <td className="py-4 px-4 text-gray-600">~55 – 65 ft³</td>
                      <td className="py-4 px-4 font-bold text-garbagio-background">$200 – $225</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-semibold text-garbagio-accent">1/4 Load</td>
                      <td className="py-4 px-4 text-gray-600">~110 ft³</td>
                      <td className="py-4 px-4 font-bold text-garbagio-background">$250 – $300</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-semibold text-garbagio-accent">1/2 Load</td>
                      <td className="py-4 px-4 text-gray-600">~220 ft³</td>
                      <td className="py-4 px-4 font-bold text-garbagio-background">$400 – $500</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-semibold text-garbagio-accent">3/4 Load</td>
                      <td className="py-4 px-4 text-gray-600">~330 ft³</td>
                      <td className="py-4 px-4 font-bold text-garbagio-background">$600 – $750</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-4 font-semibold text-garbagio-accent">Full Load</td>
                      <td className="py-4 px-4 text-gray-600">~445 ft³ (max capacity)</td>
                      <td className="py-4 px-4 font-bold text-garbagio-background">$850 – $950</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Heavy Materials Warning */}
              <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">Note on Heavy Materials:</h3>
                    <p className="text-orange-700 text-sm leading-relaxed">
                      Loads made up primarily of{" "}
                      <strong>concrete, marble, tile, rock, dirt, bricks, or scrap metal</strong> may exceed trailer
                      weight limits before reaching full volume. These jobs are{" "}
                      <strong>priced separately based on weight and disposal type</strong>, not volume.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flat-Rate Individual Item Pricing */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 mb-8">
            <div className="px-6 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-garbagio-background">Flat-Rate Individual Item Pricing</h2>
            </div>

            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-garbagio-background">Item</th>
                      <th className="text-left py-3 px-4 font-semibold text-garbagio-background">Flat Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-garbagio-background">Single Small Item</td>
                      <td className="py-4 px-4 font-bold text-garbagio-accent">From $100</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-garbagio-background">Mattress / Box Spring</td>
                      <td className="py-4 px-4 font-bold text-garbagio-accent">$100 – $150</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-garbagio-background">Sofa / Couch</td>
                      <td className="py-4 px-4 font-bold text-garbagio-accent">$150 – $200</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-garbagio-background">Refrigerator / Freezer</td>
                      <td className="py-4 px-4 font-bold text-garbagio-accent">$150 – $180</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-garbagio-background">Washer / Dryer</td>
                      <td className="py-4 px-4 font-bold text-garbagio-accent">$100 – $150</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-garbagio-background">Hot Tub</td>
                      <td className="py-4 px-4 font-bold text-garbagio-accent">$300 – $500</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-garbagio-background">Piano</td>
                      <td className="py-4 px-4 font-bold text-garbagio-accent">$300 – $600</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-garbagio-background">Pool Table</td>
                      <td className="py-4 px-4 font-bold text-garbagio-accent">$300 – $600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 mb-8">
            <div className="px-6 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-garbagio-background">Additional Info</h2>
            </div>

            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-garbagio-accent mt-0.5">•</span>
                  <div>
                    <span className="font-semibold text-garbagio-background">Same-Day Service:</span>
                    <span className="text-gray-600 ml-1">
                      Available when you call directly — subject to scheduling.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-garbagio-accent mt-0.5">•</span>
                  <div>
                    <span className="font-semibold text-garbagio-background">Difficult Access / Stairs:</span>
                    <span className="text-gray-600 ml-1">+$50–$100 depending on complexity.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-garbagio-accent mt-0.5">•</span>
                  <div>
                    <span className="font-semibold text-garbagio-background">Disassembly Service:</span>
                    <span className="text-gray-600 ml-1">Starts at $50 — quoted based on item(s).</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-garbagio-accent mt-0.5">•</span>
                  <div>
                    <span className="font-semibold text-garbagio-background">No Hazardous Waste:</span>
                    <span className="text-gray-600 ml-1">We do not remove paint, solvents, fuels, or chemicals.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-garbagio-accent mt-0.5">•</span>
                  <div>
                    <span className="font-semibold text-garbagio-background">Best Way to Get a Quote:</span>
                    <span className="text-gray-600 ml-1">
                      Submit photos of what you need removed via our website estimate form.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Prep & Bagging Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-yellow-800 mb-2">Prep & Bagging Disclaimer</h3>
            <p className="text-yellow-700 leading-relaxed">
              Additional fees apply for jobs requiring bagging, sorting, or preparation of loose or scattered items
              (e.g., hoarder situations). All materials must be reasonably staged for removal.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-garbagio-background rounded-lg p-8">
              <h3 className="text-2xl font-bold text-garbagio-gold mb-4">Ready for Your Free Estimate?</h3>
              <p className="text-garbagio-light/80 mb-6 max-w-2xl mx-auto">
                Get transparent, competitive pricing for your junk removal needs. Upload photos for the most accurate
                quote, or call us directly for same-day service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-garbagio-accent hover:bg-garbagio-accent/90 text-white" asChild>
                  <Link href="/estimate">Get A Free Estimate</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-garbagio-gold text-garbagio-gold hover:bg-garbagio-gold/10"
                  asChild
                >
                  <a href="tel:2392306200">Call (239) 230-6200</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
