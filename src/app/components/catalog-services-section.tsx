"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface CatalogServicesSectionProps {
  services: Service[];
}

export function CatalogServicesSection({ services }: CatalogServicesSectionProps) {
  return (
    <section className="section-padding section-light">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Complete catalog management system designed for local businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover p-8 group"
            >
              {/* Service Number Badge */}
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <BadgeCheck className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm text-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}