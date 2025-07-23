"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, Clock, MapPin, Send, Upload, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceAddress: "",
    message: "",
  })
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        serviceAddress: "",
        message: "",
      })
      setSelectedFiles([])
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-b from-garbagio-light to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-800 mb-4">Message Sent Successfully!</h2>
              <p className="text-green-700 mb-4">
                Thank you for contacting Garbaggio Junk Removal. We've received your message and will get back to you
                within 24 hours.
              </p>
              <p className="text-green-600 font-semibold">For immediate assistance, call us at (239) 486-1170</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-b from-garbagio-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-garbagio-background mb-4">
            Contact Garbaggio Junk Removal
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to get your space back? Reach out with questions, scheduling requests, or to get a fast and free
            estimate. Our friendly team provides responsive service with local expertise you can trust.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-garbagio-accent/10 rounded-lg">
                    <Phone className="h-8 w-8 text-garbagio-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-garbagio-background">Phone</h3>
                    <a
                      href="tel:2394861170"
                      className="text-2xl font-bold text-garbagio-accent hover:text-garbagio-accent/80 transition-colors"
                    >
                      (239) 486-1170
                    </a>
                  </div>
                </div>
                <p className="text-gray-600">Call for the fastest service or to request same-day availability.</p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-garbagio-gold/10 rounded-lg">
                    <Mail className="h-8 w-8 text-garbagio-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-garbagio-background">Email</h3>
                    <a
                      href="mailto:garbaggioservices@gmail.com"
                      className="text-lg font-semibold text-garbagio-accent hover:text-garbagio-accent/80 transition-colors"
                    >
                      garbaggioservices@gmail.com
                    </a>
                  </div>
                </div>
                <p className="text-gray-600">Send photos of junk or cleanouts for the most accurate estimate.</p>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-garbagio-brown/10 rounded-lg">
                    <Clock className="h-8 w-8 text-garbagio-brown" />
                  </div>
                  <h3 className="text-xl font-bold text-garbagio-background">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-garbagio-background">Monday – Saturday:</span>
                    <span className="text-garbagio-accent font-semibold">7:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-garbagio-background">Sunday:</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  *Emails and messages may be submitted anytime and will be responded to on the next business day.
                </p>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-garbagio-accent/10 rounded-lg">
                    <MapPin className="h-8 w-8 text-garbagio-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-garbagio-background">Service Area</h3>
                </div>
                <p className="font-semibold text-garbagio-background mb-3">
                  Proudly serving all of Southwest Florida, including:
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-garbagio-accent">• Lee County:</span>
                    <span className="text-gray-600 ml-2">Fort Myers, Cape Coral, Bonita Springs, Sanibel</span>
                  </div>
                  <div>
                    <span className="font-semibold text-garbagio-accent">• Collier County:</span>
                    <span className="text-gray-600 ml-2">Naples, Marco Island, Golden Gate</span>
                  </div>
                  <div>
                    <span className="font-semibold text-garbagio-accent">• Charlotte County:</span>
                    <span className="text-gray-600 ml-2">Port Charlotte, Punta Gorda, Englewood</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-garbagio-background mb-2">Get Your Free Estimate</h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you with a personalized quote.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="text-garbagio-background font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-garbagio-accent focus:ring-garbagio-accent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-garbagio-background font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-garbagio-accent focus:ring-garbagio-accent"
                      placeholder="(239) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-garbagio-background font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-garbagio-accent focus:ring-garbagio-accent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="serviceAddress" className="text-garbagio-background font-semibold">
                    Service Address or City *
                  </Label>
                  <Input
                    id="serviceAddress"
                    name="serviceAddress"
                    type="text"
                    required
                    value={formData.serviceAddress}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-garbagio-accent focus:ring-garbagio-accent"
                    placeholder="123 Main St, Fort Myers, FL or just city name"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-garbagio-background font-semibold">
                    Message / Job Description *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 border-gray-300 focus:border-garbagio-accent focus:ring-garbagio-accent"
                    placeholder="Describe what you need removed (furniture, appliances, cleanout, etc.) and any special requirements..."
                  />
                </div>

                <div>
                  <Label htmlFor="photos" className="text-garbagio-background font-semibold">
                    Photo Upload (Optional)
                  </Label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-garbagio-accent transition-colors">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="photos"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-garbagio-accent hover:text-garbagio-accent/80"
                        >
                          <span>Upload photos</span>
                          <input
                            id="photos"
                            name="photos"
                            type="file"
                            multiple
                            accept="image/*"
                            className="sr-only"
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
                    </div>
                  </div>
                  {selectedFiles.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm text-garbagio-accent font-semibold">
                        {selectedFiles.length} file(s) selected:
                      </p>
                      <ul className="text-sm text-gray-600">
                        {selectedFiles.map((file, index) => (
                          <li key={index}>• {file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-garbagio-accent hover:bg-garbagio-accent/90 text-white text-lg py-6 h-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message & Get Free Estimate
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-garbagio-background rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-garbagio-gold mb-4">"Garbaggio, Junk's Gone – Job Done!"</h3>
              <p className="text-garbagio-light/80 text-lg mb-6">
                Contact Garbaggio today for a free estimate or to schedule a pickup. We're here to help you reclaim your
                space!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-garbagio-accent hover:bg-garbagio-accent/90 text-white" asChild>
                  <a href="tel:2394861170">
                    <Phone className="mr-2 h-4 w-4" />
                    Call (239) 486-1170
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-garbagio-gold text-garbagio-gold hover:bg-garbagio-gold/10"
                  asChild
                >
                  <a href="mailto:garbaggioservices@gmail.com">
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
  )
}
