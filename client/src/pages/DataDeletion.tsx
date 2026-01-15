import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export default function DataDeletion() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [reason, setReason] = useState("");
  const [hasActiveAccount, setHasActiveAccount] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your email and full name.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Request submitted",
      description: "We've received your data deletion request and will process it within 30 days.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Deletion Request</h1>
        <p className="text-gray-600 mb-8">
          We respect your privacy and your right to control your personal data. Use this form to request deletion of your information from our systems.
        </p>

        <div className="space-y-12">
          {/* Timeline Section */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Data Deletion Process Timeline</h2>
            <p className="text-gray-600 mb-6">Here's what happens after you submit your request</p>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Request Received</h3>
                  <p className="text-gray-600 text-sm">We receive and log your data deletion request immediately.</p>
                  <span className="text-xs text-violet-600 font-medium">Immediate</span>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Identity Verification</h3>
                  <p className="text-gray-600 text-sm">We verify your identity to ensure data security and prevent unauthorized requests.</p>
                  <span className="text-xs text-violet-600 font-medium">Within 24 hours</span>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Confirmation Email</h3>
                  <p className="text-gray-600 text-sm">You'll receive a confirmation email with your request ID and next steps.</p>
                  <span className="text-xs text-violet-600 font-medium">Within 24 hours</span>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Data Deletion Complete</h3>
                  <p className="text-gray-600 text-sm">All your personal data is permanently deleted from our systems.</p>
                  <span className="text-xs text-emerald-600 font-medium">Within 30 days</span>
                </div>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Submit Data Deletion Request</h2>
            <p className="text-gray-600 mb-6">
              Please fill out this form to request deletion of your personal data. All fields marked with * are required.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Request Submitted Successfully</h3>
                <p className="text-gray-600">
                  We've received your data deletion request. You'll receive a confirmation email within 24 hours with your request ID and next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="The email address associated with your data"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    data-testid="input-deletion-email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    data-testid="input-deletion-name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Reason for Deletion (Optional)
                  </label>
                  <Textarea
                    placeholder="Tell us why you're requesting deletion (optional)"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    data-testid="input-deletion-reason"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="active-account"
                    checked={hasActiveAccount}
                    onCheckedChange={(checked) => setHasActiveAccount(checked as boolean)}
                    data-testid="checkbox-active-account"
                  />
                  <label htmlFor="active-account" className="text-sm text-gray-600">
                    I have an active Amplify account
                  </label>
                </div>
                
                <p className="text-xs text-gray-500 bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <strong>Important:</strong> By submitting this form, you confirm that you are the owner of the provided email address and authorize us to delete all associated personal data. This action cannot be undone.
                </p>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                  data-testid="button-submit-deletion"
                >
                  {isSubmitting ? "Submitting..." : "Submit Data Deletion Request"}
                </Button>
              </form>
            )}
          </section>

          {/* What Data Will Be Deleted */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">What Data Will Be Deleted</h2>
            <p className="text-gray-600 mb-6">When you request data deletion, we will remove the following information:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Account Information</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Email address and contact details</li>
                  <li>Profile information and preferences</li>
                  <li>Account settings and configurations</li>
                  <li>Subscription and billing history</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Campaign Data</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Ad campaign configurations</li>
                  <li>Performance analytics and reports</li>
                  <li>Connected platform credentials</li>
                  <li>Usage logs and activity history</li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-4 bg-gray-100 rounded-lg p-3">
              <strong>Important Note:</strong> Some data may be retained for legal compliance purposes (such as financial records for tax obligations) as required by law. We will inform you of any such exceptions during the deletion process.
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about data deletion or need assistance with your request, our support team is here to help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <a href="mailto:support@useamplify.ai" className="text-violet-600 hover:underline">support@useamplify.ai</a>
                <p className="text-gray-500 text-sm mt-1">Response within 2 hours</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <a href="tel:+1-647-671-1349" className="text-violet-600 hover:underline">+1-647-671-1349</a>
                <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9 AM - 6 PM EST</p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-6">Information about your data protection rights under applicable privacy laws</p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Right to Deletion</h3>
                <p className="text-gray-600 text-sm">
                  Under GDPR, CCPA, and other privacy regulations, you have the right to request deletion of your personal data. We are committed to honoring these rights and processing your request within the legally required timeframes.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Data Portability</h3>
                <p className="text-gray-600 text-sm">
                  Before deletion, you can request a copy of your data. Contact our support team if you would like to export your information before proceeding with deletion.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Complaint Process</h3>
                <p className="text-gray-600 text-sm">
                  If you're not satisfied with how we handle your data deletion request, you have the right to file a complaint with your local data protection authority.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
