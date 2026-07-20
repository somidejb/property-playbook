import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";

export const metadata: Metadata = {
  title: "Contact | The Property Playbook",
  description:
    "Reach Marty Smayda and Tamara Konopelky, RE/MAX Real Estate — a strategic buying and selling team.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Get In Touch"
          title="Let’s make your next move your best one yet."
          lead="Whether you're buying, selling, or just want to know where you stand — this is the first move."
          image="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=2400&q=80"
          imageAlt="A bright, sunlit modern living space with large windows"
        />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
