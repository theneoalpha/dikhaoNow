"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/booking-modal";
import { useState } from "react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

interface PricingData {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

interface CatalogPricingSectionProps {
  pricing: PricingData;
}

export function CatalogPricingSection({ pricing }: CatalogPricingSectionProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            {pricing.title}
          </h2>
          <p className="text-xl text-[var(--text)]/80 max-w-3xl mx-auto">
            {pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "scale-105" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary text-[var(--text)] px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`bg-[var(--secondary)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border h-full ${
                  plan.popular
                    ? "border-[var(--primary)]/30 ring-2 ring-[var(--primary)]/10"
                    : "border-[var(--secondary)]/50"
                }`}
              >
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[var(--text)] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[var(--text)]/80 mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[var(--text)]">
                      {plan.price}
                    </span>
                    <span className="text-[var(--text)]/70 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text)]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:from-[var(--primary)]/80 hover:to-[var(--accent)]/80 text-[var(--text)]"
                      : "bg-primary"
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-[var(--secondary)] rounded-2xl p-8 shadow-lg border border-[var(--secondary)]/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-semibold text-[var(--text)]">
                  Fast Setup
                </div>
                <div className="text-[var(--text)]/80 text-sm">
                  3-5 days delivery
                </div>
              </div>
              <div>
                <div className="text-3xl mb-2">📱</div>
                <div className="font-semibold text-[var(--text)]">
                  Mobile Optimized
                </div>
                <div className="text-[var(--text)]/80 text-sm">
                  Works on all devices
                </div>
              </div>
              <div>
                <div className="text-3xl mb-2">💬</div>
                <div className="font-semibold text-[var(--text)]">
                  WhatsApp Support
                </div>
                <div className="text-[var(--text)]/80 text-sm">
                  Direct customer inquiries
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full px-6 py-3">
            <div className="w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-[var(--text)]" />
            </div>
            <span className="text-[var(--accent)] font-medium">
              30-day money-back guarantee • No setup fees • Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        brandMark="💰"
        booking={{
          formTitle: "Choose Your Plan",
          formDescription:
            "Tell us about your business and we'll help you select the perfect digital catalog plan.",
          submitText: "Get Pricing Details",
          successTitle: "Request Received!",
          successDescription:
            "We'll contact you within 24 hours with detailed pricing and next steps.",
        }}
      />
    </section>
  );
}
