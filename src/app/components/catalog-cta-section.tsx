"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { BookingModal } from "@/components/booking-modal";
import { useState } from "react";
import Link from "next/link";

export function CatalogCTASection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 ">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted">
              Join hundreds of local businesses who have increased their sales
              with digital catalogs.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                "3-5 Days Setup",
                "No Monthly Fees",
                "24/7 Customer Access",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 text-muted"
                >
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary group inline-flex items-center justify-center"
              >
                Get Your Digital Catalog
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link href="/catalogs">
                <button className="btn-outline inline-flex items-center justify-center">
                  View Sample Catalogs
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 text-sm text-accent">
              ⭐ Trusted by 500+ businesses • 4.9/5 rating • 30-day guarantee
            </div>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        brandMark="🚀"
        booking={{
          formTitle: "Get Your Digital Catalog",
          formDescription:
            "Tell us about your business and we'll create a custom digital catalog.",
          submitText: "Get Started",
          successTitle: "Request Received!",
          successDescription:
            "We'll contact you within 24 hours to start creating your digital catalog.",
        }}
      />
    </section>
  );
}
