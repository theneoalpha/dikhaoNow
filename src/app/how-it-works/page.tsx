import { LandingSection } from "@/components/landing-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works – Scaleva",
  description: "Learn how DikhaoNow digitizes your catalog and drives sales.",
};

export default function HowItWorksPage() {
  return (
    <LandingSection
      title="How It Works"
      subtitle="Digitize your catalog in five simple steps"
    >
      <ol className="list-decimal text-left max-w-2xl mx-auto space-y-3 text-muted">
        <li>Gather product data and images.</li>
        <li>Upload them to Sanity CMS.</li>
        <li>
          Our platform syncs the data and builds a mobile‑friendly catalog.
        </li>
        <li>QR codes and WhatsApp integration let customers order directly.</li>
        <li>Analytics track performance.</li>
      </ol>
    </LandingSection>
  );
}
