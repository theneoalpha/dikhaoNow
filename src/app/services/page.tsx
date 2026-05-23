import { Metadata } from "next";
import { LandingSection } from "@/components/landing-section";

export const metadata: Metadata = {
  title: "Services – DikhaoNow",
  description: "Explore the services offered by DikhaoNow.",
};

export default function ServicesPage() {
  return (
    <LandingSection
      title="Our Services"
      subtitle="Digital catalog solutions for local businesses"
    >
      <p className="text-muted max-w-2xl mx-auto">
        This page showcases the various digital catalog solutions we provide for
        local businesses, including QR‑code integration, WhatsApp ordering, and
        mobile‑first designs. Content will be driven by Sanity CMS.
      </p>
    </LandingSection>
  );
}
