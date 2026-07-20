"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/content/nav";
import { site } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-paper/95 backdrop-blur border-b border-hairline"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="cursor-pointer">
          <Logo
            tone={scrolled || open ? "on-light" : "on-dark"}
            markClassName="h-9 w-9"
            className="[&_span:last-child]:text-base"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-label text-[11px] transition-colors duration-200 cursor-pointer",
                scrolled ? "text-ink-soft hover:text-plum-700" : "text-paper/80 hover:text-lime"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${site.brokerage.officePhone.replace(/[^0-9+]/g, "")}`}
            className={cn(
              "hidden items-center gap-2 whitespace-nowrap font-label text-[11px] transition-colors cursor-pointer xl:flex",
              scrolled ? "text-ink-soft hover:text-plum-700" : "text-paper/80 hover:text-lime"
            )}
          >
            <Phone size={13} />
            {site.brokerage.officePhone}
          </a>
          <Link
            href="/contact"
            className="whitespace-nowrap bg-lime px-5 py-2.5 font-label text-[11px] text-plum-950 transition-colors hover:bg-lime-bright cursor-pointer"
          >
            Next Move?
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn("cursor-pointer lg:hidden", scrolled || open ? "text-ink" : "text-paper")}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-hairline bg-paper lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-hairline py-4 font-display text-2xl text-ink cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-5 bg-plum-800 px-5 py-3.5 text-center font-label text-xs text-paper cursor-pointer"
              >
                What&rsquo;s Your Next Move?
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
