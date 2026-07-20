"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const cornerBase = "absolute h-6 w-6 sm:h-9 sm:w-9";

/** Viewfinder-style corner brackets — a precision/targeting motif that frames
 * a hero image instead of a decorative line. */
export function CornerFrame({ className, color = "var(--lime)" }: { className?: string; color?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const variants = {
    hidden: { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 1 },
  };

  const corners = [
    { pos: "left-5 top-5 sm:left-8 sm:top-8", border: "border-l-2 border-t-2" },
    { pos: "right-5 top-5 sm:right-8 sm:top-8", border: "border-r-2 border-t-2" },
    { pos: "left-5 bottom-5 sm:left-8 sm:bottom-8", border: "border-l-2 border-b-2" },
    { pos: "right-5 bottom-5 sm:right-8 sm:bottom-8", border: "border-r-2 border-b-2" },
  ];

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden="true">
      {corners.map((c, i) => (
        <motion.span
          key={c.pos}
          className={cn(cornerBase, c.pos, c.border)}
          style={{ borderColor: color }}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "show"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}
