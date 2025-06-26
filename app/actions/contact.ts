"use server"

import { sendContactEmail } from "@/lib/email"

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      fullName: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      serviceAddress: formData.get("serviceAddress") as string,
      message: formData.get("message") as string,
      selectedDate: (formData.get("selectedDate") as string) || undefined,
      selectedTime: (formData.get("selectedTime") as string) || undefined,
    }

    // Validate required fields
    if (!data.fullName || !data.phone || !data.email || !data.serviceAddress || !data.message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Handle file uploads
    const files: File[] = []
    const fileEntries = formData.getAll("photos") as File[]

    for (const file of fileEntries) {
      if (file.size > 0) {
        files.push(file)
      }
    }

    // Send email
    const emailResult = await sendContactEmail({
      ...data,
      files: files.length > 0 ? files : undefined,
    })

    if (!emailResult.success) {
      return {
        success: false,
        error: "Failed to send message. Please try again or call us directly.",
      }
    }

    return {
      success: true,
      message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again or call us directly at (239) 230-6200.",
    }
  }
}
