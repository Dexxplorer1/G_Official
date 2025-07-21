// app/actions/contact.ts
"use server"

const MAILERSEND_API_KEY = process.env.MAILERSEND_API_KEY!
import axios from "axios"

export async function submitContactForm(formData: FormData): Promise<{ success: boolean; error?: string }> {
  try {
    const fields = {
      fullName: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      serviceAddress: formData.get("serviceAddress") as string,
      message: formData.get("message") as string,
      selectedDate: formData.get("selectedDate") as string | null,
      selectedTime: formData.get("selectedTime") as string | null,
    }

    const attachments = formData.getAll("photos") as File[]

    const filesData = await Promise.all(
      attachments.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer())
        return {
          content: buffer.toString("base64"),
          type: file.type,
          filename: file.name,
          disposition: "attachment",
        }
      })
    )

    const emailData = {
      from: {
        email: "no-reply@garbaggioservices.com",
        name: "Garbaggio Contact Form",
      },
      to: [{ email: "junkgonejobdone@gmail.com", name: "Garbaggio" }],
      subject: "New Contact Form Submission – Garbaggio Website",
      text: `
New Contact Message from Garbaggio Website:

Name: ${fields.fullName}
Phone: ${fields.phone}
Email: ${fields.email}
Service Address: ${fields.serviceAddress}

Message:
${fields.message}

${fields.selectedDate && fields.selectedTime ? `Requested Date/Time: ${fields.selectedDate} at ${fields.selectedTime}` : ""}
      `.trim(),
      attachments: filesData,
    }

    await axios.post("https://api.mailersend.com/v1/email", emailData, {
      headers: {
        Authorization: `Bearer ${MAILERSEND_API_KEY}`,
        "Content-Type": "application/json",
      },
    })

    return { success: true }
  } catch (err: any) {
    console.error("MailerSend error:", err?.response?.data || err.message)
    return {
      success: false,
      error: "Failed to send message. Please try again or call us directly.",
    }
  }
}
