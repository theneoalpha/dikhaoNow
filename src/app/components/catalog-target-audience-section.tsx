"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface TargetAudience {
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

interface CatalogTargetAudienceSectionProps {
  audience: TargetAudience[];
}

export function CatalogTargetAudienceSection({
  audience,
}: CatalogTargetAudienceSectionProps) {
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
            Perfect for{" "}
            <span className="text-transparent bg-clip-text bg-primary">
              Local Businesses
            </span>
          </h2>
          <p className="text-xl text-[var(--text)]/80 max-w-3xl mx-auto">
            We specialize in helping offline, design-based businesses in tier-2
            and tier-3 cities build a strong digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audience.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-[var(--secondary)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[var(--secondary)]/50 h-full">
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {business.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[var(--text)] mb-4 group-hover:text-[var(--primary)] transition-colors">
                  {business.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text)]/80 mb-6 leading-relaxed">
                  {business.description}
                </p>

                {/* Examples */}
                <div className="space-y-2 mb-6">
                  {business.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full" />
                      <span className="text-[var(--text)] text-sm">
                        {example}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-[var(--primary)] font-medium group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl p-8 text-[var(--text)]">
            <h3 className="text-2xl font-bold mb-4">
              Don't See Your Business Type?
            </h3>
            <p className="text-[var(--secondary)] mb-6 max-w-2xl mx-auto">
              We work with all types of local businesses that need to showcase
              products or services. Contact us to discuss your specific
              requirements.
            </p>
            <button className="bg-[var(--text)] text-[var(--primary)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--secondary)] transition-colors">
              Get Custom Solution
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
