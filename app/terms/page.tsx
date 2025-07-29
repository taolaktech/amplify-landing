import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle, Mail, Phone, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Terms of Service | Amplify",
  description:
    "Terms and conditions for using Amplify's AI-powered automated marketing platform. Your rights and responsibilities.",
  openGraph: {
    title: "Terms of Service | Amplify",
    description: "Terms and conditions for using Amplify's AI-powered automated marketing platform.",
  },
}

export default function TermsOfServicePage() {
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
            <Scale className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These terms govern your use of Amplify's AI-powered marketing platform and related services.
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
            <CardDescription>Jump to specific sections of our terms of service</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#general-terms" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">General Terms</div>
                <div className="text-sm text-gray-600">Platform overview and usage</div>
              </a>
              <a href="#meta-platform-data" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Meta Platform Data</div>
                <div className="text-sm text-gray-600">Facebook & Instagram compliance</div>
              </a>
              <a href="#data-restrictions" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Data Restrictions</div>
                <div className="text-sm text-gray-600">User control and access</div>
              </a>
              <a href="#subprocessors" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Subprocessors</div>
                <div className="text-sm text-gray-600">Third-party services</div>
              </a>
              <a href="#limitation" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Limitation of Liability</div>
                <div className="text-sm text-gray-600">Legal limitations</div>
              </a>
              <a href="#termination" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Termination</div>
                <div className="text-sm text-gray-600">Account suspension</div>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Acceptance of Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              By using Amplify, you agree to these Terms & Conditions, our Privacy Policy, and any additional terms
              specific to certain services. These Terms constitute a legally binding agreement between you ("User,"
              "you," or "your") and Amplify Technologies Inc. ("Amplify," "we," "us," or "our").
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you do not agree to these Terms, you may not use our Services. Continued use of our Services after
              changes indicates your acceptance of the updated Terms.
            </p>
          </CardContent>
        </Card>

        {/* General Terms */}
        <Card className="mb-8" id="general-terms">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              General Terms
            </CardTitle>
            <CardDescription>Platform overview and usage guidelines</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Description</h3>
              <p className="text-gray-700">
                Amplify is a subscription-based platform that enables e-commerce brands, particularly Shopify store
                owners, to create, manage, and optimize ad campaigns across platforms like Meta (Facebook, Instagram)
                and Google.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">User Responsibilities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • You are responsible for ensuring that your use of Amplify complies with all applicable laws and
                  regulations
                </li>
                <li>• You must provide accurate and complete information when creating campaigns</li>
                <li>• You are responsible for all content and advertising materials created through our platform</li>
                <li>• You must comply with all third-party platform policies (Meta, Google, etc.)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AI-powered automated marketing campaign creation and optimization</li>
                <li>• Multi-platform advertising management (Google Ads, Facebook, Instagram)</li>
                <li>• Real-time analytics and performance reporting</li>
                <li>• Shopify and e-commerce platform integrations</li>
                <li>• Dynamic Ad Optimization (DAO) technology</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Meta Platform Data */}
        <Card className="mb-8" id="meta-platform-data">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" />
              Use of Meta Platform Data
            </CardTitle>
            <CardDescription>Compliance with Meta's Developer Platform Terms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Meta Compliance:</strong> In compliance with Meta's Developer Platform Terms (
                <a
                  href="https://developers.facebook.com/terms/dfc_platform_terms/"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  developers.facebook.com/terms/dfc_platform_terms/
                </a>
                )
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Access Authorization</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Amplify may access Meta data such as Pages, Ad Accounts, Ad Campaigns, and Insights strictly for
                  campaign automation, audience analysis, and performance reporting
                </li>
                <li>
                  • You explicitly authorize Amplify to access and manage your connected Meta assets via Meta's APIs
                </li>
                <li>• All data access is performed through secure, authorized API connections</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Usage Restrictions</h3>
              <p className="text-gray-700">
                Amplify does not use Platform Data to build user profiles outside the scope of ad automation. All Meta
                data is used exclusively for:
              </p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>• Campaign creation and optimization</li>
                <li>• Audience targeting and analysis</li>
                <li>• Performance reporting and insights</li>
                <li>• Ad account management and administration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Data Types</h3>
              <p className="text-gray-700 mb-2">Platform Data includes business information such as:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Ad Accounts and account metadata</li>
                <li>• Campaign structures and configurations</li>
                <li>• Performance insights and analytics</li>
                <li>• Page metadata and business information</li>
                <li>• Audience data for targeting purposes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Restrictions & User Control */}
        <Card className="mb-8" id="data-restrictions">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Data Restrictions & User Control
            </CardTitle>
            <CardDescription>Your control over data access and usage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Access Revocation</h3>
              <p className="text-gray-700">
                You may revoke Amplify's access to your Meta account at any time through Facebook or Instagram account
                settings. This can be done by:
              </p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>• Visiting your Facebook Settings → Apps and Websites</li>
                <li>• Locating Amplify in your connected apps</li>
                <li>• Removing or modifying permissions as needed</li>
                <li>• Contacting our support team for assistance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Deletion</h3>
              <p className="text-gray-700">
                Amplify will delete user data upon account termination or upon direct user request in accordance with
                data retention policies. You can request data deletion by:
              </p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>
                  • Using our data deletion form at{" "}
                  <Link href="/data-deletion" className="text-blue-600 hover:text-blue-700">
                    /data-deletion
                  </Link>
                </li>
                <li>• Emailing us directly at support@useamplify.ai</li>
                <li>• Contacting us through your account settings</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Portability</h3>
              <p className="text-gray-700">
                You have the right to request a copy of your data in a portable format. We will provide your data within
                30 days of a valid request.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Subprocessors */}
        <Card className="mb-8" id="subprocessors">
          <CardHeader>
            <CardTitle>Subprocessors</CardTitle>
            <CardDescription>Third-party services used by Amplify</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Trusted Third-Party Services</h3>
              <p className="text-gray-700 mb-4">
                Amplify may use trusted third-party subprocessors that are bound to confidentiality and security
                obligations and are only permitted to process data for campaign-related tasks.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">OpenAI</h4>
                  <p className="text-sm text-gray-600">LLM support for campaign optimization and content generation</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Bannerbear</h4>
                  <p className="text-sm text-gray-600">Creative generation and automated design services</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Stripe</h4>
                  <p className="text-sm text-gray-600">Payment processing and billing management</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cloud Infrastructure</h4>
                  <p className="text-sm text-gray-600">Secure hosting and data storage services</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Obligations</h3>
              <p className="text-gray-700">
                All subprocessors are contractually bound to maintain the same level of data protection and security as
                Amplify, including:
              </p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>• Confidentiality agreements and data protection clauses</li>
                <li>• Security standards compliance (SOC 2, GDPR, etc.)</li>
                <li>• Limited data processing scope for specific campaign functions</li>
                <li>• Regular security audits and compliance reviews</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8" id="limitation">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Limitation of Liability
            </CardTitle>
            <CardDescription>Legal limitations and disclaimers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Policy Enforcement</h3>
              <p className="text-gray-700">
                Amplify is not liable for any ad platform policy enforcement, account restrictions, or ad rejection
                resulting from your campaign settings. This includes but is not limited to:
              </p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>• Meta (Facebook/Instagram) policy violations or account restrictions</li>
                <li>• Google Ads policy enforcement or account suspensions</li>
                <li>• Other platform policy issues</li>
                <li>• Content moderation decisions by third-party platforms</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Guarantees</h3>
              <p className="text-gray-700">
                We offer no guarantees on ad performance and are not responsible for ad budget decisions made by users.
                Campaign performance depends on various factors including:
              </p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>• Market conditions and competition</li>
                <li>• Product quality and pricing</li>
                <li>• Target audience and timing</li>
                <li>• Platform algorithm changes</li>
                <li>• Budget allocation and bidding strategies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">General Liability Limitations</h3>
              <p className="text-gray-700">
                To the maximum extent permitted by law, Amplify's total liability for any claims arising from or related
                to these Terms or the Services shall not exceed the amount you paid us in the 12 months preceding the
                claim.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8" id="termination">
          <CardHeader>
            <CardTitle>Termination</CardTitle>
            <CardDescription>Account suspension and termination policies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Grounds for Termination</h3>
              <p className="text-gray-700 mb-2">We may suspend or terminate access to Amplify if you:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Breach these terms or our policies</li>
                <li>• Misuse platform integrations or violate third-party terms</li>
                <li>• Engage in unauthorized use of data</li>
                <li>• Violate applicable laws or regulations</li>
                <li>• Engage in fraudulent or harmful activities</li>
                <li>• Fail to pay subscription fees</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination Process</h3>
              <p className="text-gray-700">
                We will make reasonable efforts to notify you before termination, except in cases of severe violations
                or legal requirements. Upon termination:
              </p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>• Your access to the platform will be immediately suspended</li>
                <li>• Active campaigns may be paused or stopped</li>
                <li>• Data deletion will occur according to our retention policies</li>
                <li>• You may request data export before deletion</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">User-Initiated Termination</h3>
              <p className="text-gray-700">
                You may terminate your account at any time through your account settings or by contacting support.
                Termination will take effect at the end of your current billing period.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Additional Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Additional Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
              <p className="text-gray-700">
                These Terms are governed by and construed in accordance with the laws of Ontario, Canada, without regard
                to conflict of law principles.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Changes to Terms</h3>
              <p className="text-gray-700">
                We may update these Terms from time to time. Material changes will be communicated with at least 7 days'
                notice. Continued use after changes indicates acceptance of updated Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Severability</h3>
              <p className="text-gray-700">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in
                full force and effect.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              Contact Information
            </CardTitle>
            <CardDescription>Questions about these Terms of Service</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Legal Department</h3>
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
                <strong>Legal Notice:</strong> For legal matters and formal notices, please contact us in writing at the
                address above or via email at support@useamplify.ai.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
