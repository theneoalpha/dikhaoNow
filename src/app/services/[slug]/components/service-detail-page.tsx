import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import type { ServiceDetailData } from "../types";

interface ServiceDetailPageProps {
  data: ServiceDetailData;
}

export function ServiceDetailPage({ data }: ServiceDetailPageProps) {
  const { service, details } = data;

  return (
    <main className="overflow-x-hidden pt-32">
      <Section spacing="lg" className="relative">
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_60%)] blur-3xl" />

        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <div className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
              Service Detail
            </div>
            <h1 className="font-display text-5xl font-black leading-[0.92] tracking-tight text-balance sm:text-7xl">
              {service.title}
            </h1>
            <p className="max-w-xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              {details.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="md" className="rounded-full">
                <Link href="/#contact">Get a Custom Plan</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="md"
                className="rounded-full"
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.8rem] border border-[var(--secondary)]/40 bg-[var(--secondary)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
            {service.image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-[2rem] bg-[var(--background)]/60 text-center">
                <div className="space-y-2">
                  <div className="text-[10px] font-black uppercase tracking-[0.24em] text-primary/70">
                    DikhaoNow
                  </div>
                  <div className="font-display text-3xl font-black text-[var(--text)]">
                    {service.title}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section spacing="lg">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-[2rem] p-8">
            <div className="text-primary text-[10px] font-black uppercase tracking-[0.24em]">
              What We Help With
            </div>
            <ul className="mt-5 space-y-4">
              {details.points.map((item) => (
                <li
                  key={item}
                  className="text-sm font-medium leading-relaxed text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-[2rem] p-8">
            <div className="text-primary text-[10px] font-black uppercase tracking-[0.24em]">
              What You Get
            </div>
            <ul className="mt-5 space-y-4">
              {details.outcomes.map((item) => (
                <li
                  key={item}
                  className="text-sm font-medium leading-relaxed text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-[2rem] p-8">
            <div className="text-primary text-[10px] font-black uppercase tracking-[0.24em]">
              How We Work
            </div>
            <ol className="mt-5 space-y-4">
              {details.process.map((item, index) => (
                <li
                  key={item}
                  className="text-sm font-medium leading-relaxed text-muted-foreground"
                >
                  {`0${index + 1}`} {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
    </main>
  );
}
