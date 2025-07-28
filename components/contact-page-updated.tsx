"use client"

import type React from "react"
import imageCompression from "browser-image-compression"
import { useState, useCallback } from "react"
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  Upload,
  CheckCircle,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitContactForm } from "@/app/actions/contact"
import { ShareCTA } from "./share-cta"

// Generate availability for the next 90 days with all 9 time slots available every day
const generateAvailability = () => {
  const availability: Record<string, string[]> = {}
  const timeSlots = [
    "7:00 AM - 9:00 AM",
    "9:00 AM - 11:00 AM",
    "11:00 AM - 1:00 PM",
    "1:00 PM - 3:00 PM",
    "3:00 PM - 5:00 PM",
    "5:00 PM - 7:00 PM",
    "7:00 PM - 9:00 PM",
    "9:00 PM - 11:00 PM",
    "11:00 PM - 12:00 AM",
  ]

  const today = new Date()
  for (let i = 1; i <= 90; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const dateString = date.toISOString().split("T")[0]
    availability[dateString] = [...timeSlots]
  }

  return availability
}

const mockAvailability = generateAvailability()

interface UploadedFile {
  file: File
  preview: string
  id: string
}

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceAddress: "",
    message: "",
  })
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const [submitError, setSubmitError] = useState<string>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateFile = (file: File): string | null => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/heic", "image/heif"]
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (!validTypes.includes(file.type.toLowerCase())) return "Please upload JPEG, PNG, or HEIC images only."
    if (file.size > maxSize) return "File size must be less than 10MB."
    return null
  }

const processFiles = useCallback(async (files: FileList | File[]) => {
  const fileArray = Array.from(files)
  const newFiles: UploadedFile[] = []

  for (const file of fileArray) {
    const error = validateFile(file)
    if (!error) {
      try {
        const compressed = await imageCompression(file, {
          maxSizeMB: 1.5,         // Compress to ~1.5MB max
          maxWidthOrHeight: 1920, // Resize to fit (optional)
          useWebWorker: true,
        })

        const id = Math.random().toString(36).substr(2, 9)
        const preview = URL.createObjectURL(compressed)

        newFiles.push({ file: compressed, preview, id })
      } catch (compressionError) {
        console.error("Compression failed:", compressionError)
      }
    } else {
      alert(`Error with ${file.name}: ${error}`)
    }
  }

  setUploadedFiles((prev) => {
    const totalFiles = prev.length + newFiles.length
    if (totalFiles > 8) {
      alert("You can upload up to 8 images only.")
      const availableSlots = 8 - prev.length
      return [...prev, ...newFiles.slice(0, availableSlots)]
    }
    return [...prev, ...newFiles]
  })
}, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files)
    }
  }

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => {
      const updated = prev.filter((f) => f.id !== id)
      const fileToRemove = prev.find((f) => f.id === id)
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview)
      }
      return updated
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const formDataToSubmit = new FormData()

      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value)
      })

      // Add optional scheduling data
      if (selectedDate) formDataToSubmit.append("selectedDate", selectedDate)
      if (selectedTime) formDataToSubmit.append("selectedTime", selectedTime)

      // Add files
      uploadedFiles.forEach((uploadedFile) => {
        formDataToSubmit.append("photos", uploadedFile.file)
      })

      const result = await submitContactForm(formDataToSubmit)

      if (result.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            fullName: "",
            phone: "",
            email: "",
            serviceAddress: "",
            message: "",
          })
          uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview))
          setUploadedFiles([])
          setSelectedDate("")
          setSelectedTime("")
        }, 3000)
      } else {
        setSubmitError(result.error || "Failed to submit form. Please try again.")
      }
    } catch (error) {
      setSubmitError("An error occurred. Please detach images or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  const isDateAvailable = (dateString: string) => {
    return mockAvailability[dateString] && mockAvailability[dateString].length > 0
  }

  const getAvailableTimeSlots = (dateString: string) => {
    return mockAvailability[dateString] || []
  }

  const renderCalendar = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const today = new Date()
    const todayString = formatDate(today.getFullYear(), today.getMonth(), today.getDate())

    const days = []
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = formatDate(year, month, day)
      const isAvailable = isDateAvailable(dateString)
      const isPast = dateString <= todayString
      const isSelected = selectedDate === dateString

      days.push(
        <button
          key={day}
          type="button"
          disabled={!isAvailable || isPast}
          onClick={() => {
            if (isAvailable && !isPast) {
              setSelectedDate(dateString)
              setSelectedTime("")
            }
          }}
          className={` 
            h-12 w-full rounded-lg text-sm font-medium transition-all
            ${
              isSelected
                ? "bg-garbagio-accent text-white"
                : isAvailable && !isPast
                  ? "bg-white border border-garbagio-gold text-garbagio-background hover:bg-garbagio-gold/10"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          {day}
        </button>,
      )
    }

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => setCurrentMonth(new Date(year, month - 1))}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-garbagio-background" />
          </button>
          <h3 className="text-lg font-semibold text-garbagio-background">
            {monthNames[month]} {year}
          </h3>
          <button
            type="button"
            onClick={() => setCurrentMonth(new Date(year, month + 1))}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-garbagio-background" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="h-8 flex items-center justify-center text-sm font-medium text-gray-600">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">{days}</div>
      </div>
    )
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
              {selectedDate && selectedTime && (
                <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-4">
                  <p className="text-green-800 font-semibold">
                    Requested Appointment: {selectedDate} at {selectedTime}
                  </p>
                  <p className="text-green-700 text-sm">
                    This appointment is pending approval and will be confirmed with your quote.
                  </p>
                </div>
              )}
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
                      href="mailto:Junkgonejobdone@gmail.com"
                      className="text-lg font-semibold text-garbagio-accent hover:text-garbagio-accent/80 transition-colors"
                    >
                      Junkgonejobdone@gmail.com
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
                    <span className="text-garbagio-accent font-semibold">8:00 AM – 4:00 PM</span>
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

              {/* Share CTA in sidebar */}
              <ShareCTA variant="compact" />
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-garbagio-background mb-2">Get Your Free Estimate</h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you with a personalized quote.
                </p>
              </div>

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700">{submitError}</p>
                </div>
              )}

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
  onChange={(e) => {
    const rawValue = e.target.value.replace(/\D/g, "").slice(0, 10)
    let formatted = rawValue

    if (rawValue.length >= 7) {
      formatted = `${rawValue.slice(0, 3)}-${rawValue.slice(3, 6)}-${rawValue.slice(6)}`
    } else if (rawValue.length >= 4) {
      formatted = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`
    }

    handleInputChange({
      ...e,
      target: {
        ...e.target,
        name: "phone",
        value: formatted,
      },
    })
  }}
  className="mt-1 border-gray-300 focus:border-garbagio-accent focus:ring-garbagio-accent"
  placeholder="239-555-0123"
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
    onChange={(e) => {
      const input = e.target.value
      const words = input.trim().split(/\s+/)
      if (words.length <= 200) {
        handleInputChange(e)
      } else {
        const trimmed = words.slice(0, 200).join(" ")
        handleInputChange({
          ...e,
          target: {
            ...e.target,
            value: trimmed,
            name: "message",
          },
        })
      }
    }}
    rows={4}
    className="mt-1 border-gray-300 focus:border-garbagio-accent focus:ring-garbagio-accent"
    placeholder="Describe what you need removed (furniture, appliances, cleanout, etc.) and any special requirements..."
  />
  <p className="text-xs text-gray-500 mt-1">
    {formData.message.trim().split(/\s+/).filter(Boolean).length}/200 words
  </p>
</div>


                <div>
                  <Label htmlFor="photos" className="text-garbagio-background font-semibold">
                    Photo Upload (Optional)
                  </Label>
                  <div
                    className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-colors cursor-pointer ${
                      isDragOver
                        ? "border-garbagio-accent bg-garbagio-accent/5"
                        : "border-gray-300 hover:border-garbagio-accent"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById("photos")?.click()}
                  >
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
  onChange={handleFileSelect}
  disabled={uploadedFiles.length >= 8}
/>

                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
                    </div>
                  </div>
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-garbagio-background mb-3">
                        Uploaded Images ({uploadedFiles.length})
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {uploadedFiles.map((uploadedFile) => (
                          <div key={uploadedFile.id} className="relative group">
                            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                              <img
                                src={uploadedFile.preview || "/placeholder.svg"}
                                alt={uploadedFile.file.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                removeFile(uploadedFile.id)
                              }}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="h-4 w-4" />
                            </button>
                            <p className="mt-1 text-xs text-gray-600 truncate">{uploadedFile.file.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Scheduling Section */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-garbagio-background border-b border-gray-200 pb-2 mb-4">
                      Schedule Your Service (Optional)
                    </h4>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-600 text-lg">⚠️</span>
                        <p className="text-orange-800 text-sm">
                          <strong>Requested dates are subject to approval.</strong> You will receive a confirmation
                          after your quote is approved.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <Label className="text-garbagio-background font-semibold mb-3 block">
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Select Date
                      </Label>
                      {renderCalendar()}
                    </div>

                    {selectedDate && (
                      <div>
                        <Label className="text-garbagio-background font-semibold mb-3 block">
                          <Clock className="inline h-4 w-4 mr-2" />
                          Select Arrival Time Window
                        </Label>
                        <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                          <div className="space-y-3">
                            <p className="text-sm text-garbagio-background font-medium">
                              Available arrival windows for {selectedDate}:
                            </p>
                            <Select value={selectedTime} onValueChange={setSelectedTime}>
                              <SelectTrigger className="w-full border-gray-300 focus:border-garbagio-accent focus:ring-garbagio-accent">
                                <SelectValue placeholder="Choose a time slot" />
                              </SelectTrigger>
                              <SelectContent>
                                {getAvailableTimeSlots(selectedDate).map((timeSlot) => (
                                  <SelectItem key={timeSlot} value={timeSlot}>
                                    {timeSlot}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {selectedTime && (
                              <div className="bg-garbagio-accent/10 border border-garbagio-accent/20 rounded-lg p-3">
                                <p className="text-garbagio-accent font-semibold text-sm">
                                  Selected: {selectedDate} at {selectedTime}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <Button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-garbagio-accent hover:bg-garbagio-accent/90 text-white text-lg py-2 px-2 sm:py-6 sm:px-6 h-auto leading-tight"
>
  {isSubmitting ? (
    <div className="flex items-center justify-center gap-1 sm:gap-2">
      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
      <span className="text-sm sm:text-lg whitespace-nowrap">Sending Message...</span>
    </div>
  ) : (
    <div className="flex items-center justify-center gap-1 sm:gap-2">
      <Send className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
      <span className="text-sm sm:text-lg leading-tight">
        <span className="block sm:hidden">Send & Get Estimate</span>
        <span className="hidden sm:block">Submit & Get a Free Estimate</span>
      </span>
    </div>
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
  )
}