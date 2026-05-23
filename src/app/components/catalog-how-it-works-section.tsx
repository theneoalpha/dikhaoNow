"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Step {
  step: number;
  title: string;
  description: string;
  icon: string;
}

interface CatalogHowItWorksSectionProps {
  steps: Step[];
}

export function CatalogHowItWorksSection({
  steps,
}: CatalogHowItWorksSectionProps) {
  return (
    <section className="section-padding section-dark">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold  mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Get your catalog management system up and running in just 4 simple
            steps
          </p>
        </motion.div>

        {/* Desktop Timeline - Enhanced for Large Devices */}
        <div className="hidden lg:block gap-2">
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>

            <div className="flex justify-between items-start">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex flex-col items-center max-w-xs"
                >
                  {/* Step Circle with Premium Design */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-2xl border-4 border-accent relative z-10">
                      {step.step}
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 w-20 h-20 bg-primary rounded-full opacity-30 blur-lg animate-pulse"></div>

                    {/* Icon Badge */}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg border-2 border-primary z-20">
                      <span className="text-xl">{step.icon}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-secondary border border-primary-30 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-primary hover:bg-opacity-80">
                    <h3 className="text-xl font-bold  mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-center text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Connection Arrow for Desktop */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      className="absolute top-10 transform -translate-y-1/2"
                      style={{ left: `${25 + index * 25}%` }}
                    >
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Timeline */}
        <div className="hidden md:block lg:hidden gap-3">
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-md border-2 border-primary">
                    <span className="text-lg">{step.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-secondary border border-primary-30 rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-bold  mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex gap-6"
            >
              {/* Step Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg relative">
                  {step.step}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center shadow-md border border-primary">
                    <span className="text-sm">{step.icon}</span>
                  </div>
                </div>

                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-accent mx-auto mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold  mb-3">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-secondary to-section-light rounded-2xl p-8 border border-primary-30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold  mb-4">Ready to Get Started?</h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Join hundreds of local businesses who have transformed their
              product management with our system.
            </p>
            <button className="btn-primary">Start Your System Setup</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
