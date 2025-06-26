import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, date, description, images } = data;

    const htmlContent = `
      <h2>📩 New Estimate Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Requested Date:</strong> ${date}</p>
      <p><strong>Description:</strong> ${description}</p>
      ${
        images?.length
          ? `<p><strong>Images:</strong><br/>${images.map(
              (url: string) => `<a href="${url}" target="_blank">${url}</a>`
            ).join("<br/>")}</p>`
          : `<p><strong>Images:</strong> No images uploaded.</p>`
      }
    `;

    await resend.emails.send({
      from: "Garbaggio Website <onboarding@resend.dev>", // Temporary default sender
      to: "junkgonejobdone@gmail.com",                    // ✅ Your real destination inbox
      subject: "🧹 New Estimate Request - Garbaggio Junk Removal",
      html: htmlContent,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
