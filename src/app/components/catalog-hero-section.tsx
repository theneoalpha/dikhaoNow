"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { BookingModal } from "@/components/booking-modal";
import { useState } from "react";
import Link from "next/link";

interface CatalogHeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    ctaText: string;
    badge: string;
    features: string[];
  };
}

export function CatalogHeroSection({ data }: CatalogHeroSectionProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="section-padding pt-28 hero-section">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-primary-30 rounded-full text-primary text-sm font-medium mb-8"
          >
            <BadgeCheck className="w-4 h-4" />
            {data.badge}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
          >
            Digital Catalog Management{" "}
            <span className="text-gradient">System</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto text-slate-300"
          >
            {data.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => setIsBookingOpen(true)}
              className="btn-primary group inline-flex items-center justify-center"
            >
              {data.ctaText}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link href="/catalogs">
              <button className="btn-outline inline-flex items-center justify-center">
                View Sample Catalogs
              </button>
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-300">
                <BadgeCheck className="w-5 h-5 flex-shrink-0 text-primary" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        brandMark="📱"
        booking={{
          formTitle: "Get Your Digital Catalog",
          formDescription: "Tell us about your business and we'll create a custom digital catalog for you.",
          submitText: "Request Catalog Demo",
          successTitle: "Request Received!",
          successDescription: "We'll contact you within 24 hours to discuss your digital catalog requirements."
        }}
      />
    </section>
  );
}