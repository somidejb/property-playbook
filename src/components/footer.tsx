import { Logo } from "@/components/logo";
import { agents } from "@/lib/content/team";
import { site } from "@/lib/content/site";
import { DimensionLine } from "@/components/motifs/dimension-line";

export function Footer() {
  return (
    <footer className="bg-dossier text-paper">
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-10">
        <DimensionLine className="mb-14 opacity-50" color="var(--paper)" />

        <div className="grid gap-12 pb-14 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo tone="on-dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              {site.description}
            </p>
            <p className="mt-6 font-label text-[11px] text-lime">
              {site.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
            {agents.map((agent) => (
              <div key={agent.name}>
                <p className="font-display text-base text-paper">{agent.name}</p>
                <a href={`tel:${agent.phone.replace(/[^0-9+]/g, "")}`} className="mt-2 block text-sm text-paper/70 hover:text-lime cursor-pointer">
                  {agent.phone}
                </a>
                <a href={`mailto:${agent.email}`} className="mt-1 block text-sm text-paper/70 hover:text-lime cursor-pointer break-all">
                  {agent.email}
                </a>
              </div>
            ))}
          </div>

          <div>
            <p className="font-label text-[11px] text-paper/50">{site.brokerage.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">{site.brokerage.address}</p>
            <a href={`tel:${site.brokerage.officePhone.replace(/[^0-9+]/g, "")}`} className="mt-2 inline-block text-sm text-paper/70 hover:text-lime cursor-pointer">
              Office: {site.brokerage.officePhone}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-hairline-dark py-8 text-xs text-paper/45 lg:flex-row lg:items-center lg:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. {site.brokerage.name}. All rights reserved.</p>
          <p className="max-w-2xl leading-relaxed lg:text-right">{site.legal}</p>
        </div>
      </div>
    </footer>
  );
}
