import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { ChapterMark } from "@/components/motifs/chapter-mark";
import { site } from "@/lib/content/site";
import { trustSignals } from "@/lib/content/trust";

export function OpeningMove() {
  return (
    <section id="story" className="relative bg-paper py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-7 lg:col-start-1">
          <Reveal>
            <ChapterMark number="00" label="The Opening Move" />
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-8 text-balance font-display text-3xl font-medium leading-snug text-ink sm:text-4xl lg:text-[2.75rem]">
              &ldquo;{site.positioningLine}&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft/90">
              Local REALTORS® combining real data with real strategy — one
              partner who sees the numbers before they move, one who sees the
              opportunity before it&rsquo;s obvious.
            </p>
          </Reveal>

          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-hairline pt-10 sm:grid-cols-4">
            {trustSignals.map((item, i) => (
              <Reveal key={item.label} delay={0.05 * i}>
                <dt className="font-display text-3xl text-plum-700">{item.stat}</dt>
                <dd className="mt-2 text-xs leading-snug text-ink-soft/80">{item.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal direction="left" className="relative hidden lg:col-span-4 lg:col-start-9 lg:block">
          <div className="sticky top-28 aspect-[3/4] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80"
              alt="Layered interior detail of a modern home"
              fill
              sizes="30vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
