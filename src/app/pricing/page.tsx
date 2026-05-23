import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing – DikhaoNow",
  description: "Explore our pricing plans for digital catalogs.",
};

export default function PricingPage() {
  return (
    <section className="prose prose-lg max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">Pricing</h1>
      <p>
        Choose the plan that fits your business. All plans include QR‑code
        integration, WhatsApp ordering, and mobile‑first design.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="border rounded-lg p-6 bg-card">
          <h2 className="text-2xl font-semibold mb-4">Starter</h2>
          <p className="text-4xl font-bold mb-2">$49/mo</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Up to 50 products</li>
            <li>Basic support</li>
            <li>QR code & WhatsApp</li>
          </ul>
        </div>
        <div className="border rounded-lg p-6 bg-card">
          <h2 className="text-2xl font-semibold mb-4">Growth</h2>
          <p className="text-4xl font-bold mb-2">$99/mo</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Up to 500 products</li>
            <li>Priority support</li>
            <li>Analytics dashboard</li>
          </ul>
        </div>
        <div className="border rounded-lg p-6 bg-card">
          <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
          <p className="text-4xl font-bold mb-2">Custom</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Unlimited products</li>
            <li>Dedicated account manager</li>
            <li>White‑label solution</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
