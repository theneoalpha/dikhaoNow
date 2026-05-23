"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  business: string;
  location: string;
  content: string;
  rating: number;
  image: string | null;
}

interface CatalogTestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function CatalogTestimonialsSection({
  testimonials,
}: CatalogTestimonialsSectionProps) {
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
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-primary">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-[var(--text)]/80 max-w-3xl mx-auto">
            Real stories from local business owners who transformed their sales
            with digital catalogs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[var(--secondary)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--secondary)]/50 h-full relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-black" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-[var(--primary)]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[var(--text)]/90 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-[var(--primary)] font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <div className="font-semibold text-[var(--text)]">
                      {testimonial.name}
                    </div>
                    <div className="text-[var(--primary)] text-sm font-medium">
                      {testimonial.business}
                    </div>
                    <div className="text-[var(--text)]/60 text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary/5 to-[var(--accent)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-[var(--secondary)] rounded-2xl p-8 shadow-lg border border-[var(--secondary)]/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                  4.9/5
                </div>
                <div className="text-[var(--text)]/80">Average Rating</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[var(--primary)] text-[var(--primary)]"
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--accent)] mb-2">
                  500+
                </div>
                <div className="text-[var(--text)]/80">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--primary)]/80 mb-2">
                  40%
                </div>
                <div className="text-[var(--text)]/80">Avg. Sales Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--primary)]/60 mb-2">
                  98%
                </div>
                <div className="text-[var(--text)]/80">Client Retention</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-primary rounded-2xl p-8 text-[var(--text)]">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-[var(--secondary)] mb-6 max-w-2xl mx-auto">
              Ready to transform your business like these successful
              entrepreneurs? Get your digital catalog and start seeing results
              within days.
            </p>
            <button className="bg-secondary px-8 py-3 rounded-lg font-semibold hover:bg-[var(--secondary)] transition-colors">
              Start Your Success Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
