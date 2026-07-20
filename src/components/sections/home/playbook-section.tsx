import Image from "next/image";
import { ChapterMark } from "@/components/motifs/chapter-mark";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { SearchMockup } from "@/components/motifs/search-mockup";
import { plays } from "@/lib/content/playbook";
import { cn } from "@/lib/utils";

export function PlaybookSection() {
  return (
    <section id="playbook" className="bg-paper pb-0 pt-28 lg:pt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <ChapterMark number="02" label="The Playbook" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-2xl text-balance font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Five plays. Every one built to move you forward.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-md text-sm text-ink-soft/70 lg:hidden">
            Scroll through the full playbook below.
          </p>
        </Reveal>
      </div>

      {/* Desktop: sticky card stack. Each play pins under the last as you scroll. */}
      <div className="relative mt-16 hidden lg:block">
        {plays.map((play, i) => (
          <div
            key={play.number}
            className="sticky top-20"
            style={{ zIndex: 10 + i }}
          >
            <PlayCard play={play} />
          </div>
        ))}
      </div>

      {/* Mobile / tablet: plain stacked cards, no sticky (avoids jank on small screens). */}
      <div className="mt-16 flex flex-col gap-4 px-6 pb-4 lg:hidden">
        {plays.map((play) => (
          <PlayCard key={play.number} play={play} compact />
        ))}
      </div>
    </section>
  );
}

function PlayCard({ play, compact = false }: { play: (typeof plays)[number]; compact?: boolean }) {
  const dark = play.tone === "on-dark";

  return (
    <div
      className={cn(
        "relative overflow-hidden border-t-4 border-lime",
        dark ? "bg-plum-950 text-paper" : "bg-paper text-ink",
        compact ? "px-6 py-12" : "min-h-[85vh] px-6 py-16 lg:px-10 lg:py-20"
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-6 -top-10 select-none font-display text-[13rem] font-semibold leading-none sm:-right-4 sm:text-[16rem]",
          dark ? "text-paper/[0.04]" : "text-plum-900/[0.045]"
        )}
      >
        {play.number}
      </span>

      <div
        className={cn(
          "relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-12",
          !compact && "h-full"
        )}
      >
        <div className="lg:col-span-5">
          <span className={cn("font-label text-sm", dark ? "text-lime" : "text-plum-600")}>
            {play.number}
          </span>
          <h3 className={cn("mt-4 font-display font-medium", compact ? "text-2xl" : "text-3xl lg:text-4xl")}>
            {play.title}
          </h3>
          <p className={cn("mt-4 max-w-md leading-relaxed", dark ? "text-paper/70" : "text-ink-soft/85")}>
            {play.copy}
          </p>
          <Button
            href={play.href}
            variant={dark ? "outline-light" : "outline"}
            size="sm"
            className="mt-7"
          >
            {play.cta}
          </Button>
        </div>

        <div className="lg:col-span-7">
          {play.visual === "search-mockup" && <SearchMockup />}
          {play.visual === "photo" && play.image && play.imageFit === "contain" && (
            <div className={cn("relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden", compact && "max-w-[220px]")}>
              <Image
                src={play.image}
                alt={play.alt ?? ""}
                fill
                sizes="(min-width: 1024px) 30vw, 60vw"
                className="object-contain"
              />
            </div>
          )}
          {play.visual === "photo" && play.image && play.imageFit !== "contain" && (
            <div className={cn("relative aspect-[16/10] w-full overflow-hidden", compact && "aspect-[4/3]")}>
              <Image
                src={play.image}
                alt={play.alt ?? ""}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
