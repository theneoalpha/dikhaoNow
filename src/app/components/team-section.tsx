"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import type { HomePageContent, TeamMember } from "../types";

interface TeamSectionProps {
  team: TeamMember[];
  content: Pick<HomePageContent, "teamEyebrow" | "teamTitle" | "teamDescription" | "teamQuote" | "teamQuoteAuthor">;
}

export function TeamSection({ team, content }: TeamSectionProps) {
  return (
    <Section id="team" spacing="lg">
      <div className="grid items-center gap-20 lg:grid-cols-2">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="text-primary text-xs font-black uppercase tracking-[0.28em]">
              {content.teamEyebrow}
            </div>
            <h2 className="font-display text-5xl font-black leading-[0.9] tracking-tighter sm:text-7xl">
              {content.teamTitle}
            </h2>
            <p className="max-w-md text-base font-medium leading-8 text-muted-foreground md:text-lg">
              {content.teamDescription}
            </p>
          </div>

          <div className="space-y-8">
            <div className="glass group relative overflow-hidden rounded-[3rem] border-white/5 p-10">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
              <p className="mb-6 text-lg font-medium leading-8 opacity-85 italic">
                &quot;{content.teamQuote}&quot;
              </p>
              <div className="text-xl font-black text-primary">— {content.teamQuoteAuthor}</div>
            </div>
          </div>
        </div>

        <div className="grid gap-10">
          {team.map((member) => (
            <motion.div
              key={member._id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-premium group relative overflow-hidden rounded-[4rem] p-10"
            >
              <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
                {member.image ? (
                  <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ) : null}
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h3 className="font-display text-[1.8rem] font-black tracking-tight">{member.name}</h3>
                  <div className="text-primary text-xs font-bold uppercase tracking-[0.18em]">
                    {member.role}
                  </div>
                  <p className="text-base font-medium leading-8 text-muted-foreground opacity-85">
                    {member.bio}
                  </p>
                  {member.skills?.length ? (
                    <div className="flex flex-wrap justify-center gap-2 pt-4 md:justify-start">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.18em]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
