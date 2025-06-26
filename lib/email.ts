import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface EstimateFormData {
  fullName: string
  phone: string
  email: string
  serviceAddress: string
  message: string
  selectedDate?: string
  selectedTime?: string
  files?: File[]
}

export async function sendEstimateEmail(formData: EstimateFormData) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Garbaggio Website <noreply@yourdomain.com>", // You'll need to verify a domain in Resend
      to: ["junkgonejobdone@gmail.com"],
      subject: `New Estimate Request from ${formData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2A2726; color: #E9C87E; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Estimate Request</h1>
            <p style="margin: 5px 0 0 0; color: #F5F5F5;">Garbaggio Junk Removal</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #2A2726; border-bottom: 2px solid #E05D65; padding-bottom: 10px;">Customer Information</h2>
            
            <table style="width: 100%; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2A2726;">Name:</td>
                <td style="padding: 8px 0;">${formData.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2A2726;">Phone:</td>
                <td style="padding: 8px 0;">${formData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2A2726;">Email:</td>
                <td style="padding: 8px 0;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2A2726;">Service Address:</td>
                <td style="padding: 8px 0;">${formData.serviceAddress}</td>
              </tr>
              ${
                formData.selectedDate
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2A2726;">Requested Date:</td>
                <td style="padding: 8px 0;">${formData.selectedDate}</td>
              </tr>
              `
                  : ""
              }
              ${
                formData.selectedTime
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2A2726;">Requested Time:</td>
                <td style="padding: 8px 0;">${formData.selectedTime}</td>
              </tr>
              `
                  : ""
              }
            </table>

            <h3 style="color: #2A2726; border-bottom: 1px solid #E9C87E; padding-bottom: 5px;">Job Description</h3>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #E05D65;">
              ${formData.message.replace(/\n/g, "<br>")}
            </div>

            ${
              formData.files && formData.files.length > 0
                ? `
            <h3 style="color: #2A2726; border-bottom: 1px solid #E9C87E; padding-bottom: 5px; margin-top: 20px;">Uploaded Photos</h3>
            <p style="color: #666;">Customer uploaded ${formData.files.length} photo(s). Files will be attached to this email.</p>
            `
                : ""
            }
          </div>

          <div style="background-color: #2A2726; color: #F5F5F5; padding: 15px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">
              <strong style="color: #E9C87E;">Garbaggio Junk Removal</strong><br>
              "Junk Gone, Job Done!"<br>
              📞 (239) 230-6200 | 📧 junkgonejobdone@gmail.com
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Email send error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Email send error:", error)
    return { success: false, error: "Failed to send email" }
  }
}

export async function sendContactEmail(formData: EstimateFormData) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Garbaggio Website <noreply@yourdomain.com>", // You'll need to verify a domain in Resend
      to: ["junkgonejobdone@gmail.com"],
      subject: `New Contact Form Message from ${formData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2A2726; color: #E9C87E; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Message</h1>
            <p style="margin: 5px 0 0 0; color: #F5F5F5;">Garbaggio Junk Removal</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #2A2726; border-bottom: 2px solid #E05D65; padding-bottom: 10px;">Customer Information</h2>
            
            <table style="width: 100%; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2A2726;">Name:</td>
                <td style="padding: 8px 0;">${formData.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2A2726;">Phone:</td>
                <td style="padding: 8px 0;">${formData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2A2726;">Email:</td>
                <td style="padding: 8px 0;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2A2726;">Service Address:</td>
                <td style="padding: 8px 0;">${formData.serviceAddress}</td>
              </tr>
              ${
                formData.selectedDate
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2A2726;">Requested Date:</td>
                <td style="padding: 8px 0;">${formData.selectedDate}</td>
              </tr>
              `
                  : ""
              }
              ${
                formData.selectedTime
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2A2726;">Requested Time:</td>
                <td style="padding: 8px 0;">${formData.selectedTime}</td>
              </tr>
              `
                  : ""
              }
            </table>

            <h3 style="color: #2A2726; border-bottom: 1px solid #E9C87E; padding-bottom: 5px;">Message</h3>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #E05D65;">
              ${formData.message.replace(/\n/g, "<br>")}
            </div>

            ${
              formData.files && formData.files.length > 0
                ? `
            <h3 style="color: #2A2726; border-bottom: 1px solid #E9C87E; padding-bottom: 5px; margin-top: 20px;">Uploaded Photos</h3>
            <p style="color: #666;">Customer uploaded ${formData.files.length} photo(s). Files will be attached to this email.</p>
            `
                : ""
            }
          </div>

          <div style="background-color: #2A2726; color: #F5F5F5; padding: 15px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">
              <strong style="color: #E9C87E;">Garbaggio Junk Removal</strong><br>
              "Junk Gone, Job Done!"<br>
              📞 (239) 230-6200 | 📧 junkgonejobdone@gmail.com
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Email send error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Email send error:", error)
    return { success: false, error: "Failed to send email" }
  }
}
