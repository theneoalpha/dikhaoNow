"use client";

import { useState } from "react";
import { BookingModal } from "@/components/booking-modal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { fallbackSiteSettings } from "@/constants/data";
import type { CtaContent, SiteSettingsData } from "../types";

interface ContactCtaSectionProps {
  cta: CtaContent;
  siteSettings: SiteSettingsData;
}

export function ContactCtaSection({
  cta,
  siteSettings,
}: ContactCtaSectionProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Section id="contact" spacing="lg">
      <div className="group relative overflow-hidden rounded-xl bg-foreground px-10 py-32 text-center text-background md:px-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 opacity-30 transition-opacity duration-1000 group-hover:opacity-50" />

        <div className="relative z-10 space-y-12">
          <h2 className="font-display text-5xl font-black leading-[0.8] tracking-tighter text-balance sm:text-8xl lg:text-9xl">
            {cta.title}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg font-medium leading-8 text-balance opacity-70 md:text-xl">
            {cta.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Button
              onClick={() => setIsBookingOpen(true)}
              size="md"
              className="rounded-lg  px-8 py-5 text-base text-primary shadow-2xl hover:bg-white/90"
            >
              {cta.primaryCtaText}
            </Button>
            {cta.secondaryCtaText ? (
              <Button
                asChild
                variant="outline"
                size="md"
                className="rounded-lg px-8 py-5 text-base  backdrop-blur-md hover:bg-white/10"
              >
                <a
                  href={`mailto:${siteSettings.contactEmail || fallbackSiteSettings.contactEmail}`}
                >
                  {cta.secondaryCtaText}
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        brandMark={siteSettings.brandMark}
        booking={siteSettings.booking}
      />
    </Section>
  );
}
