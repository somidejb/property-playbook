"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const directionOffset: Record<"up" | "down" | "left" | "right" | "none", { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 32 },
  right: { x: -32 },
  none: {},
};

export function Reveal({
  children,
  className,
  as: Component = "div",
  direction = "up",
  delay = 0,
  duration = 0.7,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "span";
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent =
    Component === "li" ? motion.li : Component === "span" ? motion.span : motion.div;

  if (prefersReducedMotion) {
    const Static = Component;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionComponent>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function RevealItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
