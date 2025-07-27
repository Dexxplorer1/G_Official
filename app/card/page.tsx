import Image from "next/image";
import Link from "next/link";

export default function VirtualCard() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-[#1c1b1b] text-[#f5c97b] p-6">
      {/* Full-width Logo Banner */}
      <div className="w-full max-w-2xl mb-10">
        <Image
          src="/garbaggio-logo.jpg"
          alt="Garbaggio Logo"
          width={1000}
          height={300}
          className="w-full h-auto object-contain shadow-lg"
        />
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-col items-center space-y-3 w-full max-w-sm">
        <a href="/Garbaggio-Contact.vcf" download className="w-full bg-[#e05252] text-white py-2 rounded-lg text-center font-semibold text-base hover:bg-[#d94343] transition">Save to Contacts</a>
        <a href="tel:2394861170" className="w-full bg-[#e05252] text-white py-2 rounded-lg text-center font-semibold text-base hover:bg-[#d94343] transition">Call</a>
        <a href="sms:2394861170" className="w-full bg-[#e05252] text-white py-2 rounded-lg text-center font-semibold text-base hover:bg-[#d94343] transition">Text</a>
        <a href="mailto:Junkgonejobdone@gmail.com" className="w-full bg-[#f5c97b] text-black py-2 rounded-lg text-center font-semibold text-base hover:bg-[#f0bd5e] transition">Email</a>
        <Link href="/estimate" className="w-full bg-[#f5c97b] text-black py-2 rounded-lg text-center font-semibold text-base hover:bg-[#f0bd5e] transition">Request Estimate</Link>
        <a href="https://garbaggioservices.com" target="_blank" className="w-full bg-[#f5c97b] text-black py-2 rounded-lg text-center font-semibold text-base hover:bg-[#f0bd5e] transition">Visit Website</a>
      </div>

      {/* Service Area */}
      <p className="text-lg font-extrabold text-[#e05252] mt-8 text-center tracking-wide uppercase">Serving All of Southwest Florida</p>

      {/* QR Code */}
      <div className="mt-4 flex flex-col items-center">
        <Image
          src="/qr-contact.png"
          alt="QR code to contact page"
          width={140}
          height={140}
          className="rounded-md shadow-lg"
        />
      </div>
    </main>
  );
}
