"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, Send, Upload, CheckCircle, Calendar, Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitEstimateForm } from "@/app/actions/estimate"

// Generate availability for the next 30 days with all 9 time slots available every day
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
  for (let i = 1; i <= 30; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)

    // Skip Sundays (day 0) for this example
    if (date.getDay() !== 0) {
      const dateString = date.toISOString().split("T")[0]
      // Make ALL time slots available for every date
      availability[dateString] = [...timeSlots]
    }
  }

  return availability
}

const mockAvailability = generateAvailability()

interface EstimateFormProps {
  onClose?: () => void
  isModal?: boolean
}

interface UploadedFile {
  file: File
  preview: string
  id: string
}

export function EstimateForm({ onClose, isModal = false }: EstimateFormProps) {
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // File upload handlers
  const validateFile = (file: File): string | null => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/heic", "image/heif"]
    const maxSize = 10 * 1024 * 1024 // 10MB

    if (!validTypes.includes(file.type.toLowerCase())) {
      return "Please upload JPEG, PNG, or HEIC images only."
    }

    if (file.size > maxSize) {
      return "File size must be less than 10MB."
    }

    return null
  }

  const processFiles = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files)
    const newFiles: UploadedFile[] = []

    fileArray.forEach((file) => {
      const error = validateFile(file)
      if (!error) {
        const id = Math.random().toString(36).substr(2, 9)
        const preview = URL.createObjectURL(file)
        newFiles.push({ file, preview, id })
      } else {
        alert(`Error with ${file.name}: ${error}`)
      }
    })

    setUploadedFiles((prev) => [...prev, ...newFiles])
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
      // Clean up object URL
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

      const result = await submitEstimateForm(formDataToSubmit)

      if (result.success) {
        setIsSubmitted(true)
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
          // Clean up file previews
          uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview))
          setUploadedFiles([])
          setSelectedDate("")
          setSelectedTime("")
          if (onClose) onClose()
        }, 3000)
      } else {
        setSubmitError(result.error || "Failed to submit form. Please try again.")
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred. Please try again or call us directly.")
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
      days.push(<div key={`empty-${i}`} className="h-10"></div>)
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
            h-10 w-full rounded-md text-sm font-medium transition-all duration-200 border
            ${
              isSelected
                ? "bg-garbagio-accent text-white border-garbagio-accent shadow-md"
                : isAvailable && !isPast
                  ? "bg-white border-garbagio-gold text-garbagio-background hover:bg-garbagio-gold/10 hover:border-garbagio-accent cursor-pointer"
                  : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
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
            className="p-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 text-garbagio-background" />
          </button>
          <h3 className="text-lg font-semibold text-garbagio-background">
            {monthNames[month]} {year}
          </h3>
          <button
            type="button"
            onClick={() => setCurrentMonth(new Date(year, month + 1))}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
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

        <div className="mt-3 text-xs text-gray-500 text-center">
          <span className="inline-block w-3 h-3 bg-garbagio-gold rounded mr-1"></span>
          Available dates
        </div>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className={`${isModal ? "p-6" : "py-16"} bg-gradient-to-b from-garbagio-light to-white`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-800 mb-4">Estimate Request Sent Successfully!</h2>
            <p className="text-green-700 mb-4">
              Thank you for your estimate request. We've received your information and will get back to you within 24
              hours with a detailed quote.
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
            <p className="text-green-600 font-semibold">For immediate assistance, call us at (239) 230-6200</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${isModal ? "p-6" : "py-16"} bg-gradient-to-b from-garbagio-light to-white`}>
      <div className="max-w-4xl mx-auto">
        <div className={`${isModal ? "" : "text-center mb-12"}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-garbagio-background mb-4">Get Your Free Estimate</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fill out the form below and upload photos for the most accurate estimate. We'll get back to you within 24
            hours with transparent pricing.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">{submitError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-garbagio-background border-b border-gray-200 pb-2">
                Contact Information
              </h3>
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
                  Job Description *
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

              {/* Enhanced Photo Upload */}
              <div>
                <Label className="text-garbagio-background font-semibold">
                  Photo Upload (Recommended for accurate estimates)
                </Label>
                <div
                  className={`mt-1 border-2 border-dashed rounded-lg p-6 transition-colors cursor-pointer ${
                    isDragOver
                      ? "border-garbagio-accent bg-garbagio-accent/5"
                      : "border-gray-300 hover:border-garbagio-accent"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("photos")?.click()}
                >
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-garbagio-accent">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">JPEG, PNG, HEIC up to 10MB each</p>
                    </div>
                  </div>
                  <input
                    id="photos"
                    type="file"
                    multiple
                    accept="image/jpeg,image/jpg,image/png,image/heic,image/heif"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </div>

                {/* File Previews */}
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
            </div>

            {/* Scheduling Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-garbagio-background border-b border-gray-200 pb-2 mb-4">
                  Schedule Your Service (Optional)
                </h3>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 text-lg">⚠️</span>
                    <p className="text-orange-800 text-sm">
                      <strong>Requested dates are subject to approval.</strong> You will receive a confirmation after
                      your quote is approved.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <Label className="text-garbagio-background font-semibold mb-3 block">
                    <Calendar className="inline h-4 w-4 mr-2" />
                    Select Date
                  </Label>
                  {renderCalendar()}
                </div>

                <div>
                  <Label className="text-garbagio-background font-semibold mb-3 block">
                    <Clock className="inline h-4 w-4 mr-2" />
                    Select Arrival Time Window
                  </Label>
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    {selectedDate ? (
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
                    ) : (
                      <p className="text-gray-500 text-center py-8">Please select a date first</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-garbagio-accent hover:bg-garbagio-accent/90 text-white text-lg py-6 h-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending Request...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Submit Estimate Request
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
