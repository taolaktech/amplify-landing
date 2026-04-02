import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/lib/faqData";

export default function Faq() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-violet-600 hover:text-violet-700 text-sm mb-10">
            ← Back to Home
          </Link>

          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">Support</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h1>
            <p className="text-gray-500">
              Everything you need to know about Amplify and how it can help grow your Shopify store.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-gray-200 py-2"
                data-testid={`accordion-faq-${idx}`}
              >
                <AccordionTrigger className="text-gray-900 hover:no-underline text-left font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-8 bg-violet-50 rounded-2xl text-center border border-violet-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Still have questions?</h2>
            <p className="text-gray-500 text-sm mb-4">
              Can't find what you're looking for? Get in touch and we'll help you out.
            </p>
            <a
              href="mailto:hello@useamplify.ai"
              className="inline-flex items-center text-violet-600 font-medium text-sm hover:text-violet-700"
            >
              hello@useamplify.ai
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
