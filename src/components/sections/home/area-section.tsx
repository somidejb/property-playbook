import Image from "next/image";
import { ChapterMark } from "@/components/motifs/chapter-mark";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content/site";
import { ServiceMap } from "@/components/map/map-loader";

export function AreaSection() {
  const { lat, lng } = site.brokerage.mapCoordinates;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <section id="area" className="bg-paper py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <ChapterMark number="04" label="Where We Work" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-2xl text-balance font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Where we work, block by block.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" direction="left">
            <div className="relative h-[420px] w-full overflow-hidden border border-hairline lg:h-[520px]">
              <ServiceMap />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5" direction="right">
            <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1641186539288-9c3f26725b12?w=1200&q=80"
                alt="A city skyline at dusk, near where our office is based"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>

            <p className="font-label text-[11px] text-plum-600">Areas We Know Best</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.neighbourhoods.map((n) => (
                <li
                  key={n}
                  className="border border-hairline px-3 py-1.5 text-xs text-ink-soft"
                >
                  {n}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-1 text-sm text-ink-soft">
              <p className="font-display text-lg text-ink">{site.brokerage.name}</p>
              <p>{site.brokerage.address}</p>
            </div>

            <Button href={directionsUrl} variant="primary" size="sm" className="mt-6">
              Get directions
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
