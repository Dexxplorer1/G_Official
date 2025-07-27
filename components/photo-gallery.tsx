"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  src: string
  alt: string
  title: string
  category: string
  description: string
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/storage-before-new.jpg",
    alt: "Storage unit before cleanout - cluttered with furniture and boxes",
    title: "Storage Unit - Before",
    category: "Storage Cleanouts",
    description: "Completely packed storage unit requiring full cleanout service.",
  },
  {
    src: "/images/storage-after-new.jpg",
    alt: "Storage unit after cleanout - clean and empty",
    title: "Storage Unit - After",
    category: "Storage Cleanouts",
    description: "Same storage unit completely cleaned and ready for use.",
  },
  {
    src: "/images/before-1.jpg",
    alt: "Storage unit before cleanout",
    title: "Storage Unit - Before",
    category: "Storage Cleanouts",
    description: "Completely packed storage unit requiring full cleanout service.",
  },
  {
    src: "/images/after-1.jpg",
    alt: "Storage unit after cleanout",
    title: "Storage Unit - After",
    category: "Storage Cleanouts",
    description: "Same storage unit completely cleaned and ready for use.",
  },
  {
    src: "/images/before-2.jpg",
    alt: "Garage before cleanout",
    title: "Garage Cleanout - Before",
    category: "Residential",
    description: "Cluttered garage filled with unwanted items and debris.",
  },
  {
    src: "/images/after-2.jpg",
    alt: "Garage after cleanout",
    title: "Garage Cleanout - After",
    category: "Residential",
    description: "Clean, organized garage space ready for use.",
  },
  {
    src: "/images/hot-tub-removal.jpg",
    alt: "Hot tub removal service",
    title: "Hot Tub Removal",
    category: "Specialty Items",
    description: "Professional hot tub removal from residential property.",
  },
  {
    src: "/images/piano-removal.jpg",
    alt: "Piano removal service",
    title: "Piano Removal",
    category: "Specialty Items",
    description: "Careful piano removal with specialized equipment and expertise.",
  },
  {
    src: "/images/storage-cleanout.jpg",
    alt: "Storage unit cleanout",
    title: "Full Storage Cleanout",
    category: "Storage Cleanouts",
    description: "Complete storage unit cleanout with efficient packing and removal.",
  },
  {
    src: "/images/construction-debris.jpg",
    alt: "Construction debris removal",
    title: "Construction Debris",
    category: "Construction",
    description: "Wood, lumber, and construction material removal service.",
  },
  {
    src: "/images/trailer-packed.jpg",
    alt: "Efficiently packed trailer",
    title: "Efficient Loading",
    category: "Our Process",
    description: "Bottom layer down, now for the top load.",
  },
  {
    src: "/images/dump-site-1.jpg",
    alt: "Professional disposal",
    title: "Proper Disposal",
    category: "Our Process",
    description: "Professional disposal at licensed waste management facilities.",
  },
]

const categories = ["All", "Storage Cleanouts", "Residential", "Specialty Items", "Construction", "Our Process"]

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-garbagio-background mb-4">Our Work Gallery</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the quality of our work and the variety of services we provide throughout Lee, Collier, and Charlotte
            counties.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-garbagio-accent hover:bg-garbagio-accent/90 text-white"
                  : "border-garbagio-gold text-garbagio-background hover:bg-garbagio-gold/10"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-garbagio-background/0 group-hover:bg-garbagio-background/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-garbagio-background/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-garbagio-light/80 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-garbagio-accent z-10"
                aria-label="Close"
              >
                <X className="h-8 w-8" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-garbagio-accent z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-garbagio-accent z-10"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <div className="relative">
                <Image
                  src={filteredImages[selectedImage].src || "/placeholder.svg"}
                  alt={filteredImages[selectedImage].alt}
                  width={800}
                  height={600}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white font-semibold text-xl mb-2">{filteredImages[selectedImage].title}</h3>
                  <p className="text-gray-300">{filteredImages[selectedImage].description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
