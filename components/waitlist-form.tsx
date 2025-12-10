"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { MultiSelect } from "@/components/ui/multi-select"
import { ArrowRight, Check, Loader2 } from "lucide-react"

interface WaitlistFormProps {
  buttonText?: string
  buttonSize?: "default" | "sm" | "lg"
  buttonVariant?: "default" | "outline"
  buttonClassName?: string
  planInterest?: string
  children?: React.ReactNode
}

const SALES_LOCATIONS = [
  { value: "Global", label: "Global" },
  { value: "United States", label: "United States" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Germany", label: "Germany" },
  { value: "France", label: "France" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "Spain", label: "Spain" },
  { value: "Italy", label: "Italy" },
  { value: "Other", label: "Other" },
]

export function WaitlistForm({
  buttonText = "Join Waitlist",
  buttonSize = "default",
  buttonVariant = "default",
  buttonClassName = "",
  planInterest = "",
  children,
}: WaitlistFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shopifyUrl: "",
    salesLocations: [] as string[],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError(null)
  }

  const handleLocationChange = (locations: string[]) => {
    if (locations.includes("Global") && !formData.salesLocations.includes("Global")) {
      setFormData((prev) => ({ ...prev, salesLocations: ["Global"] }))
    } else if (formData.salesLocations.includes("Global") && locations.length > 1) {
      setFormData((prev) => ({ ...prev, salesLocations: locations.filter(loc => loc !== "Global") }))
    } else {
      setFormData((prev) => ({ ...prev, salesLocations: locations }))
    }
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          planInterest,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist")
      }

      setIsSuccess(true)
      setFormData({ name: "", email: "", shopifyUrl: "", salesLocations: [] })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsSuccess(false)
    setError(null)
  }

  const triggerButton = children ? (
    <div onClick={() => setIsOpen(true)} className="cursor-pointer w-full sm:w-auto">
      {children}
    </div>
  ) : (
    <Button
      size={buttonSize}
      variant={buttonVariant}
      className={buttonClassName}
      onClick={() => setIsOpen(true)}
    >
      {buttonText}
      {buttonVariant === "default" && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  )

  return (
    <>
      {triggerButton}
      
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <DialogTitle className="text-xl font-semibold mb-2">You're on the list!</DialogTitle>
              <DialogDescription className="text-gray-600">
                Thanks for joining the Amplify waitlist. We'll notify you when we launch!
              </DialogDescription>
              <Button onClick={handleClose} className="mt-6 bg-purple-600 hover:bg-purple-700">
                Close
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader className="text-center">
                <DialogTitle className="text-xl font-semibold">Join the Amplify Waitlist</DialogTitle>
                <DialogDescription className="text-gray-600">
                  Fill out the form below to join our waitlist and be among the first to access Amplify when we launch.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="shopifyUrl" className="text-sm font-medium">
                    Shopify Store URL <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="shopifyUrl"
                    name="shopifyUrl"
                    type="text"
                    value={formData.shopifyUrl}
                    onChange={handleInputChange}
                    placeholder="www.yourstore.com"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium">
                    Sales Locations <span className="text-red-500">*</span>
                  </Label>
                  <div className="mt-1">
                    <MultiSelect
                      options={SALES_LOCATIONS}
                      selected={formData.salesLocations}
                      onChange={handleLocationChange}
                      placeholder="Select locations"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Select "Global" for worldwide or choose specific countries
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 px-4 py-3 rounded-md text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting || formData.salesLocations.length === 0}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
