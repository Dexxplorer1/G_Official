import { User, ArrowRight, Phone, Mail } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "No Dumpsters, No Damage: Why Garbaggio Is the Smarter Junk Removal Choice in Southwest Florida",
    excerpt:
      "We keep it clean — not just your space, but also your driveway, yard, and curb appeal. No rusty metal containers, no driveway eyesores, no risk of cracking your pavers.",
    author: "Garbaggio Team",
    emoji: "🚫",
    content: {
      intro:
        "At Garbaggio Junk Removal, we keep it clean — not just your space, but also your driveway, yard, and curb appeal. One of the biggest benefits of choosing us over a dumpster rental service? We never drop a dumpster on your property.",
      body: "That's right. No rusty metal containers. No driveway eyesores. No risk of cracking your pavers or upsetting your HOA. We simply pull up to your home in Fort Myers, Cape Coral, Naples, Bonita Springs, or Port Charlotte, load your junk, and drive off — fast, efficient, and stress-free.",
      protectProperty: [
        "Crack your driveway or pavers under the weight of a metal dumpster",
        "Get a violation notice from your homeowners association",
        "Have to stare at a dumpster for a week while still doing the heavy lifting yourself",
      ],
      garbaggioBenefits: [
        "We don't have to block your driveway or leave containers behind",
        "You don't lift a finger — we do it all",
        "Your HOA stays happy, and your home stays clean",
      ],
      serviceAreas: [
        "Fort Myers",
        "Naples",
        "Cape Coral",
        "Bonita Springs",
        "Estero",
        "Lehigh Acres",
        "Port Charlotte",
      ],
      conclusion:
        "We make junk removal simple. One call and we're on the way. No permits, no dumpster damage, and no stress.",
    },
  },
  {
    id: 2,
    title: "The Mental Benefits of Decluttering: Out with the Garbaggio!",
    excerpt:
      "Life's already hectic enough without stepping over that mysterious pile of wires you swore you'd organize next weekend.",
    author: "Garbaggio Team",
    emoji: "🧠",
    content: {
      intro:
        "Let's be real—life's already hectic enough without stepping over that mysterious pile of wires you swore you'd \"organize next weekend.\" At Garbaggio Junk Removal, we believe cleaning your space is just as good for your brain as it is for your living room.",
      body: "Clutter creates stress. It overwhelms the senses and can even lead to anxiety or lower productivity. The good news? You don't need to become a minimalist monk to get the benefits. All it takes is a little Garbaggio magic—aka us showing up and getting rid of your junk, fast.",
      benefits: [
        { icon: "🧘‍♂️", title: "Mental clarity", desc: "Less mess = more mental space to think clearly." },
        { icon: "🛋️", title: "Better use of space", desc: 'Turn that "junk room" into an office, gym, or chill zone.' },
        { icon: "⏰", title: "Time-saving", desc: "No more digging through piles to find your keys." },
        { icon: "🫶", title: "Improved mood", desc: "A clean space feels good—and you deserve to feel good!" },
      ],
      conclusion:
        "So if your home looks like a garage sale that never happened, give us a shout. We'll haul the garbaggio and leave you with room to breathe.",
    },
  },
  {
    id: 3,
    title: "Junk-Free Offices: Boosting Productivity by Ditching the Garbaggio",
    excerpt:
      "Time is money—but so is space! If your office is starting to resemble a furniture graveyard, it's time to call in the Garbaggio crew.",
    author: "Garbaggio Team",
    emoji: "🏢",
    content: {
      intro:
        "In the business world, time is money—but so is space! If your office is starting to resemble a furniture graveyard or your break room houses an extinct fax machine, it's time to call in the Garbaggio crew.",
      body: "A tidy workplace leads to a more efficient team. Whether you're downsizing, upgrading, or just decluttering, we help Southwest Florida businesses of all sizes clean out the chaos and get back to work—minus the eyesores.",
      removeItems: [
        "💺 Broken desks, chairs, and filing cabinets",
        "🖨️ Outdated electronics and printers",
        "📦 Stockroom or inventory clutter",
        "🗄️ Old documents and storage bins (non-sensitive only)",
      ],
      workWith: [
        "🧑‍💼 Small offices and coworking spaces",
        "🏢 Large commercial buildings",
        "🛒 Retail shops",
        "🏗️ Warehouses and industrial sites",
      ],
      conclusion:
        "Let's clean up your workspace and boost your team's morale. Out with the garbaggio, in with the productivity.",
    },
  },
  {
    id: 4,
    title: "Landlord's Guide: Clearing Out Tenant Leftovers with Garbaggio",
    excerpt:
      "Being a landlord has its perks… until your tenant ghosts you and leaves behind a sofa that smells like 2007.",
    author: "Garbaggio Team",
    emoji: "🏠",
    content: {
      intro:
        "Being a landlord in Southwest Florida has its perks… until your tenant ghosts you and leaves behind a sofa that smells like 2007. Don't stress—Garbaggio Junk Removal is here to handle the mess so you can get that property rental-ready again.",
      body: "We know time is money when it comes to turning a unit. Whether it's a single room, an apartment, or a whole house, our team comes equipped with a 16-foot dump trailer and a no-nonsense attitude toward tenant leftovers.",
      commonItems: [
        "🛏️ Mattresses, bed frames, and nightstands",
        "🧺 Washers, dryers, and dishwashers",
        "🛋️ Couches, recliners, and ottomans",
        '🪑 Broken furniture or DIY "fixes" gone wrong',
        "📦 Bagged trash and loose junk",
      ],
      conclusion:
        "We do the heavy lifting, sorting, and hauling. You just call us and get back to finding your next responsible tenant. The sooner the garbaggio is gone, the sooner your unit is making money again.",
    },
  },
]

export const metadata = {
  title: "Blog - Tips & News | Garbaggio Junk Removal",
  description:
    "Read our latest tips, news, and insights about junk removal, decluttering, and home organization in Southwest Florida.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <section className="py-16 bg-gradient-to-b from-garbagio-light to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-garbagio-background mb-4">Garbaggio Blog</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tips, news, and insights about junk removal, decluttering, and home organization in Southwest Florida.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Blog Posts Grid */}
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
                  >
                    {/* Post Header */}
                    <div className="bg-garbagio-background p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{post.emoji}</span>
                        <div className="flex-1">
                          <h2 className="text-2xl md:text-3xl font-bold text-garbagio-gold mb-2">{post.title}</h2>
                          <div className="flex items-center gap-4 text-garbagio-light/70 text-sm">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-garbagio-light/90 text-lg italic">{post.excerpt}</p>
                    </div>

                    {/* Post Content */}
                    <div className="p-6 md:p-8">
                      <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">{post.content.intro}</p>
                        <p className="text-gray-700 leading-relaxed mb-6">{post.content.body}</p>

                        {/* No Dumpsters Blog Content (Post 1) */}
                        {post.content.protectProperty && (
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-garbagio-background mb-4">
                              🏡 Protect Your Property (and Sanity)
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Dumpster rentals in Southwest Florida may seem like a DIY dream — until you:
                            </p>
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                              <ul className="space-y-2">
                                {post.content.protectProperty.map((item, idx) => (
                                  <li key={idx} className="text-red-700 flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <p className="text-gray-700 font-semibold mb-3">With Garbaggio:</p>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                              <ul className="space-y-2">
                                {post.content.garbaggioBenefits?.map((benefit, idx) => (
                                  <li key={idx} className="text-green-700 flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <h4 className="text-lg font-bold text-garbagio-background mb-3">
                              🤝 HOA-Friendly and Hassle-Free Junk Pickup
                            </h4>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Many homeowners associations in Southwest Florida — especially in gated communities and
                              coastal developments — have strict rules about visible dumpsters. Whether you're a
                              homeowner in Estero, Lehigh Acres, North Naples, or managing a vacation rental, the last
                              thing you need is an HOA violation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                              That's why our curbside pickup model is the preferred choice. We load everything onsite,
                              in one trip, with zero impact on your landscaping or drive.
                            </p>

                            <h4 className="text-lg font-bold text-garbagio-background mb-3">
                              📦 Serving All of Lee, Collier & Charlotte Counties
                            </h4>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              From bulky furniture and garage cleanouts to yard debris and old appliances, we handle it
                              all. No job too small, no driveway left cracked. Just fast, clean removal for homes and
                              businesses throughout:
                            </p>
                            <div className="bg-garbagio-light/30 p-4 rounded-lg border border-garbagio-gold/20 mb-6">
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {post.content.serviceAreas?.map((area, idx) => (
                                  <div key={idx} className="text-garbagio-background font-semibold">
                                    • {area}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <h4 className="text-lg font-bold text-garbagio-background mb-3">
                              💡 It's Just Easier to Call Garbaggio
                            </h4>
                          </div>
                        )}

                        {/* Benefits Section (Post 2) */}
                        {post.content.benefits && (
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-garbagio-background mb-4">
                              Benefits of Decluttering the Garbaggio:
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {post.content.benefits.map((benefit, idx) => (
                                <div
                                  key={idx}
                                  className="bg-garbagio-light/30 p-4 rounded-lg border border-garbagio-gold/20"
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="text-2xl">{benefit.icon}</span>
                                    <div>
                                      <h4 className="font-semibold text-garbagio-background">{benefit.title}</h4>
                                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Office Items Section (Post 3) */}
                        {post.content.removeItems && (
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-garbagio-background mb-4">
                              What We Can Remove from Your Workspace:
                            </h3>
                            <div className="bg-garbagio-light/30 p-4 rounded-lg border border-garbagio-gold/20 mb-4">
                              <ul className="space-y-2">
                                {post.content.removeItems.map((item, idx) => (
                                  <li key={idx} className="text-gray-700">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <h4 className="text-lg font-semibold text-garbagio-background mb-3">We work with:</h4>
                            <div className="bg-garbagio-accent/10 p-4 rounded-lg border border-garbagio-accent/20">
                              <ul className="space-y-2">
                                {post.content.workWith?.map((type, idx) => (
                                  <li key={idx} className="text-gray-700">
                                    {type}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* Landlord Items Section (Post 4) */}
                        {post.content.commonItems && (
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-garbagio-background mb-4">Common Items We Remove:</h3>
                            <div className="bg-garbagio-light/30 p-4 rounded-lg border border-garbagio-gold/20">
                              <ul className="space-y-2">
                                {post.content.commonItems.map((item, idx) => (
                                  <li key={idx} className="text-gray-700">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        <p className="text-gray-700 leading-relaxed font-medium text-garbagio-background">
                          {post.content.conclusion}
                        </p>

                        {/* Special ending for No Dumpsters blog */}
                        {post.id === 1 && (
                          <div className="mt-6 p-4 bg-garbagio-accent/10 border border-garbagio-accent/20 rounded-lg text-center">
                            <p className="text-garbagio-background font-bold text-lg mb-2">
                              Garbaggio Junk Removal – Junk Gone, Job Done!
                            </p>
                            <p className="text-gray-600 text-sm">📍 Locally owned and operated in Southwest Florida</p>
                          </div>
                        )}
                      </div>

                      {/* Call to Action */}
                      <div className="mt-8 p-6 bg-gradient-to-r from-garbagio-background to-garbagio-brown rounded-lg">
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-garbagio-gold mb-3">Ready to Get Started?</h3>
                          <p className="text-garbagio-light/80 mb-4">
                            Contact Garbaggio today for fast, professional junk removal service.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button className="bg-garbagio-accent hover:bg-garbagio-accent/90 text-white" asChild>
                              <a href="tel:2392306200">
                                <Phone className="mr-2 h-4 w-4" />
                                Call (239) 230-6200
                              </a>
                            </Button>
                            <Button
                              variant="outline"
                              className="border-garbagio-gold text-garbagio-gold hover:bg-garbagio-gold/10"
                              asChild
                            >
                              <Link href="/estimate">
                                Get Free Estimate
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-16 text-center">
                <div className="bg-garbagio-background rounded-lg p-8 max-w-3xl mx-auto">
                  <h3 className="text-3xl font-bold text-garbagio-gold mb-4">"Garbaggio, Junk's Gone – Job Done!"</h3>
                  <p className="text-garbagio-light/80 text-lg mb-6">
                    Have questions about our services or need a custom solution? We're here to help you reclaim your
                    space!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-garbagio-accent hover:bg-garbagio-accent/90 text-white" asChild>
                      <a href="tel:2392306200">
                        <Phone className="mr-2 h-4 w-4" />
                        Call (239) 230-6200
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-garbagio-gold text-garbagio-gold hover:bg-garbagio-gold/10"
                      asChild
                    >
                      <a href="mailto:Junkgonejobdone@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
