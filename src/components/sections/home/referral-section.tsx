import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content/site";

export function ReferralSection() {
  return (
    <section className="bg-lime py-16 text-plum-950 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-label text-xs text-plum-700">Know Someone Moving?</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-medium leading-tight sm:text-4xl">
            Refer them, and earn {site.referral.amount} when their deal closes.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-plum-800/80">{site.referral.fineprint}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Button href="/referral" variant="primary" className="whitespace-nowrap">
            Submit a referral
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
