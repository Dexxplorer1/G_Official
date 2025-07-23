import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | Garbaggio Junk Removal",
  description:
    "Terms of Service for Garbaggio Junk Removal - Review our service terms and conditions for junk removal in Southwest Florida.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <section className="py-16 bg-gradient-to-b from-garbagio-light to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-garbagio-background mb-4">Terms of Service</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mx-auto mb-6"></div>
                <p className="text-lg text-gray-600">Effective Date: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Welcome to Garbaggio Junk Removal ("we," "our," or "us"). These Terms of Service ("Terms") govern
                    your use of our website, services, and any related communication or transactions you engage in with
                    us. By accessing or using our services, you agree to be legally bound by these Terms. If you do not
                    agree, please do not use our services.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Services Provided:</strong> Garbaggio Junk Removal
                    provides junk removal, cleanout, and hauling services throughout Southwest Florida, including Lee,
                    Charlotte, and Collier counties. Our offerings include providing estimates based on information you
                    provide, such as photos and descriptions of the items you wish to have removed. Please note that all
                    actual service scope, timing, and pricing are subject to confirmation after a thorough inspection of
                    the job site.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Eligibility:</strong> Our services are intended solely
                    for individuals who are at least 18 years old. By using our services, you affirm that you are
                    legally capable of entering into a binding contract and meet this age requirement. Services are not
                    offered to minors or those who lack legal capacity.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Pricing and Payment:</strong> Estimates provided
                    through our website or other communications are approximate and may change following a final on-site
                    assessment. Payment terms, including any deposits, full payment requirements, and accepted payment
                    methods, will be communicated prior to performing the service. Failure to meet payment obligations
                    in the agreed timeframe may result in delays or cancellation of service.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Scheduling and Service Delivery:</strong> We strive to
                    accommodate your requested appointment dates and times; however, these are estimates and subject to
                    change due to unforeseen circumstances, including traffic, weather conditions, or operational
                    challenges. It is your responsibility to provide accurate job details and reasonable access for our
                    team to perform the requested service efficiently.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Customer Responsibilities:</strong> You agree to
                    provide truthful, complete, and accurate information when requesting services. Furthermore, you are
                    responsible for ensuring that all items to be removed comply with applicable laws and regulations,
                    and that no hazardous materials are included unless disclosed and expressly approved in advance. You
                    agree to indemnify and hold harmless Garbaggio Junk Removal from any claims or damages resulting
                    from your failure to comply with these responsibilities.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Prohibited Items:</strong> We do not accept any items
                    that are illegal, hazardous, or require special handling, including but not limited to explosives,
                    chemicals, asbestos, biohazards, or items regulated by law. Attempting to dispose of such materials
                    through our services is strictly prohibited and may result in immediate service termination.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Privacy:</strong> Your use of our services is subject
                    to our Privacy Policy, which details how we collect, use, and protect your personal information. By
                    engaging our services, you consent to the collection and processing of your data as described in
                    that policy.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Intellectual Property:</strong> All content available
                    on our website—including text, graphics, logos, and images—are owned by us or licensed to us. You
                    may not reproduce, distribute, or use any such content for commercial purposes without our prior
                    written permission.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Limitation of Liability:</strong> To the fullest extent
                    permitted by law, Garbaggio Junk Removal and its affiliates, employees, and agents shall not be
                    liable for any indirect, incidental, consequential, or punitive damages arising from your use of our
                    services. Our total liability to you shall not exceed the amount you paid for the specific service
                    giving rise to the claim.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Disclaimers:</strong> Our services and website are
                    provided "as is" and "as available," without any warranties, express or implied. We do not guarantee
                    that our services will meet your expectations or that access to our website or services will be
                    uninterrupted, error-free, or secure.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Cancellation and Refunds:</strong> Cancellation
                    policies will be communicated at the time of booking. Refunds, if applicable, will be handled
                    according to these policies. We reserve the right to cancel or reschedule services for operational
                    reasons, and we will notify you promptly in such cases.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Governing Law and Dispute Resolution:</strong> These
                    Terms are governed by the laws of the State of Florida without regard to its conflict of law
                    provisions. Any disputes arising from these Terms or your use of our services will be resolved
                    through binding arbitration held in Lee County, Florida, unless otherwise mutually agreed upon.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Changes to Terms:</strong> We reserve the right to
                    modify these Terms at any time. Updated Terms will be posted on our website with the revised
                    effective date. Your continued use of our services following any changes constitutes your acceptance
                    of the new Terms.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong className="text-garbagio-background">Contact Information:</strong> If you have any questions
                    regarding these Terms, service issues, or other inquiries, please contact Garbaggio Junk Removal at{" "}
                    <a
                      href="tel:2394861170"
                      className="text-garbagio-accent hover:text-garbagio-accent/80 font-semibold"
                    >
                      (239) 486-1170
                    </a>{" "}
                    or{" "}
                    <a
                      href="mailto:junkgonejobdone@gmail.com"
                      className="text-garbagio-accent hover:text-garbagio-accent/80 font-semibold"
                    >
                      junkgonejobdone@gmail.com
                    </a>
                    .
                  </p>
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
