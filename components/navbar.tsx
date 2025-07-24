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
    <header className="sticky top-0 z-50 w-full bg-garbagio-background border-b border-garbagio-brown/20 overflow-visible relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20 md:h-32">
          {/* Mobile Phone Icon (left) */}
          <div className="md:hidden z-60">
            <a
              href="tel:2394861170"
              className="flex items-center justify-center w-10 h-10 bg-garbagio-accent rounded-full text-white"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Logo - Centered on mobile, slightly left on desktop */}
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none md:-translate-x-4 lg:-translate-x-6 xl:-translate-x-8 overflow-visible z-60">
            <Link href="/" className="flex items-center relative">
              <Image
                src="/images/logo.png"
                alt="Garbaggio Logo"
                width={200}
                height={67}
                className="h-auto w-auto max-h-16 md:max-h-none translate-y-4 md:translate-y-8"
                priority
                quality={100}
                sizes="(max-width: 768px) 200px, 240px"
                style={{
  imageRendering: "crisp-edges",
  // @ts-ignore
  WebkitImageRendering: "crisp-edges",
  filter: "contrast(1.15) brightness(1.05) saturate(1.1)",
}}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Between logo and CTA button */}
          <div className="hidden md:flex flex-1 items-center justify-center z-60">
            <nav className="flex items-center space-x-6 lg:space-x-8">
              <Link
                href="/"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg lg:text-xl relative z-60"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg lg:text-xl relative z-60"
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg lg:text-xl relative z-60"
              >
                Gallery
              </Link>
              <Link
                href="/pricing"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg lg:text-xl relative z-60"
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg lg:text-xl relative z-60"
              >
                FAQ
              </Link>
              <Link
                href="/blog"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg lg:text-xl relative z-60"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-garbagio-gold hover:text-garbagio-accent transition-colors font-semibold text-lg lg:text-xl relative z-60"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block z-60 flex-shrink-0 ml-8 lg:ml-12 xl:ml-16">
            {/* Enhanced CTA Button with Less Blur */}
            <div className="relative">
              {/* Reduced blur outer border with gap */}
              <div className="absolute -inset-2 bg-gradient-to-r from-garbagio-accent via-garbagio-gold to-garbagio-accent rounded-lg opacity-75 blur-[2px] animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold rounded-lg animate-pulse"></div>

              {/* Main button */}
              <div className="relative">
                <Button
                  className="bg-garbagio-accent hover:bg-garbagio-accent/90 text-white font-bold px-4 lg:px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-70 text-sm lg:text-base"
                  asChild
                >
                  <Link href="/estimate">Get A Free Estimate</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile menu button - positioned on the far right */}
          <div className="md:hidden z-60">
            <button
              onClick={toggleMenu}
              className="text-garbagio-gold hover:text-garbagio-accent focus:outline-none p-2 relative z-70"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Original dropdown style */}
      {isMenuOpen && (
        <div className="md:hidden bg-garbagio-background border-t border-garbagio-brown/20">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-garbagio-gold hover:text-garbagio-accent font-semibold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-garbagio-accent hover:bg-garbagio-accent/90 text-white font-bold" asChild>
                <Link href="/estimate" onClick={() => setIsMenuOpen(false)}>
                  Get A Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
