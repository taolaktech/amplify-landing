"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"

export function DataDeletionForm() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    reason: "",
    hasAccount: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
    requestId?: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/data-deletion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message,
          requestId: result.requestId,
        })
        setFormData({ email: "", fullName: "", reason: "", hasAccount: false })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to submit request",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitStatus.type === "success") {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            Request Submitted Successfully
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">{submitStatus.message}</p>
            {submitStatus.requestId && (
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">Your Request ID:</p>
                <p className="text-green-700 font-mono text-lg">{submitStatus.requestId}</p>
                <p className="text-green-600 text-sm mt-2">
                  Please save this ID for your records. You can use it to check the status of your request.
                </p>
              </div>
            )}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">What happens next?</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• We'll send you a confirmation email within 24 hours</li>
                <li>• We'll verify your identity to protect your privacy</li>
                <li>• Your data will be deleted within 30 days</li>
                <li>• You'll receive final confirmation once deletion is complete</li>
              </ul>
            </div>
            <Button onClick={() => setSubmitStatus({ type: null, message: "" })} variant="outline" className="w-full">
              Submit Another Request
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Data Deletion Request Form</CardTitle>
        <CardDescription>Fill out this form to request deletion of your personal data from our systems</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your.email@example.com"
              required
            />
            <p className="text-sm text-gray-600">The email address associated with your data</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Deletion (Optional)</Label>
            <Textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => handleInputChange("reason", e.target.value)}
              placeholder="Please let us know why you're requesting data deletion..."
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasAccount"
              checked={formData.hasAccount}
              onCheckedChange={(checked) => handleInputChange("hasAccount", checked as boolean)}
            />
            <Label htmlFor="hasAccount" className="text-sm">
              I have an active Amplify account
            </Label>
          </div>

          {submitStatus.type === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <p className="text-red-700">{submitStatus.message}</p>
              </div>
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> By submitting this form, you confirm that you are the owner of the provided
              email address and authorize us to delete all associated personal data. This action cannot be undone.
            </p>
          </div>

          <Button type="submit" disabled={isSubmitting || !formData.email || !formData.fullName} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Request...
              </>
            ) : (
              "Submit Data Deletion Request"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
