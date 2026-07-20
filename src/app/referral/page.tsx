import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ReferralFormSection } from "@/components/sections/referral/referral-form-section";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content/site";
import { referralPage } from "@/lib/content/referral";

export const metadata: Metadata = {
  title: "Referral | The Property Playbook",
  description: "Refer a friend or family member to The Property Playbook and earn a $250 referral fee upon closing.",
};

export default function ReferralPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow={referralPage.eyebrow}
          title={referralPage.title}
          lead="A simple thank-you for trusting us with the people you care about."
          image="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=2400&q=80"
          imageAlt="A welcoming front porch with a swing bench"
        />

        <section className="bg-lime py-16 text-plum-950 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
            <Reveal direction="none">
              <p className="font-display text-3xl font-medium leading-tight sm:text-4xl">
                {referralPage.headline}
              </p>
            </Reveal>
            <Reveal direction="none" delay={0.05}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-plum-800/85">
                {referralPage.lead}
              </p>
            </Reveal>
            <Reveal direction="none" delay={0.1}>
              <p className="mt-6 font-label text-xs text-plum-700">
                {`${site.referral.amount} referral fee · paid on closing`}
              </p>
            </Reveal>
          </div>
        </section>

        <ReferralFormSection />
      </main>
      <Footer />
    </>
  );
}
