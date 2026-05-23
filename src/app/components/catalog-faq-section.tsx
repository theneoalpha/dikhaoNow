"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface CatalogFAQSectionProps {
  faq: FAQ[];
}

export function CatalogFAQSection({ faq }: CatalogFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
              Questions
            </span>
          </h2>
          <p className="text-xl text-[var(--text)]/80 max-w-3xl mx-auto">
            Everything you need to know about our digital catalog services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-[var(--secondary)]/50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[var(--secondary)]/30 transition-colors"
                >
                  <span className="text-lg font-semibold text-[var(--text)] pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-[var(--primary)]" />
                    ) : (
                      <Plus className="w-6 h-6 text-[var(--text)]/40" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-[var(--text)]/80 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-[var(--secondary)] rounded-2xl p-8 border border-[var(--secondary)]/50">
            <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
              Still Have Questions?
            </h3>
            <p className="text-[var(--text)]/80 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Contact us via WhatsApp or email and
              we'll answer all your questions about digital catalogs for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[var(--accent)] text-[var(--text)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--accent)]/80 transition-colors flex items-center justify-center gap-2">
                <span>💬</span>
                WhatsApp Us
              </button>
              <button className="bg-[var(--primary)] text-[var(--text)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--primary)]/80 transition-colors">
                Send Email
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-[var(--accent)]/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                24hrs
              </div>
              <div className="text-[var(--text)]/80">Average Response Time</div>
            </div>
            <div className="bg-[var(--accent)]/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-[var(--accent)] mb-2">
                3-5 Days
              </div>
              <div className="text-[var(--text)]/80">Catalog Delivery Time</div>
            </div>
            <div className="bg-[var(--accent)]/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-[var(--primary)]/80 mb-2">
                100%
              </div>
              <div className="text-[var(--text)]/80">
                Satisfaction Guarantee
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
