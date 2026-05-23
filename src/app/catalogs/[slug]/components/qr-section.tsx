"use client";

import { QRGenerator } from "@/components/qr-generator";
import { Section } from "@/components/section";
import { useEffect, useState } from "react";

interface QRSectionProps {
  catalog: {
    slug: string;
    businessName: string;
    businessType: string;
    logo?: string;
  };
}

const businessTypeLabels = {
  tiles: "Tiles Dealer",
  marble: "Marble & Sanitary",
  carpenter: "Carpenter",
  furniture: "Furniture Maker",
  kitchen: "Modular Kitchen",
  interior: "Interior Designer",
  hardware: "Hardware Store",
  paint: "Paint Shop",
};

export function QRSection({ catalog }: QRSectionProps) {
  const [catalogUrl, setCatalogUrl] = useState("");

  useEffect(() => {
    setCatalogUrl(`${window.location.origin}/catalogs/${catalog.slug}`);
  }, [catalog.slug]);

  const businessTypeLabel = businessTypeLabels[catalog.businessType as keyof typeof businessTypeLabels] || catalog.businessType;

  if (!catalogUrl) {
    return null; // Don't render until we have the URL
  }

  return (
    <Section className="py-8">
      <QRGenerator
        catalogUrl={catalogUrl}
        businessName={catalog.businessName}
        businessType={businessTypeLabel}
        logo={catalog.logo}
        customMessage="Scan to view our complete product catalog and contact us directly!"
      />
    </Section>
  );
}