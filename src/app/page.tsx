import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChapterRail } from "@/components/chapter-rail";
import { Hero } from "@/components/sections/home/hero";
import { OpeningMove } from "@/components/sections/home/opening-move";
import { TeamSection } from "@/components/sections/home/team-section";
import { PlaybookSection } from "@/components/sections/home/playbook-section";
import { NextMoveSection } from "@/components/sections/home/next-move-section";
import { ReferralSection } from "@/components/sections/home/referral-section";
import { AreaSection } from "@/components/sections/home/area-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <ChapterRail />
      <main>
        <Hero />
        <OpeningMove />
        <TeamSection />
        <PlaybookSection />
        <NextMoveSection />
        <ReferralSection />
        <AreaSection />
      </main>
      <Footer />
    </>
  );
}
