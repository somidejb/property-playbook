"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { agents } from "@/lib/content/team";
import { site } from "@/lib/content/site";

const reasons = [
  "Booking a Home Evaluation",
  "A Buyer",
  "A Seller",
  "Wanting a Referral",
  "Something Else",
];

const inputClasses =
  "w-full border-b border-hairline bg-transparent py-3 text-base text-ink placeholder:text-ink-soft/50 focus:border-plum-700 focus:outline-none";

export function ContactFormSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const phone = data.get("phone");
    const reason = data.get("reason");
    const message = data.get("message");

    const subject = encodeURIComponent(`New enquiry via The Property Playbook — ${reason}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nI am: ${reason}\n\n${message}`
    );
    window.location.href = `mailto:${agents[0].email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" direction="left">
            <h2 className="text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Reach out directly, or send a note.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft/85">
              We&rsquo;ll follow up within one business day &mdash; sooner if
              it&rsquo;s urgent.
            </p>

            <div className="mt-10 space-y-6 border-t border-hairline pt-8">
              {agents.map((agent) => (
                <div key={agent.name} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-lg text-ink">{agent.name}</p>
                    <p className="text-sm text-ink-soft/70">{agent.email}</p>
                  </div>
                  <Button href={`tel:${agent.phone.replace(/[^0-9+]/g, "")}`} variant="outline" size="sm">
                    {agent.phone}
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-hairline pt-8 text-sm text-ink-soft/70">
              <p className="font-display text-lg text-ink">{site.brokerage.name}</p>
              <p className="mt-1">{site.brokerage.address}</p>
              <a href={`tel:${site.brokerage.officePhone.replace(/[^0-9+]/g, "")}`} className="mt-2 inline-block cursor-pointer hover:text-plum-700">
                Office: {site.brokerage.officePhone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7" direction="right">
            {sent ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center border border-hairline p-10 text-center">
                <p className="font-display text-2xl text-ink">Your email client should now be open.</p>
                <p className="mt-3 max-w-sm text-sm text-ink-soft/75">
                  If it didn&rsquo;t launch automatically, reach us directly at{" "}
                  <a href={`mailto:${agents[0].email}`} className="text-plum-700 underline cursor-pointer">
                    {agents[0].email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                <input required name="firstName" placeholder="First Name" className={inputClasses} />
                <input required name="lastName" placeholder="Last Name" className={inputClasses} />
                <input required type="email" name="email" placeholder="Email" className={inputClasses} />
                <input required type="tel" name="phone" placeholder="Phone Number" className={inputClasses} />
                <input name="address" placeholder="Address (optional)" className={`${inputClasses} sm:col-span-2`} />
                <select required name="reason" defaultValue="" className={`${inputClasses} sm:col-span-2 cursor-pointer`}>
                  <option value="" disabled>
                    I am...
                  </option>
                  {reasons.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  rows={4}
                  className={`${inputClasses} resize-none sm:col-span-2`}
                />
                <Button type="submit" variant="primary" className="mt-6 sm:col-span-2 sm:w-fit">
                  Submit
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
