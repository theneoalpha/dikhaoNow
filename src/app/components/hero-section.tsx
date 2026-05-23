"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BookingModal } from "@/components/booking-modal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import type { BookingContent, HeroContent } from "../types";
import { splitTitle } from "../utils";

interface HeroSectionProps extends HeroContent {
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  brandMark?: string;
  booking?: BookingContent;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  image,
  badge,
  secondaryCtaText,
  secondaryCtaHref,
  brandMark,
  booking,
}: HeroSectionProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const { leadingText, highlightedText } = splitTitle(title);

  return (
    <Section
      ref={containerRef}
      spacing="none"
      className="relative flex min-h-[120vh] flex-col items-center overflow-visible pt-32"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] h-[40%] w-[40%] rounded-full bg-[var(--primary)]/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] h-[40%] w-[40%] rounded-full bg-[var(--accent)]/5 blur-[120px]" />
      </div>

      <motion.div
        style={{ opacity, scale, y: "-10%" }}
        className="sticky top-48 z-20 max-w-5xl space-y-10 px-6 text-center"
      >
        {badge ? (
          <div className="glass inline-flex items-center gap-2 mt-4 rounded-full border-[var(--primary)]/10 px-4 py-2 text-base font-bold text-[var(--primary)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--primary)]" />
            </span>
            {badge}
          </div>
        ) : null}

        <h1 className="font-display text-5xl font-black leading-[0.9] tracking-tight text-balance sm:text-7xl lg:text-[5.5rem]">
          {leadingText ? `${leadingText} ` : ""}
          <span className="gradient-text">{highlightedText}</span>
        </h1>

        <p className="mx-auto max-w-3xl text-xl font-medium leading-8 text-balance text-muted-foreground opacity-80 md:text-2xl">
          {subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <Button
            onClick={() => setIsBookingOpen(true)}
            size="sm"
            className="rounded-full px-5 py-4 text-sm shadow-2xl shadow-[var(--primary)]/20"
          >
            {ctaText}
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="glass rounded-full px-5 py-4 text-base"
          >
            <Link href={secondaryCtaHref || "#projects"}>
              {secondaryCtaText || "Our Work"}
            </Link>
          </Button>
        </div>
      </motion.div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        brandMark={brandMark}
        booking={booking}
      />

      {image ? (
        <div className="perspective-1000 relative mt-24 w-full max-w-[1400px] px-6">
          <motion.div
            style={{ scale, rotateX: rotate }}
            className="relative aspect-[16/9] overflow-hidden rounded-[3rem] border border-white/20 bg-muted shadow-3xl md:aspect-[21/9]"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

            <motion.div
              style={{ y }}
              className="glass absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border-white/40 p-10 text-center md:block"
            >
              <div className="font-display mb-2 text-3xl font-black">
                Startup Growth
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary opacity-70">
                Social, ads, SEO, web
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute -bottom-10 left-1/2 -z-10 h-20 w-4/5 -translate-x-1/2 rounded-full bg-[var(--primary)]/20 blur-[100px]" />
        </div>
      ) : null}
    </Section>
  );
}
