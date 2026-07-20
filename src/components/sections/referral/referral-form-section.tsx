"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { agents } from "@/lib/content/team";
import { site } from "@/lib/content/site";
import { relationshipOptions } from "@/lib/content/referral";

const inputClasses =
  "w-full border-b border-hairline bg-transparent py-3 text-base text-ink placeholder:text-ink-soft/50 focus:border-plum-700 focus:outline-none";

export function ReferralFormSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const yourName = `${data.get("yourFirstName")} ${data.get("yourLastName")}`;
    const yourPhone = data.get("yourPhone");
    const yourEmail = data.get("yourEmail");
    const referralName = data.get("referralName");
    const referralPhone = data.get("referralPhone");
    const referralEmail = data.get("referralEmail");
    const relationship = data.get("relationship");
    const details = data.get("details");

    const subject = encodeURIComponent(`Referral submission — ${referralName}`);
    const body = encodeURIComponent(
      `From: ${yourName}\nYour phone: ${yourPhone}\nYour email: ${yourEmail}\n\nReferral: ${referralName}\nReferral phone: ${referralPhone}\nReferral email: ${referralEmail}\nRelationship: ${relationship}\n\nDetails: ${details}`
    );
    window.location.href = `mailto:${agents[0].email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <div className="border border-hairline p-8 sm:p-12">
            <h2 className="font-display text-2xl text-ink">Referral Form</h2>

            {sent ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <p className="font-display text-2xl text-ink">Your email client should now be open.</p>
                <p className="mt-3 max-w-sm text-sm text-ink-soft/75">
                  If it didn&rsquo;t launch automatically, send the details directly to{" "}
                  <a href={`mailto:${agents[0].email}`} className="text-plum-700 underline cursor-pointer">
                    {agents[0].email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                <input required name="yourFirstName" placeholder="Your First Name *" className={inputClasses} />
                <input required name="yourLastName" placeholder="Your Last Name *" className={inputClasses} />
                <input required type="tel" name="yourPhone" placeholder="Your Phone Number *" className={inputClasses} />
                <input required type="email" name="yourEmail" placeholder="Your Email Address *" className={inputClasses} />

                <input required name="referralName" placeholder="Referral's Name *" className={`${inputClasses} sm:col-span-2 mt-4`} />
                <input type="tel" name="referralPhone" placeholder="Referral's Phone Number" className={inputClasses} />
                <input type="email" name="referralEmail" placeholder="Referral's Email Address" className={inputClasses} />

                <select name="relationship" defaultValue="" className={`${inputClasses} sm:col-span-2 cursor-pointer`}>
                  <option value="" disabled>
                    Your relationship with referral person
                  </option>
                  {relationshipOptions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>

                <textarea
                  name="details"
                  placeholder="Tell us a bit about the referral's current real estate needs."
                  rows={4}
                  className={`${inputClasses} resize-none sm:col-span-2`}
                />

                <Button type="submit" variant="primary" className="mt-6 sm:col-span-2 sm:w-fit">
                  Submit
                </Button>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs leading-relaxed text-ink-soft/60">
            {site.referral.fineprint}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
