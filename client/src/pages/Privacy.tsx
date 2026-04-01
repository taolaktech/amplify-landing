import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-2">We respect your privacy and are committed to protecting the data you share with us through your use of Amplify.</p>
        <p className="text-sm text-gray-500 mb-8">Last Updated: Apr 1 2026 | Effective Date: Apr 1 2026</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              We respect your privacy and are committed to protecting the data you share with us through your use of Amplify. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered automated marketing platform and related services.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              By using our Services and connecting third-party accounts (including Google, Meta and Shopify), you consent to the access and use of your data as described in this Privacy Policy.
            </p>
          </section>

          <section id="what-we-collect">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Collect</h2>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Shopify Store Data</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Product catalogs, descriptions, and pricing information</li>
              <li>Order history and transaction data</li>
              <li>Customer insights and demographic information</li>
              <li>Store configuration and settings</li>
              <li>Inventory levels and product performance metrics</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Google User Data</h3>
            <p className="text-gray-600 mb-3">
              When you connect your Google account to Amplify, we may access the following data via Google OAuth:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
              <li>Basic profile information (such as your name and email address) through openid, userinfo.email, and userinfo.profile</li>
              <li>Google Ads data via the Google Ads API (https://www.googleapis.com/auth/adwords), including:
                <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                  <li>Campaign data (ads, creatives, targeting configurations)</li>
                  <li>Performance metrics (impressions, clicks, conversions, ROAS)</li>
                  <li>Account structure and campaign settings</li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-600">
              We only request access to Google user data that is necessary to provide Amplify's core functionality.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Ad Performance Metrics</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Campaign performance data from Facebook and Instagram</li>
              <li>Google Ads campaign metrics and insights</li>
              <li>Click-through rates, conversion data, and ROI metrics</li>
              <li>Audience engagement and demographic insights</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">User Input and Configuration</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Campaign configuration settings and preferences</li>
              <li>Budget allocations and bidding strategies</li>
              <li>Target audience selections and parameters</li>
              <li>Creative assets and advertising content</li>
              <li>Account settings and user preferences</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Authentication Credentials</h3>
            <p className="text-gray-600">
              Authentication credentials for connected third-party services are collected via secure OAuth protocols, including access tokens for Shopify store connections, Meta (Facebook/Instagram) business accounts, and Google Ads account access.
            </p>
          </section>

          <section id="google-api-compliance">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Google API Services User Data Policy Compliance</h2>
            <p className="text-gray-600 mb-4">
              Amplify's use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.
            </p>
            <p className="text-gray-600 mb-3">Specifically:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>We only use Google user data to provide user-facing features within Amplify</li>
              <li>We do not use Google user data for advertising, profiling, or resale</li>
              <li>We do not transfer Google user data to third parties for independent use</li>
              <li>We do not retain Google user data longer than necessary to provide our services</li>
            </ul>
          </section>

          <section id="meta-platform-compliance">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Meta Platform Data Compliance</h2>
            <p className="text-gray-600 mb-4">
              We collect Meta platform data in full compliance with Meta's Developer Platform Terms and data usage policies.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Platform Data Collection</h3>
            <p className="text-gray-600 mb-3">
              We collect Meta platform data to enable campaign creation, optimization, audience targeting, and performance reporting. Platform Data includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Ad Accounts and account metadata</li>
              <li>Campaign Structures and configurations</li>
              <li>Performance Insights and analytics data</li>
              <li>Page Metadata and business information</li>
              <li>Audience data for targeting optimization</li>
              <li>Creative assets and ad content</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Data Usage Scope</h3>
            <p className="text-gray-600">
              Meta platform data is used exclusively for campaign-related functions and is not sold, rented, or used for profiling unrelated to ad automation.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Access Revocation</h3>
            <p className="text-gray-600">
              You may revoke access at any time from your Meta settings by visiting Facebook Settings → Apps and Websites and removing Amplify from your connected applications.
            </p>
          </section>

          <section id="data-usage">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Usage</h2>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Use of Google User Data</h3>
            <p className="text-gray-600 mb-3">
              Amplify uses Google user data strictly to provide user-facing features, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Authenticating and identifying users securely</li>
              <li>Connecting and managing Google Ads accounts</li>
              <li>Enabling users to:
                <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                  <li>View campaign performance and analytics</li>
                  <li>Create, edit, and manage advertising campaigns</li>
                  <li>Receive AI-powered recommendations to optimize campaigns</li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-600 mt-3">
              Google user data is only used to provide and improve core application functionality.
            </p>
            <p className="text-gray-600 mt-2">
              We do not use Google user data for advertising, profiling, or resale purposes.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Service Improvement</h3>
            <p className="text-gray-600">
              We may use aggregated, anonymized data to improve our platform features and AI algorithms, including enhancing campaign optimization algorithms and developing new platform features.
            </p>
            <p className="text-gray-600 mt-4 font-medium">
              Important: We do not use your data to build user profiles outside the scope of ad automation or share your data with third parties for their marketing purposes.
            </p>
          </section>

          <section id="data-retention">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention & Deletion</h2>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Retention Policy</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Google user data: Retained only while the user has an active Amplify account or until access is revoked</li>
              <li>Active campaign data: Retained while campaigns are running</li>
              <li>Account information: Retained while account is active</li>
              <li>Billing records: Retained for 7 years for tax and legal compliance</li>
              <li>Support communications: Retained for 3 years</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Data Sharing</h3>
            <p className="text-gray-600 mb-3">
              We do not sell, rent, or trade user data, including Google user data.
            </p>
            <p className="text-gray-600 mb-2">We may share data only in the following limited circumstances:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
              <li>With trusted infrastructure providers (e.g., cloud hosting, databases) strictly required to operate Amplify</li>
              <li>With service providers that support platform functionality under strict data protection agreements</li>
              <li>When required by law, regulation, or legal process</li>
            </ul>
            <p className="text-gray-600">
              We do not share Google user data with third parties for advertising or marketing purposes.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Data Deletion Options</h3>
            <p className="text-gray-600 mb-3">
              You can request account deletion at any time. Use our <Link href="/data-deletion" className="text-violet-600 hover:underline">data deletion form</Link>, email us at support@useamplify.ai, or contact us through your account settings.
            </p>
            <p className="text-gray-600 mb-2">You may also delete your data by:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
              <li>Disconnecting your Google account from Amplify</li>
              <li>Revoking access via your Google account security settings</li>
            </ul>
            <p className="text-gray-600">
              All associated Google user data will be permanently deleted within 30 days of a valid request or disconnection.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Deletion Timeline</h3>
            <p className="text-gray-600">
              Upon receiving a valid deletion request, we will acknowledge your request within 2 business days and complete data deletion within 30 days.
            </p>
          </section>

          <section id="your-rights">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Access and Portability</h3>
            <p className="text-gray-600">
              You can request access to, correction of, or deletion of your data at any time. We will provide your data in a portable format within 30 days of a valid request.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Access Revocation</h3>
            <p className="text-gray-600">
              You have the right to revoke Amplify's access to your connected accounts at any time through your platform settings.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Legal Rights</h3>
            <p className="text-gray-600">
              Depending on your location, you may have additional rights under data protection laws such as GDPR, CCPA, or other applicable privacy regulations.
            </p>
          </section>

          <section id="data-security">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>End-to-end encryption of data in transit and at rest</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Multi-factor authentication and access controls</li>
              <li>Employee training on data protection and security</li>
              <li>SOC 2 Type II compliance and regular audits</li>
            </ul>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="font-semibold text-gray-900 mb-2">Data Protection Officer</p>
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
