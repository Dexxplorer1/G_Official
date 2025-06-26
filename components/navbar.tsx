"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-garbagio-background border-b border-garbagio-brown/20 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-32">
          {/* Mobile Phone Icon (left) */}
          <div className="md:hidden">
            <a
              href="tel:2392306200"
              className="flex items-center justify-center w-10 h-10 bg-garbagio-accent rounded-full text-white"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Logo - Centered on mobile */}
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 md:static md:left-auto md:transform-none">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Garbaggio Logo"
                width={200}
                height={67}
                className="h-auto w-auto max-h-16 md:max-h-none"
                priority
                quality={100}
                sizes="(max-width: 768px) 200px, 240px"
                style={{
                  imageRendering: "crisp-edges",
                  WebkitImageRendering: "crisp-edges",
                  filter: "contrast(1.15) brightness(1.05) saturate(1.1)",
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-12">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg"
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg"
              >
                Gallery
              </Link>
              <Link
                href="/pricing"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg"
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg"
              >
                FAQ
              </Link>
              <Link
                href="/blog"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* CTA Button (desktop) and Mobile menu button */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <Button className="bg-garbagio-accent hover:bg-garbagio-accent/90 text-white" asChild>
                <Link href="/estimate">Get A Free Estimate</Link>
              </Button>
            </div>

            {/* Mobile menu button - moved to right */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-garbagio-gold hover:text-garbagio-accent focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Full width, properly styled */}
      {isMenuOpen && (
        <div className="md:hidden bg-garbagio-background border-t border-garbagio-brown/20 overflow-hidden">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-lg text-center"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-lg text-center"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-lg text-center"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-lg text-center"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-lg text-center"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-lg text-center"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-lg text-center"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Link href="/estimate" onClick={toggleMenu}>
                <Button className="w-full bg-garbagio-accent hover:bg-garbagio-accent/90 text-white">
                  Get A Free Estimate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
