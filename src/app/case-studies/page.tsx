import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export default function CaseStudiesPage() {
  return (
    <main className="overflow-x-hidden pt-32">
      <Section spacing="lg" className="text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            Future Case Studies
          </div>
          <h1 className="font-display text-5xl font-black leading-[0.92] tracking-tight text-balance sm:text-7xl">
            We’ll publish real work here as we grow.
          </h1>
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
            We do not want to fill this page with fake projects. As we complete real work, this is where we will share the websites, campaigns, and growth stories we are genuinely proud of.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="md" className="rounded-full">
              <Link href="/#contact">Talk To Our Team</Link>
            </Button>
            <Button asChild variant="outline" size="md" className="rounded-full">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
