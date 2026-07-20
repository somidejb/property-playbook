import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { DimensionLine } from "@/components/motifs/dimension-line";

export function NextMoveSection() {
  return (
    <section id="valuation" className="relative overflow-hidden bg-plum-950 py-28 text-paper lg:py-40">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=80"
          alt="An aspirational modern home with a pool"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-plum-950 via-plum-950/70 to-plum-950" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal direction="none">
          <p className="font-label text-xs text-lime">Chapter 03 &middot; The Next Move</p>
        </Reveal>
        <Reveal direction="none" delay={0.05}>
          <h2 className="mt-8 text-balance font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
            What&rsquo;s your next move?
          </h2>
        </Reveal>
        <Reveal direction="none" delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-paper/70">
            Free downloads, checklists, and home-owner information — or a direct
            conversation with the team. Either way, the first move costs nothing.
          </p>
        </Reveal>
        <Reveal direction="none" delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="lime">
            Start the conversation
          </Button>
          <Button href="/#playbook" variant="outline-light">
            See the playbook
          </Button>
        </Reveal>
        <div className="mx-auto mt-14 h-16 w-6 opacity-50">
          <DimensionLine vertical />
        </div>
      </div>
    </section>
  );
}
