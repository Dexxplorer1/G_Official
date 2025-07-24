"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BeforeAfterImage {
  before?: string
  after?: string
  single?: string
  title: string
  description: string
  type: "before-after" | "single"
  beforePosition?: string
  afterPosition?: string
  singlePosition?: string
}

interface BeforeAfterSliderProps {
  images: BeforeAfterImage[]
}

export function BeforeAfterSlider({ images }: BeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setSliderPosition(50) // Reset slider position when changing images
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setSliderPosition(50) // Reset slider position when changing images
  }

  const currentImage = images[currentIndex]

  return (
    <div className="relative w-full h-full pb-8 md:pb-4">
      {/* Before/After Container */}
      <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
        {currentImage.type === "before-after" ? (
          <>
            {/* Before Image */}
            <div className="absolute inset-0">
              <Image
                src={currentImage.before || "/placeholder.svg"}
                alt={`Before - ${currentImage.title}`}
                fill
                className="object-cover"
                style={{
                  objectPosition: currentImage.beforePosition || "center",
                }}
                priority
              />
              <div className="absolute top-4 left-4 bg-garbagio-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                BEFORE
              </div>
            </div>

            {/* After Image with Clip Path */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`,
              }}
            >
              <Image
                src={currentImage.after || "/placeholder.svg"}
                alt={`After - ${currentImage.title}`}
                fill
                className="object-cover"
                style={{
                  objectPosition: currentImage.afterPosition || "center",
                }}
              />
              <div className="absolute top-4 right-4 bg-garbagio-gold text-garbagio-background px-3 py-1 rounded-full text-sm font-semibold">
                AFTER
              </div>
            </div>

            {/* Enhanced Fade Overlay - Left to right fade + border vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(to right, 
                    rgba(42, 39, 38, 0.85) 0%, 
                    rgba(42, 39, 38, 0.6) 20%, 
                    rgba(42, 39, 38, 0.3) 40%, 
                    rgba(42, 39, 38, 0.1) 60%, 
                    rgba(42, 39, 38, 0) 80%),
                  linear-gradient(to bottom, 
                    rgba(42, 39, 38, 0.4) 0%, 
                    rgba(42, 39, 38, 0) 15%, 
                    rgba(42, 39, 38, 0) 85%, 
                    rgba(42, 39, 38, 0.4) 100%),
                  linear-gradient(to right, 
                    rgba(42, 39, 38, 0.3) 0%, 
                    rgba(42, 39, 38, 0) 8%, 
                    rgba(42, 39, 38, 0) 92%, 
                    rgba(42, 39, 38, 0.3) 100%)
                `,
                zIndex: 5,
              }}
            />

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 cursor-ew-resize z-20 flex items-center justify-center bg-garbagio-accent"
  style={{ left: `${sliderPosition}%` }}
              onMouseDown={(e) => {
                const rect = e.currentTarget.parentElement!.getBoundingClientRect()
                const handleMouseMove = (e: MouseEvent) => {
                  const newPosition = ((e.clientX - rect.left) / rect.width) * 100
                  setSliderPosition(Math.max(0, Math.min(100, newPosition)))
                }
                const handleMouseUp = () => {
                  document.removeEventListener("mousemove", handleMouseMove)
                  document.removeEventListener("mouseup", handleMouseUp)
                }
                document.addEventListener("mousemove", handleMouseMove)
                document.addEventListener("mouseup", handleMouseUp)
              }}
            >
             
            </div>
          </>
        ) : (
          // Single Image Display with same fade effects
          <div className="absolute inset-0">
            <Image
              src={currentImage.single || "/placeholder.svg"}
              alt={currentImage.title}
              fill
              className="object-cover"
              style={{
                objectPosition: currentImage.singlePosition || "center",
              }}
              priority
            />
            {/* Apply same fade effect to single images */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(to right, 
                    rgba(42, 39, 38, 0.7) 0%, 
                    rgba(42, 39, 38, 0.4) 25%, 
                    rgba(42, 39, 38, 0.2) 50%, 
                    rgba(42, 39, 38, 0.1) 75%, 
                    rgba(42, 39, 38, 0) 100%),
                  linear-gradient(to bottom, 
                    rgba(42, 39, 38, 0.3) 0%, 
                    rgba(42, 39, 38, 0) 15%, 
                    rgba(42, 39, 38, 0) 85%, 
                    rgba(42, 39, 38, 0.3) 100%),
                  linear-gradient(to right, 
                    rgba(42, 39, 38, 0.25) 0%, 
                    rgba(42, 39, 38, 0) 8%, 
                    rgba(42, 39, 38, 0) 92%, 
                    rgba(42, 39, 38, 0.25) 100%)
                `,
                zIndex: 5,
              }}
            />
          </div>
        )}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-garbagio-background/80 text-garbagio-gold p-2 rounded-full hover:bg-garbagio-background transition-colors z-30"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-garbagio-background/80 text-garbagio-gold p-2 rounded-full hover:bg-garbagio-background transition-colors z-30"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-garbagio-background/80 text-garbagio-gold px-3 py-1 rounded-full text-sm z-30">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Image Description */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-garbagio-gold mb-2">{currentImage.title}</h3>
        <p className="text-garbagio-light/80 text-sm">{currentImage.description}</p>
      </div>

      {/* Dots Indicator with extra mobile spacing */}
      {images.length > 1 && (
        <div className="flex justify-center mt-6 md:mt-4 space-x-3 pb-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setSliderPosition(50)
              }}
              className={`w-3 h-3 md:w-2 md:h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-garbagio-accent" : "bg-garbagio-brown/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
