"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { openEmailClient } from "@/lib/email-utils"

interface ContactSupportProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  showEmailText?: boolean
}

export function ContactSupport({
  className = "",
  variant = "default",
  size = "default",
  showEmailText = true,
}: ContactSupportProps) {
  const handleClick = () => {
    const emailAddress = "contact@useamplify.ai"
    const subject = "Support Request: Amplify"

    const success = openEmailClient(emailAddress, subject)

    // Fallback if email client doesn't open
    if (!success) {
      // Copy email to clipboard as fallback
      navigator.clipboard
        .writeText(emailAddress)
        .then(() => {
          alert(`Email address copied to clipboard: ${emailAddress}`)
        })
        .catch(() => {
          alert(`Please email us at: ${emailAddress}`)
        })
    }
  }

  return (
    <div className="flex flex-col items-center">
      <Button onClick={handleClick} variant={variant} size={size} className={`flex items-center gap-2 ${className}`}>
        <Mail className="h-4 w-4" />
        Contact Support
      </Button>

      {showEmailText && (
        <p className="mt-2 text-sm text-gray-400">
          Or email us directly at{" "}
          <a href="mailto:contact@useamplify.ai" className="text-purple-400 hover:text-purple-300 underline">
            contact@useamplify.ai
          </a>
        </p>
      )}
    </div>
  )
}
