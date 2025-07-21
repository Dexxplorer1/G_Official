import { NextResponse } from "next/server";
import axios from "axios";

// Helper to convert File to Buffer
async function fileToBuffer(file: File): Promise<Buffer> {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const serviceAddress = formData.get("serviceAddress")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const selectedDate = formData.get("preferredDate")?.toString() || "";
    const selectedTime = formData.get("preferredTime")?.toString() || "";

    // Prepare attachments array
    const attachments: any[] = [];
    const files = formData.getAll("images") as File[];

    for (const file of files) {
      const buffer = await fileToBuffer(file);
      attachments.push({
        content: buffer.toString("base64"),
        filename: file.name,
        disposition: "attachment",
      });
    }

    const htmlContent = `
      <h2>📩 New Estimate Request</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service Address:</strong> ${serviceAddress}</p>
      <p><strong>Requested Date:</strong> ${selectedDate}</p>
      <p><strong>Preferred Time:</strong> ${selectedTime}</p>
      <p><strong>Job Description:</strong> ${message}</p>
    `;

    const mailResponse = await axios.post(
      "https://api.mailersend.com/v1/email",
      {
        from: {
          email: process.env.FROM_EMAIL!,
          name: "Garbaggio Website",
        },
        to: [
          {
            email: process.env.TO_EMAIL!,
            name: "Garbaggio Team",
          },
        ],
        subject: "🧹 New Estimate Request - Garbaggio Junk Removal",
        html: htmlContent,
        attachments,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("MailerSend response:", mailResponse.status, mailResponse.data);

    if (mailResponse.status === 202) {
      return NextResponse.json({ message: "Email sent successfully" });
    } else {
      return NextResponse.json({ message: "MailerSend error" }, { status: 500 });
    }

  } catch (error) {
    console.error("❌ Email error:", error);
    return NextResponse.json({ message: "Email failed to send" }, { status: 500 });
  }
}
