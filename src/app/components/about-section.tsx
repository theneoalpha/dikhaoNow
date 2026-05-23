"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/section";
import type { AboutContent } from "../types";

export function AboutSection({ title, content, image, features = [] }: AboutContent) {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const aboutY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const aboutScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const smoothAboutScale = useSpring(aboutScale, { damping: 20 });

  return (
    <Section id="about" spacing="none" className="relative overflow-visible bg-secondary/5 py-48">
      <div
        ref={aboutRef}
        className="container mx-auto grid items-center gap-24 px-6 lg:grid-cols-2"
      >
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="text-primary text-xs font-black uppercase tracking-[0.28em]">
              Growth Partner
            </div>
            <h2 className="font-display text-5xl font-black leading-[0.9] tracking-tight sm:text-8xl">
              {title}
            </h2>
            <p className="max-w-lg text-lg font-medium leading-8 text-muted-foreground md:text-xl">
              {content}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass flex items-center gap-4 rounded-3xl border-white/5 p-5 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-black text-primary">
                  ✓
                </div>
                <span className="text-base font-bold tracking-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {image ? (
          <motion.div style={{ scale: smoothAboutScale, y: aboutY }} className="group relative">
            <div className="absolute -inset-10 rounded-full bg-primary/10 opacity-50 blur-[100px]" />
            <div className="relative aspect-square overflow-hidden rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
              <Image
                src={image}
                alt={title}
                fill
                className="scale-110 object-cover transition-transform duration-1000 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
            </div>
            <div className="glass absolute -bottom-10 -left-10 rounded-[2.5rem] p-10 shadow-3xl">
              <div className="gradient-text text-5xl font-black">Startup Ready</div>
              <div className="text-muted-foreground text-xs font-bold uppercase tracking-[0.18em]">
                Social, search, ads, web
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </Section>
  );
}
