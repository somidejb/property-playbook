"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { site } from "@/lib/content/site";
import { Button } from "@/components/ui/button";
import { CornerFrame } from "@/components/motifs/corner-frame";
import { DimensionLine } from "@/components/motifs/dimension-line";

const headlineLines = ["Every move you make", "in real estate should", "be a strategic one."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [10, -10]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [8, -8]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex h-[100svh] min-h-[680px] items-end overflow-hidden bg-plum-950"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY, x: parallaxX, scale: 1.06 }}>
        <motion.div style={{ y: parallaxY }} className="absolute inset-0 -m-4">
          <Image
            src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=2400&q=80"
            alt="A contemporary home at dusk, glowing from within"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/55 to-plum-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-plum-950/70 via-transparent to-transparent" />
      </motion.div>

      <CornerFrame className="m-6 sm:m-10" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-28"
      >
        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-label text-xs text-lime"
        >
          RE/MAX Real Estate &middot; Strategic Advisory
        </motion.p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] text-paper sm:text-6xl lg:text-7xl">
          {headlineLines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={prefersReducedMotion ? undefined : { y: "110%" }}
                animate={prefersReducedMotion ? undefined : { y: "0%" }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="max-w-md text-lg text-paper/75">
              {site.tagline} <span className="text-lime">{site.subTagline}</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/contact" variant="lime">
                Start the conversation
              </Button>
              <Button href="/#playbook" variant="outline-light">
                See the playbook
              </Button>
            </div>
          </div>

          <div className="hidden shrink-0 border border-paper/25 bg-plum-950/40 px-6 py-5 backdrop-blur-sm sm:block">
            <p className="font-display text-3xl text-paper">1,000+</p>
            <DimensionLine className="my-2 w-24" color="var(--lime)" />
            <p className="font-label text-[10px] text-paper/60">Transactions closed</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#story"
        aria-label="Scroll to learn more"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 cursor-pointer text-paper/60 hover:text-lime"
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
