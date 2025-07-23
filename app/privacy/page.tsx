import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Garbaggio Junk Removal",
  description:
    "Privacy Policy for Garbaggio Junk Removal - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <section className="py-16 bg-gradient-to-b from-garbagio-light to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-garbagio-background mb-4">Privacy Policy</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mx-auto mb-6"></div>
                <p className="text-lg text-gray-600">Effective Date: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At Garbaggio Junk Removal ("we," "our," or "us"), your privacy is important to us. This Privacy
                    Policy explains how we collect, use, store, and share your personal information when you use our
                    website or services. By accessing our site or submitting a request, you agree to the terms described
                    herein.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Information We Collect:</strong> We collect personal
                    information such as your name, email, phone number, service address, photos, job details, and
                    payment information when you request a quote or schedule services. Additionally, we gather
                    non-personal data including IP addresses, browser type, device details, and tracking information
                    through cookies and analytics to improve your experience. This information is collected via website
                    forms, emails, phone communications, and automated tracking tools.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">How We Use Your Information:</strong> We use it
                    primarily to respond to inquiries, provide quotes, schedule appointments, process payments, send
                    updates, and improve our services. We do not sell or lease your personal information.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Information Sharing:</strong> We may share your data
                    with trusted service providers such as email platforms, payment processors, scheduling tools, and
                    our team members who help fulfill services. We also comply with legal requests when required. These
                    third parties are bound by strict confidentiality and data protection agreements.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Your Rights:</strong> You have rights to access,
                    correct, or delete your personal data, and to opt out of certain uses like marketing communications
                    or cookie tracking. To exercise these rights, contact us at{" "}
                    <a
                      href="mailto:junkgonejobdone@gmail.com"
                      className="text-garbagio-accent hover:text-garbagio-accent/80 font-semibold"
                    >
                      junkgonejobdone@gmail.com
                    </a>{" "}
                    or call{" "}
                    <a
                      href="tel:2394861170"
                      className="text-garbagio-accent hover:text-garbagio-accent/80 font-semibold"
                    >
                      (239) 486-1170
                    </a>
                    .
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Data Retention and Security:</strong> We retain your
                    information only as long as necessary to provide services, fulfill legal obligations, and resolve
                    disputes. We take reasonable measures to protect your data but note that no online transmission is
                    completely secure.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Cookies and Tracking:</strong> Our website uses cookies
                    and tracking tools to analyze traffic and personalize your experience. You may disable cookies in
                    your browser settings, but this may impact functionality.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Children's Privacy:</strong> Our services and website
                    are not intended for anyone under 18 years of age. We do not knowingly collect data from minors. If
                    you believe we have collected information from a minor, please contact us immediately.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Third-Party Links:</strong> We may link to third-party
                    websites; however, we are not responsible for their privacy practices. Please review their policies
                    before sharing information.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-garbagio-background">Policy Updates:</strong> We reserve the right to update
                    this Privacy Policy at any time. Changes will be posted with a new effective date, and your
                    continued use of our services constitutes acceptance of those changes.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong className="text-garbagio-background">Contact Us:</strong> If you have any questions or
                    concerns about your privacy or this policy, please contact Garbaggio Junk Removal at{" "}
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
