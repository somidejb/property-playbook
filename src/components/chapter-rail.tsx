"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const chapters = [
  { number: "00", label: "Story", href: "#story" },
  { number: "01", label: "Team", href: "#team" },
  { number: "02", label: "Playbook", href: "#playbook" },
  { number: "03", label: "Next Move", href: "#valuation" },
  { number: "04", label: "Area", href: "#area" },
];

export function ChapterRail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 2xl:block">
      <ol className="flex w-6 flex-col items-center gap-3 border border-hairline bg-paper/85 px-2 py-4 backdrop-blur-sm">
        {chapters.map((chapter, i) => (
          <li key={chapter.href} className="group relative">
            <a href={chapter.href} aria-label={`Jump to ${chapter.label}`} className="block cursor-pointer py-0.5">
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  active === i ? "h-1.5 w-5 bg-plum-700" : "h-1.5 w-1.5 bg-ink-soft/35 group-hover:bg-ink-soft/70"
                )}
              />
              <span
                className={cn(
                  "pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap border border-hairline bg-paper px-2 py-1 font-label text-[10px] opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                  active === i ? "text-plum-800" : "text-ink-soft/70"
                )}
              >
                {chapter.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
