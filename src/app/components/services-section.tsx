"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import type { HomePageContent, ServiceCard } from "../types";
import { splitTitle } from "../utils";

interface ServicesSectionProps {
  content: Pick<HomePageContent, "servicesEyebrow" | "servicesTitle" | "servicesDescription">;
  services: ServiceCard[];
}

const cardStyles = [
  {
    shell: "bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(124,58,237,0.18),rgba(2,1,5,0.2))]",
    accent: "from-primary/25 via-primary/10 to-transparent",
    badge: "border-primary/20 bg-primary/10 text-primary",
  },
  {
    shell: "bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(236,72,153,0.16),rgba(2,1,5,0.18))]",
    accent: "from-accent/25 via-accent/10 to-transparent",
    badge: "border-accent/20 bg-accent/10 text-accent",
  },
  {
    shell: "bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(59,130,246,0.16),rgba(2,1,5,0.18))]",
    accent: "from-primary/20 via-accent/10 to-transparent",
    badge: "border-white/12 bg-white/6 text-white/78",
  },
];

function getServiceTag(title: string) {
  const value = title.toLowerCase();

  if (value.includes("instagram")) return "Social";
  if (value.includes("facebook")) return "Ads";
  if (value.includes("seo")) return "Web + Search";

  return "Service";
}

export function ServicesSection({ content, services }: ServicesSectionProps) {
  const { leadingText, highlightedText } = splitTitle(content.servicesTitle);

  return (
    <Section id="services" spacing="lg" className="relative z-10">
      <div className="absolute inset-x-0 top-20 -z-10 h-80 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.14),transparent_62%)] blur-3xl" />

      <div className="mb-18 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div className="space-y-6">
          <div className="text-primary text-xs font-black uppercase tracking-[0.28em]">
            {content.servicesEyebrow}
          </div>
          <h2 className="font-display text-5xl font-black leading-[0.92] tracking-tight text-balance sm:text-7xl lg:text-[5.2rem]">
            {leadingText ? `${leadingText} ` : ""}
            <span className="gradient-text">{highlightedText}</span>
          </h2>
        </div>

        <div className="glass relative overflow-hidden rounded-[2.4rem] border-white/10 p-8 md:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_40%,rgba(124,58,237,0.08))]" />
          <div className="relative space-y-5">
            <p className="max-w-2xl text-base font-medium leading-8 text-muted-foreground md:text-lg">
              {content.servicesDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              {services.map((service, index) => (
                <div
                  key={service._id}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-foreground/80"
                >
                  {`0${index + 1}`} {getServiceTag(service.title)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => {
          const style = cardStyles[index % cardStyles.length];

          return (
            <motion.article
              key={service._id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-[2.8rem] border border-white/10 ${style.shell} shadow-[0_24px_70px_rgba(0,0,0,0.28)]`}
            >
              <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${style.accent}`} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%,rgba(0,0,0,0.12))]" />

              {service.image ? (
                <div className="absolute right-0 bottom-0 h-44 w-36 overflow-hidden opacity-20">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ) : null}

              <div className="relative flex h-full min-h-[420px] flex-col justify-between p-7 md:p-8">
                <div className="space-y-7">
                  <div className="flex items-start justify-between gap-5">
                    <div className={`rounded-full border px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.2em] ${style.badge}`}>
                      {getServiceTag(service.title)}
                    </div>
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
                      {`0${index + 1}`}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-display max-w-[14ch] text-[2.05rem] font-black leading-[0.96] tracking-tight text-white md:text-[2.65rem]">
                      {service.title}
                    </h3>
                    <p className="max-w-[32ch] text-base leading-8 text-white/72 md:text-[1.05rem]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-[1.4rem] border border-white/10 bg-black/10 p-4 backdrop-blur-md">
                      <div className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                        Best For
                      </div>
                      <div className="mt-2 text-base font-bold text-white/88">
                        New businesses
                      </div>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/10 bg-black/10 p-4 backdrop-blur-md">
                      <div className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                        Goal
                      </div>
                      <div className="mt-2 text-base font-bold text-white/88">
                        Clear growth
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <div className="text-[11px] font-black uppercase tracking-[0.18em] text-white/48">
                      Built with modern tools
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-full border-white/10 bg-white/5 px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-white/82 hover:bg-white/10"
                    >
                      <Link href={`/services/${service.slug || service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        Learn More →
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
