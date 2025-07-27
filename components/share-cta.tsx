"use client"

import { useState } from "react"
import { Share2, MessageSquare, Mail, Facebook, Link, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ShareCTAProps {
  variant?: "floating" | "compact" | "inline"
}

export function ShareCTA({ variant = "floating" }: ShareCTAProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== "undefined" ? window.location.origin : "https://garbaggio.com"
  const shareTitle = "Garbaggio Junk Removal - Professional Cleanouts & Hauling"
  const shareText =
    "Need junk removal? Check out Garbaggio - they do amazing cleanouts and hauling in Southwest Florida! Fast, reliable, and professional service."

  const handleSMSShare = () => {
    const smsText = `${shareText} ${shareUrl}`
    const smsUrl = `sms:?body=${encodeURIComponent(smsText)}`
    window.open(smsUrl, "_self")
  }

  const handleEmailShare = () => {
    const subject = encodeURIComponent(shareTitle)
    const body = encodeURIComponent(`${shareText}\n\n${shareUrl}`)
    const emailUrl = `mailto:?subject=${subject}&body=${body}`
    window.open(emailUrl, "_self")
  }

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    window.open(facebookUrl, "_blank", "width=600,height=400")
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = shareUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (variant === "floating") {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="lg"
              className="bg-garbagio-accent hover:bg-garbagio-accent/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 h-auto"
            >
              <Share2 className="h-5 w-5 mr-2" />
              <span className="font-semibold">Share</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg">
            <DropdownMenuItem
              onClick={handleSMSShare}
              className="cursor-pointer text-gray-700 hover:bg-garbagio-accent/10 hover:text-garbagio-accent transition-colors duration-200"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Text Message
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleEmailShare}
              className="cursor-pointer text-gray-700 hover:bg-garbagio-accent/10 hover:text-garbagio-accent transition-colors duration-200"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleFacebookShare}
              className="cursor-pointer text-gray-700 hover:bg-garbagio-accent/10 hover:text-garbagio-accent transition-colors duration-200"
            >
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleCopyLink}
              className="cursor-pointer text-gray-700 hover:bg-garbagio-accent/10 hover:text-garbagio-accent transition-colors duration-200"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Link className="h-4 w-4 mr-2" />
                  Copy Link
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }

  if (variant === "compact") {
    return (
      <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
        <div className="text-center">
          <h3 className="text-lg font-bold text-garbagio-background mb-2">Love Our Service?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Help spread the word! Share Garbaggio with friends and family who need junk removal.
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-garbagio-accent hover:bg-garbagio-accent/90 text-white w-full">
                <Share2 className="h-4 w-4 mr-2" />
                Share Garbaggio
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48 bg-white border border-gray-200 shadow-lg">
              <DropdownMenuItem
                onClick={handleSMSShare}
                className="cursor-pointer text-gray-700 hover:bg-garbagio-accent/10 hover:text-garbagio-accent transition-colors duration-200"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Text Message
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleEmailShare}
                className="cursor-pointer text-gray-700 hover:bg-garbagio-accent/10 hover:text-garbagio-accent transition-colors duration-200"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleFacebookShare}
                className="cursor-pointer text-gray-700 hover:bg-garbagio-accent/10 hover:text-garbagio-accent transition-colors duration-200"
              >
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleCopyLink}
                className="cursor-pointer text-gray-700 hover:bg-garbagio-accent/10 hover:text-garbagio-accent transition-colors duration-200"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    <span className="text-green-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Link className="h-4 w-4 mr-2" />
                    Copy Link
                  </>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    )
  }

  return null
}
