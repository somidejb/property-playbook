"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { ChapterMark } from "@/components/motifs/chapter-mark";
import { Reveal } from "@/components/reveal";
import { DimensionLine } from "@/components/motifs/dimension-line";
import { Button } from "@/components/ui/button";
import { agents, teamIntro, type Agent } from "@/lib/content/team";

export function TeamSection() {
  return (
    <section id="team" className="bg-plum-950 py-28 text-paper lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <ChapterMark number="01" label={teamIntro.eyebrow} tone="on-dark" />
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-balance font-display text-4xl font-medium leading-tight sm:text-5xl">
                {teamIntro.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-paper/70">{teamIntro.lead}</p>
              <p className="mt-4 font-label text-xs text-lime">{teamIntro.sub}</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 hidden w-32 lg:block">
              <DimensionLine />
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.1} className="relative lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/team/marty-tamara.png"
                alt="Marty Smayda and Tamara Konopelky, The Property Playbook"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 hidden h-full w-full border border-lime/30 sm:block" />
          </Reveal>
        </div>

        <div className="mt-24 grid gap-6 border-t border-hairline-dark pt-16 lg:grid-cols-2 lg:gap-8">
          {agents.map((agent, i) => (
            <Reveal key={agent.name} delay={i * 0.08}>
              <AgentCard agent={agent} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-hairline-dark p-8">
      <h3 className="font-display text-2xl">{agent.name}</h3>
      <p className="mt-1 font-label text-[11px] text-lime">{agent.role}</p>

      <p className="mt-5 text-sm leading-relaxed text-paper/70">{agent.teaser}</p>

      <ul className="mt-6 space-y-2 border-t border-hairline-dark pt-5">
        {agent.facts.map((fact) => (
          <li key={fact} className="flex items-start gap-2 text-xs text-paper/55">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lime" />
            {fact}
          </li>
        ))}
      </ul>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-6 flex cursor-pointer items-center gap-2 font-label text-[11px] text-paper/80 transition-colors hover:text-lime"
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-5 w-5 items-center justify-center border border-current"
        >
          <Plus size={11} />
        </motion.span>
        {open ? "Show less" : "Read full story"}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-4 border-t border-hairline-dark pt-6 text-sm leading-relaxed text-paper/70">
              {agent.bio.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={`tel:${agent.phone.replace(/[^0-9+]/g, "")}`} variant="outline-light" size="sm">
          {agent.phone}
        </Button>
        <Button href={`mailto:${agent.email}`} variant="ghost" size="sm" className="text-paper/70 hover:text-lime">
          Email
        </Button>
      </div>
    </div>
  );
}
