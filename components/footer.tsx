import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-garbagio-background text-garbagio-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Garbaggio Logo"
                width={240}
                height={80}
                className="h-auto w-auto"
                quality={100}
                sizes="(max-width: 768px) 200px, 240px"
                style={{
                  imageRendering: "crisp-edges",
                  WebkitImageRendering: "crisp-edges",
                }}
              />
            </Link>
            <p className="text-garbagio-light/70">
              Your local junk removal service. Serving all of Lee, Collier and Charlotte county.
            </p>
            <div className="flex space-x-4">
              <Link href="/estimate" className="text-garbagio-gold hover:text-garbagio-accent transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Get Free Estimate</span>
              </Link>
              <Link href="/estimate" className="text-garbagio-gold hover:text-garbagio-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Get Free Estimate</span>
              </Link>
              <Link href="/estimate" className="text-garbagio-gold hover:text-garbagio-accent transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Get Free Estimate</span>
              </Link>
            </div>
          </div>

          {/* Services - Non-clickable */}
          <div>
            <h3 className="text-lg font-semibold text-garbagio-gold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-garbagio-light/70 cursor-default">Residential Junk Removal</span>
              </li>
              <li>
                <span className="text-garbagio-light/70 cursor-default">Commercial Cleanouts</span>
              </li>
              <li>
                <span className="text-garbagio-light/70 cursor-default">Construction Debris</span>
              </li>
              <li>
                <span className="text-garbagio-light/70 cursor-default">Appliance Removal</span>
              </li>
              <li>
                <span className="text-garbagio-light/70 cursor-default">Furniture Removal</span>
              </li>
              <li>
                <span className="text-garbagio-light/70 cursor-default">Piano Removal</span>
              </li>
              <li>
                <span className="text-garbagio-light/70 cursor-default">Hot Tub Removal</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-garbagio-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-garbagio-light/70 hover:text-garbagio-accent">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-garbagio-light/70 hover:text-garbagio-accent">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-garbagio-light/70 hover:text-garbagio-accent">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-garbagio-light/70 hover:text-garbagio-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-garbagio-light/70 hover:text-garbagio-accent">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-garbagio-gold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-garbagio-accent mr-2" />
                <a href="tel:2392306200" className="text-garbagio-light/70 hover:text-garbagio-accent">
                  (239) 230-6200
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-garbagio-accent mr-2" />
                <a
                  href="mailto:Junkgonejobdone@gmail.com"
                  className="text-garbagio-light/70 hover:text-garbagio-accent"
                >
                  Junkgonejobdone@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-garbagio-brown/20 mt-12 pt-8 text-center text-garbagio-light/50 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Garbaggio Junk Removal. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:text-garbagio-accent">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-garbagio-accent">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
