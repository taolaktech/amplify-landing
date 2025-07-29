"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MultiSelect } from "@/components/ui/multi-select"
import { ArrowRight } from "lucide-react"
import { submitToWaitlist, type WaitlistFormData } from "@/actions/waitlist"

interface WaitlistFormProps {
  buttonText?: string
  buttonSize?: "default" | "sm" | "lg"
  buttonVariant?: "default" | "outline"
  buttonClassName?: string
  planInterest?: string
  children?: React.ReactNode
}

export function WaitlistForm({
  buttonText = "Join Waitlist",
  buttonSize = "default",
  buttonVariant = "default",
  buttonClassName = "",
  planInterest = "",
  children,
}: WaitlistFormProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<Omit<WaitlistFormData, "planInterest"> & { planInterest?: string }>({
    name: "",
    shopifyUrl: "",
    email: "",
    salesLocations: [],
    planInterest: planInterest,
  })
  const [errors, setErrors] = useState({
    name: "",
    shopifyUrl: "",
    email: "",
    salesLocations: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionResult, setSubmissionResult] = useState<{ success: boolean; message: string } | null>(null)

  const locationOptions = [
    { value: "global", label: "Global" },
    // Regions as headers
    { value: "north_america", label: "--- North America ---" },
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "mx", label: "Mexico" },

    { value: "europe", label: "--- Europe ---" },
    { value: "uk", label: "United Kingdom" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "es", label: "Spain" },
    { value: "it", label: "Italy" },
    { value: "nl", label: "Netherlands" },
    { value: "se", label: "Sweden" },
    { value: "no", label: "Norway" },
    { value: "dk", label: "Denmark" },
    { value: "fi", label: "Finland" },
    { value: "ie", label: "Ireland" },
    { value: "pt", label: "Portugal" },
    { value: "ch", label: "Switzerland" },
    { value: "at", label: "Austria" },
    { value: "be", label: "Belgium" },
    { value: "gr", label: "Greece" },
    { value: "pl", label: "Poland" },
    { value: "cz", label: "Czech Republic" },
    { value: "hu", label: "Hungary" },
    { value: "ro", label: "Romania" },

    { value: "asia_pacific", label: "--- Asia & Pacific ---" },
    { value: "au", label: "Australia" },
    { value: "nz", label: "New Zealand" },
    { value: "jp", label: "Japan" },
    { value: "cn", label: "China" },
    { value: "kr", label: "South Korea" },
    { value: "in", label: "India" },
    { value: "sg", label: "Singapore" },
    { value: "th", label: "Thailand" },
    { value: "vn", label: "Vietnam" },
    { value: "my", label: "Malaysia" },
    { value: "ph", label: "Philippines" },
    { value: "id", label: "Indonesia" },

    { value: "middle_east", label: "--- Middle East ---" },
    { value: "ae", label: "United Arab Emirates" },
    { value: "sa", label: "Saudi Arabia" },
    { value: "il", label: "Israel" },
    { value: "tr", label: "Turkey" },

    { value: "africa", label: "--- Africa ---" },
    { value: "za", label: "South Africa" },
    { value: "ng", label: "Nigeria" },
    { value: "eg", label: "Egypt" },
    { value: "ke", label: "Kenya" },
    { value: "gh", label: "Ghana" },

    { value: "south_america", label: "--- South America ---" },
    { value: "br", label: "Brazil" },
    { value: "ar", label: "Argentina" },
    { value: "co", label: "Colombia" },
    { value: "cl", label: "Chile" },
    { value: "pe", label: "Peru" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { ...errors }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.shopifyUrl.trim()) {
      newErrors.shopifyUrl = "Shopify Store URL is required"
      isValid = false
    }

    formData.shopifyUrl = formData.shopifyUrl.trim();

    // if (!formData.shopifyUrl.includes('.myshopify.com')) {
    //   newErrors.shopifyUrl = "Please enter a valid Shopify URL"
    //   isValid = false
    // }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    // Filter out region headers from selected locations
    const actualLocations = formData.salesLocations.filter(
      (loc) => !["north_america", "europe", "asia_pacific", "middle_east", "africa", "south_america"].includes(loc),
    )

    if (actualLocations.length === 0) {
      newErrors.salesLocations = "Please select at least one sales location"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmissionResult(null)

    try {
      // Filter out region headers from selected locations before submitting
      const filteredLocations = formData.salesLocations.filter(
        (loc) => !["north_america", "europe", "asia_pacific", "middle_east", "africa", "south_america"].includes(loc),
      )

      const dataToSubmit = {
        ...formData,
        salesLocations: filteredLocations,
      } as WaitlistFormData
 
  
      const res = await fetch('https://dev-api.useamplify.ai/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!res.ok) throw new Error('Submission failed');
      const result = await res.json();
      console.log('Success:', result);

      setSubmissionResult(result)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmissionResult({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      shopifyUrl: "",
      email: "",
      salesLocations: [],
      planInterest: planInterest,
    })
    setErrors({
      name: "",
      shopifyUrl: "",
      email: "",
      salesLocations: "",
    })
    setIsSubmitted(false)
    setSubmissionResult(null)
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      resetForm()
    }
  }

  return (
    <>
      {children ? (
        <div onClick={() => setOpen(true)} className="w-full sm:w-auto">
          {children}
        </div>
      ) : (
        <Button
          size={buttonSize}
          variant={buttonVariant}
          className={`${buttonClassName}`}
          onClick={() => setOpen(true)}
        >
          {buttonText}
          {buttonVariant === "default" && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      )}

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          {!isSubmitted ? (
            <>
              <DialogHeader>
                <DialogTitle>Join the Amplify Waitlist</DialogTitle>
                <DialogDescription>
                  Fill out the form below to join our waitlist and be among the first to access Amplify when we launch.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 py-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="shopifyUrl" className="text-sm font-medium">
                    Shopify Store URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="shopifyUrl"
                    name="shopifyUrl"
                    type="text"
                    value={formData.shopifyUrl}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.shopifyUrl ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600`}
                    placeholder="your-store.myshopify.com"
                  />
                  {errors.shopifyUrl && <p className="text-xs text-red-500">{errors.shopifyUrl}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="salesLocations" className="text-sm font-medium">
                    Sales Locations <span className="text-red-500">*</span>
                  </label>
                  <MultiSelect
                    options={locationOptions}
                    selected={formData.salesLocations}
                    onChange={(selected) => {
                      setFormData((prev) => ({ ...prev, salesLocations: selected }))
                      if (errors.salesLocations) {
                        setErrors((prev) => ({ ...prev, salesLocations: "" }))
                      }
                    }}
                    placeholder="Select locations (Global or specific countries)"
                    className={errors.salesLocations ? "border-red-500" : ""}
                  />
                  {errors.salesLocations && <p className="text-xs text-red-500">{errors.salesLocations}</p>}
                  <p className="text-xs text-gray-500">Select "Global" for worldwide or choose specific countries</p>
                </div>

                {submissionResult && !submissionResult.success && (
                  <div className="rounded-md bg-red-50 p-3">
                    <p className="text-sm text-red-600">{submissionResult.message}</p>
                  </div>
                )}

                <DialogFooter className="pt-4">
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </DialogFooter>
              </form>
            </>
          ) : (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Thanks for joining our waitlist!</h3>
              <p className="mt-2 text-sm text-gray-500">
                {submissionResult?.message || "We'll notify you when Amplify is ready for your store."}
              </p>
              <Button className="mt-6 bg-purple-600 hover:bg-purple-700" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
