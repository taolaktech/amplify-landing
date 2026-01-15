import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 mb-2">These terms govern your use of Amplify's AI-powered marketing platform and related services.</p>
        <p className="text-sm text-gray-500 mb-8">Last Updated: July 2025 | Effective Date: July 2025</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By using Amplify, you agree to these Terms & Conditions, our Privacy Policy, and any additional terms specific to certain services. These Terms constitute a legally binding agreement between you ("User," "you," or "your") and Amplify Ads LLC ("Amplify," "we," "us," or "our").
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              If you do not agree to these Terms, you may not use our Services. Continued use of our Services after changes indicates your acceptance of the updated Terms.
            </p>
          </section>

          <section id="general-terms">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Terms</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Platform Description</h3>
            <p className="text-gray-600">
              Amplify is a subscription-based platform that enables e-commerce brands, particularly Shopify store owners, to create, manage, and optimize ad campaigns across platforms like Meta (Facebook, Instagram) and Google.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">User Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>You are responsible for ensuring that your use of Amplify complies with all applicable laws and regulations</li>
              <li>You must provide accurate and complete information when creating campaigns</li>
              <li>You are responsible for all content and advertising materials created through our platform</li>
              <li>You must comply with all third-party platform policies (Meta, Google, etc.)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Service Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>AI-powered automated marketing campaign creation and optimization</li>
              <li>Multi-platform advertising management (Google Ads, Facebook, Instagram)</li>
              <li>Real-time analytics and performance reporting</li>
              <li>Shopify and e-commerce platform integrations</li>
              <li>Dynamic Ad Optimization (DAO) technology</li>
            </ul>
          </section>

          <section id="meta-platform-data">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Meta Platform Data</h2>
            <p className="text-gray-600 mb-4">
              In compliance with Meta's Developer Platform Terms (developers.facebook.com/terms/dfc_platform_terms/)
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Data Access Authorization</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Amplify may access Meta data such as Pages, Ad Accounts, Ad Campaigns, and Insights strictly for campaign automation, audience analysis, and performance reporting</li>
              <li>You explicitly authorize Amplify to access and manage your connected Meta assets via Meta's APIs</li>
              <li>All data access is performed through secure, authorized API connections</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Data Usage Restrictions</h3>
            <p className="text-gray-600">
              Amplify does not use Platform Data to build user profiles outside the scope of ad automation. All Meta data is used exclusively for campaign creation and optimization, audience targeting and analysis, performance reporting and insights, and ad account management.
            </p>
          </section>

          <section id="data-restrictions">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Restrictions & User Control</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Access Revocation</h3>
            <p className="text-gray-600">
              You may revoke Amplify's access to your Meta account at any time through Facebook or Instagram account settings by visiting Settings → Apps and Websites, locating Amplify, and removing or modifying permissions.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Data Deletion</h3>
            <p className="text-gray-600">
              Amplify will delete user data upon account termination or upon direct user request. You can request data deletion using our <Link href="/data-deletion" className="text-violet-600 hover:underline">data deletion form</Link> or by emailing support@useamplify.ai.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Data Portability</h3>
            <p className="text-gray-600">
              You have the right to request a copy of your data in a portable format. We will provide your data within 30 days of a valid request.
            </p>
          </section>

          <section id="subprocessors">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subprocessors</h2>
            <p className="text-gray-600 mb-4">
              Amplify may use trusted third-party subprocessors that are bound to confidentiality and security obligations:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>OpenAI:</strong> LLM support for campaign optimization and content generation</li>
              <li><strong>Bannerbear:</strong> Creative generation and automated design services</li>
              <li><strong>Stripe:</strong> Payment processing and billing management</li>
              <li><strong>Cloud Infrastructure:</strong> Secure hosting and data storage services</li>
            </ul>
          </section>

          <section id="limitation">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Platform Policy Enforcement</h3>
            <p className="text-gray-600">
              Amplify is not liable for any ad platform policy enforcement, account restrictions, or ad rejection resulting from your campaign settings. This includes Meta (Facebook/Instagram) policy violations, Google Ads policy enforcement, and content moderation decisions by third-party platforms.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Performance Guarantees</h3>
            <p className="text-gray-600">
              We offer no guarantees on ad performance and are not responsible for ad budget decisions made by users. Campaign performance depends on various factors including market conditions, product quality, target audience, and platform algorithm changes.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">General Liability Limitations</h3>
            <p className="text-gray-600">
              To the maximum extent permitted by law, Amplify's total liability for any claims arising from or related to these Terms or the Services shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section id="termination">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Grounds for Termination</h3>
            <p className="text-gray-600 mb-2">We may suspend or terminate access to Amplify if you:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Breach these terms or our policies</li>
              <li>Misuse platform integrations or violate third-party terms</li>
              <li>Engage in unauthorized use of data</li>
              <li>Violate applicable laws or regulations</li>
              <li>Fail to pay subscription fees</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">User-Initiated Termination</h3>
            <p className="text-gray-600">
              You may terminate your account at any time through your account settings or by contacting support. Termination will take effect at the end of your current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Terms</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Governing Law</h3>
            <p className="text-gray-600">
              These Terms are governed by and construed in accordance with the laws of Ontario, Canada, without regard to conflict of law principles.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Changes to Terms</h3>
            <p className="text-gray-600">
              We may update these Terms from time to time. Material changes will be communicated with at least 7 days' notice. Continued use after changes indicates acceptance of updated Terms.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="font-semibold text-gray-900 mb-2">Legal Department</p>
              <p className="text-gray-600">Amplify Ads LLC</p>
              <p className="text-gray-600">909 Reinli Street</p>
              <p className="text-gray-600 mb-4">Austin, TX 78751</p>
              <p className="text-gray-600">Email: <a href="mailto:support@useamplify.ai" className="text-violet-600 hover:underline">support@useamplify.ai</a></p>
              <p className="text-gray-600">Phone: <a href="tel:+1-647-671-1349" className="text-violet-600 hover:underline">+1-647-671-1349</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
