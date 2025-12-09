"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface WaitlistFormProps {
  buttonText?: string
  buttonSize?: "default" | "sm" | "lg"
  buttonVariant?: "default" | "outline"
  buttonClassName?: string
  planInterest?: string
  children?: React.ReactNode
}

export function WaitlistForm({
  buttonText = "Try for Free",
  buttonSize = "default",
  buttonVariant = "default",
  buttonClassName = "",
  planInterest = "",
  children,
}: WaitlistFormProps) {
  const baseUrl = "https://app.useamplify.ai/auth/signup"
  const signupUrl = planInterest 
    ? `${baseUrl}?plan=${encodeURIComponent(planInterest)}`
    : baseUrl

  if (children) {
    return (
      <Link href={signupUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
        {children}
      </Link>
    )
  }

  return (
    <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
      <Button
        size={buttonSize}
        variant={buttonVariant}
        className={buttonClassName}
      >
        {buttonText}
        {buttonVariant === "default" && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
    </Link>
  )
}
