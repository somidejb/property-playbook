import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { DimensionLine } from "@/components/motifs/dimension-line";

export function PageHeader({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex h-[70vh] min-h-[440px] items-end overflow-hidden bg-plum-950">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/60 to-plum-950/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-plum-950/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-36 lg:px-10 lg:pb-20">
        <Reveal direction="none">
          <p className="font-label text-xs text-lime">{eyebrow}</p>
        </Reveal>
        <Reveal direction="none" delay={0.05}>
          <h1 className="mt-6 max-w-2xl text-balance font-display text-5xl font-medium leading-[1.05] text-paper sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal direction="none" delay={0.1} className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-lg text-paper/75">{lead}</p>
          <div className="w-full max-w-xs sm:w-56">
            <DimensionLine />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
