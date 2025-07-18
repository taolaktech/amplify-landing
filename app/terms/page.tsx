import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle, Mail, Phone } from "lucide-react"
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
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These terms govern your use of Amplify's AI-powered marketing platform and related services.
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
            <CardDescription>Jump to specific sections of our terms of service</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#acceptance" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Acceptance of Terms</div>
                <div className="text-sm text-gray-600">Agreement to these terms</div>
              </a>
              <a href="#services" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Our Services</div>
                <div className="text-sm text-gray-600">What we provide</div>
              </a>
              <a href="#user-obligations" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">User Obligations</div>
                <div className="text-sm text-gray-600">Your responsibilities</div>
              </a>
              <a href="#payment" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Payment Terms</div>
                <div className="text-sm text-gray-600">Billing and subscriptions</div>
              </a>
              <a href="#intellectual-property" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Intellectual Property</div>
                <div className="text-sm text-gray-600">Rights and ownership</div>
              </a>
              <a href="#limitation" className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium">Limitation of Liability</div>
                <div className="text-sm text-gray-600">Legal limitations</div>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Acceptance of Terms */}
        <Card className="mb-8" id="acceptance">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or
              "your") and Amplify Technologies Inc. ("Amplify," "we," "us," or "our") regarding your use of our
              AI-powered automated marketing platform and related services (collectively, the "Services").
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound
              by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our Services.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <p className="text-blue-800 text-sm">
                <strong>Important:</strong> These Terms may be updated from time to time. Continued use of our Services
                after changes indicates your acceptance of the updated Terms.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Description of Services */}
        <Card className="mb-8" id="services">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Description of Services
            </CardTitle>
            <CardDescription>What Amplify provides to users</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AI-powered automated marketing campaign creation and optimization</li>
                <li>• Multi-platform advertising management (Google Ads, Facebook, Instagram, AdRoll)</li>
                <li>• Real-time analytics and performance reporting</li>
                <li>• Shopify and e-commerce platform integrations</li>
                <li>• Dynamic Ad Optimization (DAO) technology</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Availability</h3>
              <p className="text-gray-700">
                We strive to provide continuous service availability but do not guarantee uninterrupted access. Services
                may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Modifications</h3>
              <p className="text-gray-700">
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or
                without notice. We will make reasonable efforts to notify users of significant changes.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* User Obligations */}
        <Card className="mb-8" id="user-obligations">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              User Obligations and Prohibited Uses
            </CardTitle>
            <CardDescription>Your responsibilities when using our Services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Responsibilities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Provide accurate and complete information when creating your account</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Notify us immediately of any unauthorized use of your account</li>
                <li>• Be responsible for all activities that occur under your account</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Compliance Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Adhere to advertising platform policies (Google, Facebook, etc.)</li>
                <li>• Respect intellectual property rights of others</li>
                <li>• Follow data protection and privacy laws</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prohibited Uses</h3>
              <p className="text-gray-700 mb-2">You may not use our Services to:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Promote illegal products, services, or activities</li>
                <li>• Create misleading or deceptive advertising content</li>
                <li>• Violate third-party advertising platform policies</li>
                <li>• Engage in spam, fraud, or other harmful activities</li>
                <li>• Attempt to reverse engineer or compromise our systems</li>
                <li>• Use our Services for competitive intelligence or benchmarking</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Payment Terms */}
        <Card className="mb-8" id="payment">
          <CardHeader>
            <CardTitle>Payment Terms and Billing</CardTitle>
            <CardDescription>Subscription fees, billing cycles, and payment policies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Subscription Plans</h3>
              <p className="text-gray-700 mb-2">
                Our Services are offered through various subscription plans with different features and pricing. Current
                pricing is available on our website and may be updated from time to time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Billing and Payment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Subscription fees are billed in advance on a monthly or annual basis</li>
                <li>• Payment is due immediately upon subscription or renewal</li>
                <li>• We accept major credit cards and other payment methods as specified</li>
                <li>• All fees are non-refundable unless otherwise specified</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Price Changes</h3>
              <p className="text-gray-700">
                We may change our pricing at any time. For existing subscribers, price changes will take effect at the
                next billing cycle, with at least 30 days' advance notice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cancellation and Refunds</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You may cancel your subscription at any time through your account settings</li>
                <li>• Cancellation takes effect at the end of your current billing period</li>
                <li>• No refunds are provided for partial months or unused portions of your subscription</li>
                <li>• We may offer refunds at our sole discretion for exceptional circumstances</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8" id="intellectual-property">
          <CardHeader>
            <CardTitle>Intellectual Property Rights</CardTitle>
            <CardDescription>Ownership of content, technology, and user data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Intellectual Property</h3>
              <p className="text-gray-700 mb-2">
                Amplify owns all rights, title, and interest in and to the Services, including:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Software, algorithms, and AI technology</li>
                <li>• Trademarks, logos, and brand elements</li>
                <li>• Documentation, content, and user interfaces</li>
                <li>• Proprietary methodologies and processes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Content and Data</h3>
              <p className="text-gray-700">
                You retain ownership of your business data, advertising content, and other materials you provide to our
                Services. By using our Services, you grant us a limited license to use your content solely for providing
                and improving our Services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">License to Use Services</h3>
              <p className="text-gray-700">
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and
                use our Services for your business purposes during your subscription period.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data and Privacy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Data Protection and Privacy</CardTitle>
            <CardDescription>How we handle your information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Your privacy is important to us. Our collection, use, and protection of your personal information is
              governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Security</h3>
              <p className="text-gray-700">
                We implement industry-standard security measures to protect your data. However, no system is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Deletion</h3>
              <p className="text-gray-700">
                You have the right to request deletion of your personal data. Visit our{" "}
                <Link href="/data-deletion" className="text-blue-600 hover:text-blue-700">
                  data deletion page
                </Link>{" "}
                or contact us at support@useamplify.ai to submit a request.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8" id="limitation">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-blue-600" />
              Limitation of Liability and Disclaimers
            </CardTitle>
            <CardDescription>Legal limitations and disclaimers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Disclaimers</h3>
              <p className="text-gray-700 mb-2">
                Our Services are provided "as is" and "as available." We disclaim all warranties, express or implied,
                including:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Warranties of merchantability and fitness for a particular purpose</li>
                <li>• Guarantees of uninterrupted or error-free service</li>
                <li>• Warranties regarding the accuracy or completeness of content</li>
                <li>• Guarantees of specific marketing results or ROI</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
              <p className="text-gray-700 mb-2">
                To the maximum extent permitted by law, Amplify's total liability for any claims arising from or related
                to these Terms or the Services shall not exceed the amount you paid us in the 12 months preceding the
                claim.
              </p>
              <p className="text-gray-700">
                We shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                including lost profits, data loss, or business interruption.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Platforms</h3>
              <p className="text-gray-700">
                We are not responsible for the actions, policies, or performance of third-party advertising platforms
                (Google, Facebook, etc.) or their impact on your campaigns.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Indemnification */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Indemnification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              You agree to indemnify, defend, and hold harmless Amplify and its officers, directors, employees, and
              agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from
              your use of the Services, violation of these Terms, or infringement of any third-party rights.
            </p>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Termination</CardTitle>
            <CardDescription>How these Terms may end</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination by You</h3>
              <p className="text-gray-700">
                You may terminate your account and these Terms at any time by canceling your subscription through your
                account settings or contacting us.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination by Us</h3>
              <p className="text-gray-700 mb-2">
                We may terminate or suspend your access to the Services immediately, without prior notice, if you:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Violate these Terms or our policies</li>
                <li>• Engage in fraudulent or illegal activities</li>
                <li>• Fail to pay subscription fees</li>
                <li>• Pose a security risk to our systems or other users</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Effect of Termination</h3>
              <p className="text-gray-700">
                Upon termination, your right to use the Services will cease immediately. We may delete your account and
                data in accordance with our data retention policies.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Governing Law and Dispute Resolution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
              <p className="text-gray-700">
                These Terms are governed by and construed in accordance with the laws of Ontario, Canada, without regard
                to conflict of law principles.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
              <p className="text-gray-700">
                Any disputes arising from these Terms or the Services shall be resolved through binding arbitration in
                Toronto, Ontario, Canada, in accordance with the rules of the Ontario Arbitration Act.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* General Provisions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>General Provisions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Entire Agreement</h3>
              <p className="text-gray-700">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Amplify
                regarding the Services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Severability</h3>
              <p className="text-gray-700">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in
                full force and effect.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Assignment</h3>
              <p className="text-gray-700">
                You may not assign or transfer these Terms or your account without our written consent. We may assign
                these Terms without restriction.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Waiver</h3>
              <p className="text-gray-700">
                Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or
                any other provision.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Force Majeure</h3>
              <p className="text-gray-700">
                We shall not be liable for any failure to perform our obligations due to circumstances beyond our
                reasonable control, including natural disasters, government actions, or network failures.
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
