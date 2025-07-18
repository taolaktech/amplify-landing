import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Mail, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Privacy Policy | Amplify",
  description:
    "Learn how Amplify collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
  openGraph: {
    title: "Privacy Policy | Amplify",
    description: "Learn how Amplify collects, uses, and protects your personal information.",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="outline">Last Updated: January 15, 2024</Badge>
            <Badge variant="outline">Effective Date: January 15, 2024</Badge>
          </div>
        </div>

        {/* Quick Links */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Navigation</CardTitle>
            <CardDescription>Jump to specific sections of our privacy policy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#information-collection" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Information We Collect</div>
                <div className="text-sm text-gray-600">What data we gather</div>
              </a>
              <a href="#information-use" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">How We Use Information</div>
                <div className="text-sm text-gray-600">Purpose of data collection</div>
              </a>
              <a href="#information-sharing" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Information Sharing</div>
                <div className="text-sm text-gray-600">When we share data</div>
              </a>
              <a href="#data-security" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Data Security</div>
                <div className="text-sm text-gray-600">How we protect your data</div>
              </a>
              <a href="#your-rights" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Your Rights</div>
                <div className="text-sm text-gray-600">Control over your data</div>
              </a>
              <a href="#contact" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Contact Us</div>
                <div className="text-sm text-gray-600">Get in touch</div>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Amplify Technologies Inc. ("Amplify," "we," "us," or "our") is committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our AI-powered automated marketing platform and
              related services (collectively, the "Services").
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By using our Services, you consent to the collection and use of your information as described in this
              Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our Services.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8" id="information-collection">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-600" />
              Information We Collect
            </CardTitle>
            <CardDescription>We collect information in several ways when you use our Services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information You Provide</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Account Information:</strong> Name, email address, phone number, company name, and billing
                  information
                </li>
                <li>
                  • <strong>Profile Information:</strong> Business details, marketing preferences, and account settings
                </li>
                <li>
                  • <strong>Communication Data:</strong> Messages, support tickets, and feedback you send to us
                </li>
                <li>
                  • <strong>Payment Information:</strong> Credit card details and billing addresses (processed securely
                  through third-party payment processors)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Information Collected Automatically</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Usage Data:</strong> How you interact with our Services, features used, and time spent
                </li>
                <li>
                  • <strong>Device Information:</strong> IP address, browser type, operating system, and device
                  identifiers
                </li>
                <li>
                  • <strong>Log Data:</strong> Server logs, error reports, and performance metrics
                </li>
                <li>
                  • <strong>Cookies and Tracking:</strong> Information collected through cookies, web beacons, and
                  similar technologies
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Platform Data</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Shopify Integration:</strong> Store data, product information, and sales metrics (with your
                  permission)
                </li>
                <li>
                  • <strong>Advertising Platforms:</strong> Campaign data from Google Ads, Facebook Ads, and other
                  connected platforms
                </li>
                <li>
                  • <strong>Analytics Data:</strong> Performance metrics and insights from integrated marketing tools
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8" id="information-use">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              How We Use Your Information
            </CardTitle>
            <CardDescription>We use your information to provide and improve our Services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Provision</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Provide, operate, and maintain our AI-powered marketing platform</li>
                <li>• Process transactions and manage your account</li>
                <li>• Create and optimize advertising campaigns across multiple platforms</li>
                <li>• Generate insights and analytics reports</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Send you service-related notifications and updates</li>
                <li>• Respond to your inquiries and provide customer support</li>
                <li>• Send marketing communications (with your consent)</li>
                <li>• Notify you about changes to our Services or policies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement and Analytics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Analyze usage patterns to improve our Services</li>
                <li>• Develop new features and functionality</li>
                <li>• Conduct research and analytics</li>
                <li>• Ensure security and prevent fraud</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-8" id="information-sharing">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Information Sharing and Disclosure
            </CardTitle>
            <CardDescription>When and how we share your information with others</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Providers</h3>
              <p className="text-gray-700 mb-2">
                We may share your information with trusted third-party service providers who assist us in:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Payment processing and billing</li>
                <li>• Cloud hosting and data storage</li>
                <li>• Customer support and communication</li>
                <li>• Analytics and performance monitoring</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Advertising Partners</h3>
              <p className="text-gray-700">
                With your explicit consent, we share necessary campaign data with advertising platforms (Google,
                Facebook, etc.) to create and manage your marketing campaigns.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Requirements</h3>
              <p className="text-gray-700">
                We may disclose your information if required by law, court order, or government regulation, or to
                protect our rights, property, or safety.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Transfers</h3>
              <p className="text-gray-700">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of
                the business transaction.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8" id="data-security">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-blue-600" />
              Data Security
            </CardTitle>
            <CardDescription>How we protect your information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Measures Include:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Encryption of data in transit and at rest</li>
                <li>• Regular security assessments and audits</li>
                <li>• Access controls and authentication systems</li>
                <li>• Employee training on data protection</li>
                <li>• Incident response and breach notification procedures</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Important:</strong> While we strive to protect your information, no method of transmission over
                the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8" id="your-rights">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Your Privacy Rights
            </CardTitle>
            <CardDescription>Control over your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Access and Portability</h3>
              <p className="text-gray-700">
                You have the right to access your personal information and receive a copy of your data in a portable
                format.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Correction and Updates</h3>
              <p className="text-gray-700">
                You can update or correct your personal information through your account settings or by contacting us.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Deletion</h3>
              <p className="text-gray-700 mb-2">
                You have the right to request deletion of your personal information. You can:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>
                  • Use our{" "}
                  <Link href="/data-deletion" className="text-blue-600 hover:text-blue-700">
                    data deletion form
                  </Link>
                </li>
                <li>• Contact us directly at support@useamplify.ai</li>
                <li>• Call us at +1-647-671-1349</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Communications</h3>
              <p className="text-gray-700">
                You can opt out of marketing communications at any time by clicking the unsubscribe link in emails or
                updating your preferences in your account.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies and Tracking</h3>
              <p className="text-gray-700">
                You can control cookies through your browser settings. Note that disabling cookies may affect the
                functionality of our Services.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* International Transfers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>International Data Transfers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. We
              ensure appropriate safeguards are in place for international transfers, including:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Standard contractual clauses approved by regulatory authorities</li>
              <li>• Adequacy decisions by relevant data protection authorities</li>
              <li>• Other legally recognized transfer mechanisms</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Data Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as necessary to provide our Services and fulfill the
              purposes outlined in this Privacy Policy. Retention periods vary based on:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• The type of information and how it's used</li>
              <li>• Legal and regulatory requirements</li>
              <li>• Your account status and activity</li>
              <li>• Legitimate business needs</li>
            </ul>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Our Services are not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe your child has provided us
              with personal information, please contact us immediately.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Privacy Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. When we make changes, we will:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Update the "Last Updated" date at the top of this policy</li>
              <li>• Notify you via email or through our Services</li>
              <li>• For material changes, provide additional notice as required by law</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Your continued use of our Services after any changes indicates your acceptance of the updated Privacy
              Policy.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card id="contact">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              Contact Us
            </CardTitle>
            <CardDescription>Questions about this Privacy Policy or your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Data Protection Officer</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Amplify Technologies Inc.</p>
                  <p>123 Business Ave, Suite 100</p>
                  <p>Toronto, ON M5V 3A8</p>
                  <p>Canada</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Contact Methods</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:support@useamplify.ai"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <Mail className="h-4 w-4" />
                    support@useamplify.ai
                  </a>
                  <a href="tel:+1-647-671-1349" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Phone className="h-4 w-4" />
                    +1-647-671-1349
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 2 business
                days. For urgent matters, please call us directly.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
