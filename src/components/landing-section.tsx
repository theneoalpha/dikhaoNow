"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LandingSectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * A reusable section that mimics a landing‑page hero.
 * It provides a gradient background, a centered title, optional subtitle,
 * and scroll‑reveal animations for any children.
 */
export function LandingSection({
  title,
  subtitle,
  children,
  className,
}: LandingSectionProps) {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center py-24 px-6 text-center bg-gradient-to-br from-primary/10 via-background to-secondary/5 rounded-xl overflow-hidden",
        className,
      )}
    >
      {/* Decorative background blur */}
      <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl pointer-events-none" />

      {/* Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-foreground mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-muted mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Children – each child gets a slight staggered reveal */}
      <motion.div
        className="w-full max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {React.Children.map(children, (child, i) => (
          <motion.div
            key={i}
            className="my-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
