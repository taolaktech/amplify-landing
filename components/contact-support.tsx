"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  subject: string
  category: string
  message: string
}

export function ContactSupport() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus({
        type: "success",
        message: "Thank you for contacting us! We'll get back to you within 2 hours during business hours.",
      })
      setFormData({ name: "", email: "", subject: "", category: "", message: "" })
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Support</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Need help with Amplify? Our support team is here to assist you with any questions or issues.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Choose the best way to reach our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Support</h3>
                  <p className="text-gray-600 mb-2">For general inquiries and technical support</p>
                  <a href="mailto:support@useamplify.ai" className="text-blue-600 hover:text-blue-700 font-medium">
                    support@useamplify.ai
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone Support</h3>
                  <p className="text-gray-600 mb-2">For urgent issues and immediate assistance</p>
                  <a href="tel:+1-647-671-1349" className="text-green-600 hover:text-green-700 font-medium">
                    +1-647-671-1349
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9 AM - 6 PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Office Address</h3>
                  <p className="text-gray-600 mb-2">Visit us or send mail to:</p>
                  <address className="text-gray-700 not-italic">
                    Amplify Technologies Inc.
                    <br />
                    123 Business Ave, Suite 100
                    <br />
                    Toronto, ON M5V 3A8
                    <br />
                    Canada
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Emergency support available 24/7</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Support Categories</CardTitle>
              <CardDescription>Common areas where we can help</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">Technical Issues</h4>
                  <p className="text-sm text-gray-600">Platform bugs, integration problems</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">Account Management</h4>
                  <p className="text-sm text-gray-600">Billing, subscriptions, settings</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">Campaign Help</h4>
                  <p className="text-sm text-gray-600">Ad optimization, performance</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">General Questions</h4>
                  <p className="text-sm text-gray-600">Features, pricing, onboarding</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
          </CardHeader>
          <CardContent>
            {submitStatus.type === "success" ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-700 mb-4">{submitStatus.message}</p>
                <Button onClick={() => setSubmitStatus({ type: null, message: "" })} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
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
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Issues</SelectItem>
                      <SelectItem value="account">Account Management</SelectItem>
                      <SelectItem value="campaign">Campaign Help</SelectItem>
                      <SelectItem value="billing">Billing & Subscriptions</SelectItem>
                      <SelectItem value="general">General Questions</SelectItem>
                      <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please provide details about your question or issue..."
                    rows={5}
                    required
                  />
                </div>

                {submitStatus.type === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <p className="text-red-700">{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !formData.name ||
                    !formData.email ||
                    !formData.category ||
                    !formData.subject ||
                    !formData.message
                  }
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-blue-600 hover:text-blue-700">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-blue-600 hover:text-blue-700">
                    Terms of Service
                  </a>
                  .
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
