import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Users, FileText, Mail, Phone, Globe, Database } from "lucide-react"
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
            We respect your privacy and are committed to protecting the data you share with us through your use of
            Amplify.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="outline">Last Updated: July 2025</Badge>
            <Badge variant="outline">Effective Date: July 2025</Badge>
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
              <a href="#what-we-collect" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">What We Collect</div>
                <div className="text-sm text-gray-600">Data collection overview</div>
              </a>
              <a href="#meta-platform-compliance" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Meta Platform Compliance</div>
                <div className="text-sm text-gray-600">Facebook & Instagram data</div>
              </a>
              <a href="#data-usage" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Data Usage</div>
                <div className="text-sm text-gray-600">How we use your data</div>
              </a>
              <a href="#data-retention" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Data Retention & Deletion</div>
                <div className="text-sm text-gray-600">Storage and removal</div>
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
              We respect your privacy and are committed to protecting the data you share with us through your use of
              Amplify. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you use our AI-powered automated marketing platform and related services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By using our Services, you consent to the collection and use of your information as described in this
              Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our Services.
            </p>
          </CardContent>
        </Card>

        {/* What We Collect */}
        <Card className="mb-8" id="what-we-collect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-blue-600" />
              What We Collect
            </CardTitle>
            <CardDescription>Overview of data collection practices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Shopify Store Data</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Product catalogs, descriptions, and pricing information</li>
                <li>• Order history and transaction data</li>
                <li>• Customer insights and demographic information</li>
                <li>• Store configuration and settings</li>
                <li>• Inventory levels and product performance metrics</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ad Performance Metrics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Campaign performance data from Facebook and Instagram</li>
                <li>• Google Ads campaign metrics and insights</li>
                <li>• Click-through rates, conversion data, and ROI metrics</li>
                <li>• Audience engagement and demographic insights</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">User Input and Configuration</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Campaign configuration settings and preferences</li>
                <li>• Budget allocations and bidding strategies</li>
                <li>• Target audience selections and parameters</li>
                <li>• Creative assets and advertising content</li>
                <li>• Account settings and user preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Authentication Credentials</h3>
              <p className="text-gray-700">
                Authentication credentials for connected third-party services are collected via secure OAuth protocols,
                including access tokens for:
              </p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>• Shopify store connections</li>
                <li>• Meta (Facebook/Instagram) business accounts</li>
                <li>• Google Ads account access</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Meta Platform Data Compliance */}
        <Card className="mb-8" id="meta-platform-compliance">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" />
              Meta Platform Data Compliance
            </CardTitle>
            <CardDescription>Facebook and Instagram data handling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Meta Compliance:</strong> We collect Meta platform data in full compliance with Meta's Developer
                Platform Terms and data usage policies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Data Collection</h3>
              <p className="text-gray-700 mb-2">
                We collect Meta platform data to enable campaign creation, optimization, audience targeting, and
                performance reporting. Platform Data includes business information such as:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Ad Accounts and account metadata</li>
                <li>• Campaign Structures and configurations</li>
                <li>• Performance Insights and analytics data</li>
                <li>• Page Metadata and business information</li>
                <li>• Audience data for targeting optimization</li>
                <li>• Creative assets and ad content</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Usage Scope</h3>
              <p className="text-gray-700">
                Meta platform data is used exclusively for campaign-related functions and is not sold, rented, or used
                for profiling unrelated to ad automation. Specific uses include:
              </p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>• Automated campaign creation and optimization</li>
                <li>• Audience analysis and targeting improvements</li>
                <li>• Performance reporting and insights generation</li>
                <li>• Ad account management and administration</li>
                <li>• Compliance monitoring and policy adherence</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Access Revocation</h3>
              <p className="text-gray-700">
                You may revoke access at any time from your Meta settings by visiting Facebook Settings → Apps and
                Websites and removing Amplify from your connected applications. This will immediately stop our access to
                your Meta data.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Usage */}
        <Card className="mb-8" id="data-usage">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Data Usage
            </CardTitle>
            <CardDescription>How we use your information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Campaign-Related Functions</h3>
              <p className="text-gray-700 mb-2">
                Data is only used to fulfill campaign-related functions and is not sold, rented, or used for profiling
                unrelated to ad automation. Specific uses include:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Automated campaign creation and setup</li>
                <li>• Real-time campaign optimization and bidding</li>
                <li>• Audience targeting and segmentation</li>
                <li>• Performance analysis and reporting</li>
                <li>• Creative asset generation and testing</li>
                <li>• Budget allocation and spend optimization</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Improvement</h3>
              <p className="text-gray-700">
                We may use aggregated, anonymized data to improve our platform features and AI algorithms. This
                includes:
              </p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>• Enhancing campaign optimization algorithms</li>
                <li>• Improving audience targeting capabilities</li>
                <li>• Developing new platform features</li>
                <li>• Conducting performance benchmarking</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication and Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Providing customer support and technical assistance</li>
                <li>• Sending service-related notifications and updates</li>
                <li>• Communicating about account status and billing</li>
                <li>• Sharing platform updates and new features</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Important:</strong> We do not use your data to build user profiles outside the scope of ad
                automation or share your data with third parties for their marketing purposes.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention & Deletion */}
        <Card className="mb-8" id="data-retention">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-blue-600" />
              Data Retention & Deletion
            </CardTitle>
            <CardDescription>How long we keep your data and deletion options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Retention Policy</h3>
              <p className="text-gray-700 mb-2">
                We retain campaign data and connected account metadata only as long as your account is active or as
                needed to provide services. Specific retention periods include:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Active campaign data: Retained while campaigns are running</li>
                <li>• Historical performance data: Retained for up to 2 years for reporting</li>
                <li>• Account information: Retained while account is active</li>
                <li>• Billing records: Retained for 7 years for tax and legal compliance</li>
                <li>• Support communications: Retained for 3 years</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Deletion Options</h3>
              <p className="text-gray-700 mb-2">
                You can request account deletion at any time. We provide multiple ways to request data deletion:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Use our{" "}
                  <Link href="/data-deletion" className="text-blue-600 hover:text-blue-700">
                    data deletion form
                  </Link>
                </li>
                <li>• Email us directly at support@useamplify.ai</li>
                <li>• Contact us through your account settings</li>
                <li>• Call our support team at +1-647-671-1349</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Deletion Timeline</h3>
              <p className="text-gray-700">Upon receiving a valid deletion request, we will:</p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>• Acknowledge your request within 2 business days</li>
                <li>• Complete data deletion within 30 days</li>
                <li>• Provide confirmation once deletion is complete</li>
                <li>• Retain only legally required records (billing, tax records)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatic Deletion</h3>
              <p className="text-gray-700">Data is automatically deleted in the following scenarios:</p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>• Account termination or cancellation</li>
                <li>• Expiration of retention periods</li>
                <li>• Revocation of third-party platform access</li>
                <li>• Compliance with legal deletion requirements</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8" id="your-rights">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Your Rights
            </CardTitle>
            <CardDescription>Control over your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Access and Portability</h3>
              <p className="text-gray-700">
                You can request access to, correction of, or deletion of your data at any time. We will provide your
                data in a portable format within 30 days of a valid request.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Correction</h3>
              <p className="text-gray-700">
                You can update or correct your personal information through your account settings or by contacting our
                support team. We will update your information promptly upon verification.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Access Revocation</h3>
              <p className="text-gray-700 mb-2">
                You have the right to revoke Amplify's access to your connected accounts at any time:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Meta accounts: Through Facebook/Instagram app settings</li>
                <li>• Google Ads: Through Google account permissions</li>
                <li>• Shopify: Through your Shopify app management</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication Preferences</h3>
              <p className="text-gray-700">
                You can opt out of marketing communications at any time by clicking the unsubscribe link in emails or
                updating your preferences in your account settings.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Rights</h3>
              <p className="text-gray-700">
                Depending on your location, you may have additional rights under data protection laws such as GDPR,
                CCPA, or other applicable privacy regulations. Contact us to exercise these rights.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-blue-600" />
              Data Security
            </CardTitle>
            <CardDescription>How we protect your information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              We implement industry-standard security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Measures Include:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• End-to-end encryption of data in transit and at rest</li>
                <li>• Regular security assessments and penetration testing</li>
                <li>• Multi-factor authentication and access controls</li>
                <li>• Employee training on data protection and security</li>
                <li>• Incident response and breach notification procedures</li>
                <li>• SOC 2 Type II compliance and regular audits</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Important:</strong> While we implement robust security measures, no method of transmission over
                the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Policy Changes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              We will notify you of material changes to this privacy policy with at least 7 days' notice. Changes will
              be communicated through:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Email notifications to your registered email address</li>
              <li>• In-app notifications when you log into your account</li>
              <li>• Updates to the "Last Updated" date at the top of this policy</li>
              <li>• Prominent notices on our website</li>
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
                  <p>909 Reinli Street</p>
                  <p>Austin, TX 78751</p>
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

            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 text-sm">
                <strong>Data Requests:</strong> If you have any questions about this Privacy Policy or need to exercise
                your data rights, reach out to us at support@useamplify.ai.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
