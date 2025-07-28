"use client"

import React, { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Upload,
  Send,
  X,
  CheckCircle,
} from "lucide-react"
import imageCompression from "browser-image-compression"
import { submitEstimateForm } from "@/app/actions/estimate"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

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
  for (let i = 0; i < 90; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const dateString = date.toISOString().split("T")[0]
    availability[dateString] = [...timeSlots]
  }
  return availability
}

const mockAvailability = generateAvailability()

interface EstimateFormProps {
  onClose?: () => void
  isModal?: boolean
}

export function EstimateForm({ onClose, isModal = false }: EstimateFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceAddress: "",
    message: "",
  })
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      const totalFiles = [...selectedFiles, ...newFiles]

      if (totalFiles.length > 8) {
        alert("You can upload a maximum of 8 images.")
        return
      }

      setSelectedFiles(totalFiles)
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const getDaysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  const getFirstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const formatDate = (year: number, month: number, day: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`

  const isDateAvailable = (dateString: string) =>
    mockAvailability[dateString] && mockAvailability[dateString].length > 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const payload = new FormData()
      payload.append("fullName", formData.fullName)
      payload.append("phone", formData.phone)
      payload.append("email", formData.email)
      payload.append("serviceAddress", formData.serviceAddress)
      payload.append("message", formData.message)
      payload.append("preferredDate", selectedDate)
      payload.append("preferredTime", selectedTime)

      // Compress large images before adding to FormData
const compressionOptions = {
  maxSizeMB: 1.5,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
}

for (const file of selectedFiles) {
  try {
    const compressed = await imageCompression(file, compressionOptions)
    payload.append("images", compressed)
  } catch (err) {
    console.error(`Failed to compress ${file.name}:`, err)
    payload.append("images", file) // fallback to original
  }
}

      const res = await submitEstimateForm(payload)
      if (res.success) {
        setIsSubmitted(true)
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          serviceAddress: "",
          message: "",
        })
        setSelectedDate("")
        setSelectedTime("")
        setSelectedFiles([])
      } else {
        setSubmitError("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Submission failed:", error)
      setSubmitError("Submission failed. Please detach photos and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderCalendar = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const today = new Date()
    const todayString = formatDate(today.getFullYear(), today.getMonth(), today.getDate())
    const days = []

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = formatDate(year, month, day)
      const isAvailable = isDateAvailable(dateString)
      const isPast = dateString < todayString
      const isSelected = selectedDate === dateString

      days.push(
        <button
          key={day}
          type="button"
          disabled={!isAvailable || isPast}
          onClick={() => {
            if (!isPast && isAvailable) {
              setSelectedDate(dateString)
              setSelectedTime("")
            }
          }}
          className={`h-10 w-full rounded-md text-sm font-medium transition-all border ${
            isSelected
              ? "bg-garbagio-accent text-white border-garbagio-accent shadow-md"
              : isAvailable && !isPast
              ? "bg-white border-garbagio-gold text-garbagio-background hover:bg-garbagio-gold/10 hover:border-garbagio-accent"
              : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
          }`}
        >
          {day}
        </button>
      )
    }

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <button type="button" onClick={() => setCurrentMonth(new Date(year, month - 1))}>
            <ChevronLeft className="h-5 w-5 text-garbagio-background" />
          </button>
          <h3 className="text-lg font-semibold text-garbagio-background">
            {currentMonth.toLocaleString("default", { month: "long" })} {year}
          </h3>
          <button type="button" onClick={() => setCurrentMonth(new Date(year, month + 1))}>
            <ChevronRight className="h-5 w-5 text-garbagio-background" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2 text-center text-sm font-medium text-gray-600">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">{days}</div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
<Input
  id="phone"
  name="phone"
  type="tel"
  required
  value={formData.phone}
  onChange={(e) => {
    const input = e.target.value.replace(/\D/g, "")
    const formatted = input
      .replace(/^(\d{3})(\d{0,3})(\d{0,4}).*/, (_, a, b, c) =>
        b ? (c ? `(${a}) ${b}-${c}` : `(${a}) ${b}`) : `(${a}`
      )
    setFormData((prev) => ({ ...prev, phone: formatted }))
  }}
  className="mt-1 border-gray-300 focus:border-garbagio-accent focus:ring-garbagio-accent"
  placeholder="(239) 555-0123"
/>

        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
<Input
  id="email"
  name="email"
  type="email"
  required
  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
  value={formData.email}
  onChange={handleInputChange}
  onInvalid={(e) => {
    e.currentTarget.setCustomValidity("Please enter a valid email address (e.g., user@example.com)")
  }}
  onInput={(e) => {
    e.currentTarget.setCustomValidity("") // Reset error once user types again
  }}
  className="..."
  placeholder="you@example.com"
/>

        </div>
        <div>
          <Label htmlFor="serviceAddress">Service Address</Label>
          <Input
            id="serviceAddress"
            name="serviceAddress"
            value={formData.serviceAddress}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Job Description</Label>
<Textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={(e) => {
    const words = e.target.value.split(/\s+/).filter(Boolean)
    if (words.length <= 300) {
      setFormData((prev) => ({ ...prev, message: e.target.value }))
    }
  }}
  rows={4}
  required
/>
<p className="text-sm text-gray-500 mt-1">
  {formData.message.trim().split(/\s+/).filter(Boolean).length} / 300 words
</p>

      </div>

      <div>
        <Label>Choose Preferred Date</Label>
        {renderCalendar()}
      </div>

      {selectedDate && (
        <div>
          <Label>Select Time Slot</Label>
          <Select value={selectedTime} onValueChange={setSelectedTime} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              {mockAvailability[selectedDate]?.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

<div>
  <Label htmlFor="images" className="block text-garbagio-background font-semibold mb-1">
    Upload Images (optional)
  </Label>

  <label
    htmlFor="images"
    className={`inline-flex items-center px-4 py-2 text-white text-sm font-semibold rounded-md shadow cursor-pointer transition-colors ${
      selectedFiles.length >= 8
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-garbagio-accent hover:bg-garbagio-accent/90"
    }`}
  >
    Choose Files
    <input
      type="file"
      id="images"
      multiple
      accept="image/*"
      onChange={handleFileChange}
      disabled={selectedFiles.length >= 8}
      className="sr-only"
    />
  </label>

  <ul className="mt-2 space-y-1 text-sm">
    {selectedFiles.map((file, index) => (
      <li key={index} className="flex justify-between items-center">
        {file.name}
        <button type="button" onClick={() => removeFile(index)}>
          <X className="h-4 w-4 text-red-500" />
        </button>
      </li>
    ))}
  </ul>

  {selectedFiles.length >= 8 && (
    <p className="text-xs text-red-600 mt-1">Maximum of 8 images can be uploaded.</p>
  )}
</div>


      {submitError && <p className="text-red-600">{submitError}</p>}
      {isSubmitted && (
        <div className="flex items-center gap-2 text-green-600 font-medium">
          <CheckCircle className="h-5 w-5" /> Estimate submitted successfully!
        </div>
      )}

      <Button type="submit" className="mt-4" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : <><Send className="h-4 w-4 mr-2" /> Submit Estimate</>}
      </Button>
    </form>
  )
}
