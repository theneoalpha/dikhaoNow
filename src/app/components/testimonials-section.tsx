import Image from "next/image";
import { Section } from "@/components/section";
import type { HomePageContent, TestimonialCard } from "../types";

interface TestimonialsSectionProps {
  testimonials: TestimonialCard[];
  content: Pick<HomePageContent, "testimonialsEyebrow" | "testimonialsTitle" | "testimonialsDescription">;
}

export function TestimonialsSection({ testimonials, content }: TestimonialsSectionProps) {
  if (!testimonials.length) return null;

  return (
    <Section id="testimonials" spacing="lg" className="relative overflow-hidden bg-muted/30">
      <div className="absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="mb-20 space-y-6 text-center">
        <div className="text-primary text-sm font-black uppercase tracking-[0.2em]">
          {content.testimonialsEyebrow}
        </div>
        <h2 className="text-4xl font-black tracking-tight text-balance sm:text-6xl">
          {content.testimonialsTitle}
        </h2>
        <p className="mx-auto max-w-2xl text-xl font-medium text-balance text-muted-foreground opacity-80">
          {content.testimonialsDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className="group relative flex h-full flex-col rounded-[3rem] border border-border/50 bg-background/50 p-10 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
          >
            <div className="absolute top-8 right-10 select-none text-8xl font-black leading-none text-primary/5">
              &quot;
            </div>

            <div className="mb-8 flex gap-1">
              {[...Array(5)].map((_, index) => (
                <span
                  key={`${testimonial._id}-${index}`}
                  className={`text-xl transition-colors duration-300 group-hover:scale-110 ${
                    index < testimonial.rating ? "text-accent" : "text-muted"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  ★
                </span>
              ))}
            </div>

            <blockquote className="relative z-10 mb-10 flex-1 text-xl font-medium leading-relaxed text-muted-foreground italic">
              &quot;{testimonial.content}&quot;
            </blockquote>

            <div className="flex items-center gap-5 border-t border-border/50 pt-8">
              {testimonial.image ? (
                <div className="relative h-16 w-16 shrink-0 transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 transition-opacity group-hover:opacity-40" />
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="relative z-10 rounded-full object-cover p-[2px]"
                  />
                </div>
              ) : (
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10 text-xl font-black text-primary">
                  {testimonial.name[0]}
                </div>
              )}
              <div>
                <div className="text-lg font-black tracking-tight">{testimonial.name}</div>
                <div className="text-primary text-sm font-bold uppercase tracking-widest">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
