import type { Metadata } from "next"
import { Trash2, Clock, Shield, Mail, Phone, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DataDeletionForm } from "@/components/data-deletion-form"

export const metadata: Metadata = {
  title: "Data Deletion Request | Amplify",
  description:
    "Request deletion of your personal data from Amplify. We respect your privacy and will process your request within 30 days.",
  robots: "noindex, nofollow",
}

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-red-100 rounded-full">
              <Trash2 className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Deletion Request</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We respect your privacy and your right to control your personal data. Use this form to request deletion of
            your information from our systems.
          </p>
        </div>

        {/* Process Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Data Deletion Process Timeline
            </CardTitle>
            <CardDescription>Here's what happens after you submit your request</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-blue-600">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Request Received</h3>
                  <p className="text-gray-600">We receive and log your data deletion request immediately.</p>
                  <Badge variant="secondary" className="mt-1">
                    Immediate
                  </Badge>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-blue-600">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Identity Verification</h3>
                  <p className="text-gray-600">
                    We verify your identity to ensure data security and prevent unauthorized requests.
                  </p>
                  <Badge variant="secondary" className="mt-1">
                    Within 24 hours
                  </Badge>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-blue-600">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Confirmation Email</h3>
                  <p className="text-gray-600">
                    You'll receive a confirmation email with your request ID and next steps.
                  </p>
                  <Badge variant="secondary" className="mt-1">
                    Within 24 hours
                  </Badge>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Data Deletion Complete</h3>
                  <p className="text-gray-600">All your personal data is permanently deleted from our systems.</p>
                  <Badge variant="secondary" className="mt-1">
                    Within 30 days
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Deletion Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Submit Data Deletion Request</CardTitle>
            <CardDescription>
              Please fill out this form to request deletion of your personal data. All fields marked with * are
              required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataDeletionForm />
          </CardContent>
        </Card>

        {/* What Data We Delete */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              What Data Will Be Deleted
            </CardTitle>
            <CardDescription>When you request data deletion, we will remove the following information:</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Account Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Email address and contact details
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Profile information and preferences
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Account settings and configurations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Subscription and billing history
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Campaign Data</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Ad campaign configurations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Performance analytics and reports
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Connected platform credentials
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Usage logs and activity history
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
              <p className="text-yellow-700 text-sm">
                Some data may be retained for legal compliance purposes (such as financial records for tax obligations)
                as required by law. We will inform you of any such exceptions during the deletion process.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              If you have questions about data deletion or need assistance with your request, our support team is here
              to help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-semibold">Email Support</div>
                  <div className="text-sm text-gray-600">support@useamplify.ai</div>
                  <div className="text-xs text-gray-500">Response within 2 hours</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-semibold">Phone Support</div>
                  <div className="text-sm text-gray-600">+1-647-671-1349</div>
                  <div className="text-xs text-gray-500">Mon-Fri, 9 AM - 6 PM EST</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
            <CardDescription>
              Information about your data protection rights under applicable privacy laws
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Right to Deletion</h3>
              <p className="text-gray-600 text-sm">
                Under GDPR, CCPA, and other privacy regulations, you have the right to request deletion of your personal
                data. We are committed to honoring these rights and processing your request within the legally required
                timeframes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Portability</h3>
              <p className="text-gray-600 text-sm">
                Before deletion, you can request a copy of your data. Contact our support team if you would like to
                export your information before proceeding with deletion.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Complaint Process</h3>
              <p className="text-gray-600 text-sm">
                If you're not satisfied with how we handle your data deletion request, you have the right to file a
                complaint with your local data protection authority.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
