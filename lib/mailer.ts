import FormData from 'form-data';
import fs from 'fs';
import fetch from 'node-fetch';

const API_TOKEN = process.env.MAILERSEND_API_TOKEN!;
const FROM = process.env.MAILERSEND_FROM!;
const TO = process.env.MAILERSEND_TO!;

export async function sendEmail({
  name,
  email,
  phone,
  requestedDate,
  description,
  imagePath,
  imageOriginalName,
}: {
  name: string;
  email: string;
  phone: string;
  requestedDate: string;
  description: string;
  imagePath?: string;
  imageOriginalName?: string;
}) {
  const form = new FormData();

  form.append('from', JSON.stringify({ email: FROM, name: 'Garbaggio' }));
  form.append('to', JSON.stringify([{ email: TO }]));
  form.append('subject', 'New Estimate Request');
  form.append(
    'text',
    `
Name: ${name}
Email: ${email}
Phone: ${phone}
Requested Date: ${requestedDate}
Description: ${description}
    `.trim()
  );

  if (imagePath && imageOriginalName) {
    form.append('attachments', fs.createReadStream(imagePath), {
      filename: imageOriginalName,
    });
  }

  const res = await fetch('https://api.mailersend.com/v1/email', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      ...form.getHeaders(),
    },
    body: form,
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`MailerSend error: ${res.status} ${errText}`);
  }
}
