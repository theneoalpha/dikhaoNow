"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { HomePageContent } from "../types";
import { splitTitle } from "../utils";

interface MobileShowcaseSectionProps {
  content: Pick<HomePageContent, "showcaseEyebrow" | "showcaseTitle" | "showcaseDescription" | "showcaseFeatures">;
}

export function MobileShowcaseSection({ content }: MobileShowcaseSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { leadingText, highlightedText } = splitTitle(content.showcaseTitle);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let bestIndex = 0;
      let bestDistance = Infinity;

      featureRefs.current.forEach((element, index) => {
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const center = (rect.top + rect.bottom) / 2;
        const distance = Math.abs(center - viewportCenter);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      setActiveIndex(bestIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="showcase" className="relative bg-[var(--background)]">
      <div className="container mx-auto px-6 pt-24 pb-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary mb-4 text-[10px] font-black uppercase tracking-[0.4em]"
        >
          {content.showcaseEyebrow}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl font-black leading-none tracking-tighter sm:text-7xl"
        >
          {leadingText ? `${leadingText} ` : ""}
          <span className="gradient-text">{highlightedText}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-muted-foreground"
        >
          {content.showcaseDescription}
        </motion.p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col">
            {content.showcaseFeatures.map((feature, index) => (
              <div
                key={feature.title}
                ref={(element) => {
                  featureRefs.current[index] = element;
                }}
                className="flex min-h-screen items-center py-24"
              >
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-20% 0% -20% 0%", once: false }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="max-w-lg space-y-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-black text-primary">
                      {index + 1}
                    </span>
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                      Feature
                    </span>
                  </div>
                  <h3 className="font-display text-5xl font-black leading-none tracking-tighter lg:text-7xl">
                    {feature.title}
                  </h3>
                  <p className="text-xl font-medium leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>

                  <div className="relative mx-auto mt-8 aspect-[9/16] w-full max-w-[260px] overflow-hidden rounded-[2.5rem] border-[8px] border-[var(--secondary)] shadow-2xl lg:hidden">
                    <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-0 flex h-screen items-center justify-center">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-20 -z-10 rounded-full bg-primary/10 blur-[80px]" />

                <div className="relative h-[600px] w-[300px] overflow-hidden rounded-[3.5rem] border-[12px] border-[var(--secondary)] bg-[var(--background)] shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_50px_rgba(124,58,237,0.15)]">
                  <div className="absolute top-0 left-1/2 z-30 h-7 w-28 -translate-x-1/2 rounded-b-3xl bg-[#1a1a1b]" />
                  <div className="absolute bottom-2 left-1/2 z-30 h-1 w-24 -translate-x-1/2 rounded-full bg-white/20" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute inset-0 z-10"
                    >
                      <Image
                        src={content.showcaseFeatures[activeIndex].image}
                        alt={content.showcaseFeatures[activeIndex].title}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <div className="mb-1 text-center text-base font-bold text-white">
                          {content.showcaseFeatures[activeIndex].title}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute -right-6 top-1/2 flex -translate-y-1/2 flex-col gap-3">
                  {content.showcaseFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      animate={{
                        height: index === activeIndex ? 32 : 8,
                        opacity: index === activeIndex ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-[3px] rounded-full bg-primary"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
