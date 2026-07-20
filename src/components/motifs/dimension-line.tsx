"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A precise, straight "dimension line" (drafting-tool style, with end ticks)
 * — the brand's alternative to a decorative squiggle. Reads as blueprint /
 * measured-and-intentional rather than playful.
 */
export function DimensionLine({
  className,
  color = "var(--lime)",
  label,
  vertical = false,
}: {
  className?: string;
  color?: string;
  label?: string;
  vertical?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (vertical) {
    return (
      <svg viewBox="0 0 16 120" className={cn("h-full w-4", className)} preserveAspectRatio="none" aria-hidden="true">
        <motion.line
          x1="8"
          y1="1"
          x2="8"
          y2="119"
          stroke={color}
          strokeWidth="1.5"
          initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
          whileInView={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <line x1="2" y1="1" x2="14" y2="1" stroke={color} strokeWidth="1.5" />
        <line x1="2" y1="119" x2="14" y2="119" stroke={color} strokeWidth="1.5" />
        <circle cx="8" cy="60" r="2.5" fill={color} />
      </svg>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg viewBox="0 0 200 16" className="h-4 w-full" preserveAspectRatio="none" aria-hidden="true">
        <motion.line
          x1="1"
          y1="8"
          x2="199"
          y2="8"
          stroke={color}
          strokeWidth="1.5"
          initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
          whileInView={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <line x1="1" y1="2" x2="1" y2="14" stroke={color} strokeWidth="1.5" />
        <line x1="199" y1="2" x2="199" y2="14" stroke={color} strokeWidth="1.5" />
        <circle cx="100" cy="8" r="2.5" fill={color} />
      </svg>
      {label && <span className="whitespace-nowrap font-label text-[10px] text-current opacity-70">{label}</span>}
    </div>
  );
}
