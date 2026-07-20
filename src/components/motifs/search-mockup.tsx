"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";

const results = [
  {
    price: "$374,900",
    type: "House",
    area: "Maple District",
    beds: 3,
    baths: 3,
    sqft: "1,757",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=200&q=70",
  },
  {
    price: "$335,000",
    type: "House",
    area: "Riverside",
    beds: 3,
    baths: 2,
    sqft: "1,359",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=200&q=70",
  },
  {
    price: "$412,500",
    type: "Condo",
    area: "Uptown",
    beds: 2,
    baths: 2,
    sqft: "1,050",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=200&q=70",
  },
];

/** Custom-built listings-browser illustration for the Search Live play. */
export function SearchMockup() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="overflow-hidden border border-hairline bg-paper shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-hairline bg-plum-950 px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-paper/25" />
          <span className="h-2 w-2 rounded-full bg-paper/25" />
          <span className="h-2 w-2 rounded-full bg-paper/25" />
          <span className="ml-3 font-label text-[8px] text-paper/50">tamara.martysmayda.ca</span>
        </div>

        <div className="border-b border-hairline p-4">
          <div className="flex items-center gap-2 border border-hairline bg-white px-3 py-2.5">
            <Search size={13} className="text-ink-soft/50" />
            <span className="font-sans text-xs text-ink-soft/70">Search by city or neighbourhood</span>
            <span className="ml-auto flex items-center gap-1 border-l border-hairline pl-2 font-label text-[9px] text-plum-700">
              <SlidersHorizontal size={11} />
              Filters
            </span>
          </div>
        </div>

        <div className="divide-y divide-hairline">
          {results.map((r, i) => (
            <motion.div
              key={r.area}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="flex gap-3 p-3"
            >
              <div className="relative h-14 w-16 shrink-0 overflow-hidden">
                <Image src={r.image} alt="" fill sizes="64px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-display text-sm text-ink">{r.price}</p>
                  <span className="font-label text-[8px] text-plum-600">{r.type}</span>
                </div>
                <p className="mt-1 flex items-center gap-1 text-[11px] text-ink-soft/60">
                  <MapPin size={9} /> {r.area}
                </p>
                <p className="mt-1 text-[10px] text-ink-soft/50">
                  {r.beds} bed &middot; {r.baths} bath &middot; {r.sqft} sqft
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 hidden border border-hairline bg-lime px-3 py-2 font-label text-[9px] text-plum-950 shadow-xl sm:block">
        Updated live
      </div>
    </div>
  );
}
