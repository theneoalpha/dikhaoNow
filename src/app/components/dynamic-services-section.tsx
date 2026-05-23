"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/booking-modal";
import { useState } from "react";

interface DynamicServicesSectionProps {
  niche: {
    services: Array<{
      title: string;
      description: string;
      icon: string;
      features: string[];
    }>;
  };
  siteSettings: any;
}

const serviceStyles = [
  {
    shell: "bg-[var(--secondary)] border-[var(--secondary)]/60",
    accent: "from-[var(--primary)]/20 via-[var(--accent)]/10 to-transparent",
    badge:
      "border-[var(--primary)]/20 bg-[var(--primary)]/10 text-[var(--primary)]",
  },
  {
    shell: "bg-[var(--secondary)] border-[var(--secondary)]/60",
    accent: "from-[var(--accent)]/20 via-[var(--primary)]/10 to-transparent",
    badge:
      "border-[var(--accent)]/20 bg-[var(--accent)]/10 text-[var(--accent)]",
  },
  {
    shell: "bg-[var(--secondary)] border-[var(--secondary)]/60",
    accent: "from-[var(--primary)]/20 via-[var(--accent)]/10 to-transparent",
    badge: "border-[var(--text)]/12 bg-[var(--text)]/6 text-[var(--text)]/80",
  },
];

export function DynamicServicesSection({
  niche,
  siteSettings,
}: DynamicServicesSectionProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Section id="services" spacing="lg" className="relative z-10">
      <div className="absolute inset-x-0 top-20 -z-10 h-80  blur-3xl" />

      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2  border  rounded-full  text-sm mb-6"
        >
          <span className="text-purple-400">⚡</span>
          Our Services
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold  mb-6"
        >
          Complete{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Digital Solutions
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl  max-w-2xl mx-auto"
        >
          Everything you need to transform your offline business into a powerful
          online presence
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {niche.services.map((service, index) => {
          const style = serviceStyles[index % serviceStyles.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] ${style.shell}`}
            >
              {/* Gradient Accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${style.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <div
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${style.badge}`}
                  >
                    Service
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-[var(--text)] mb-4 group-hover:text-[var(--primary)] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[var(--text)]/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {service.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-[var(--text)]/80 text-sm"
                        >
                          <Check className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    {service.features.length > 3 && (
                      <div className="text-[var(--text)]/60 text-sm">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                )}

                {/* CTA */}
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  variant="outline"
                  className="group/btn w-full border-[var(--primary)]/20 text-[var(--primary)] hover:bg-[var(--primary)]/10"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className=" border  rounded-2xl p-8">
          <h3 className="text-2xl font-bold  mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className=" mb-6 max-w-2xl mx-auto">
            Join hundreds of local businesses who have already digitized their
            catalogs and increased their sales
          </p>
          <Button
            onClick={() => setIsBookingOpen(true)}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Start Your Digital Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </motion.div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        brandMark={siteSettings?.brandMark}
        booking={siteSettings?.booking}
      />
    </Section>
  );
}
