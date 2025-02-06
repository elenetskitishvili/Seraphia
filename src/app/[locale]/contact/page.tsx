import ContactHero from "@/src/components/contact/ContactHero";
import ContactDetails from "@/src/components/contact/ContactDetails";
import ContactForm from "@/src/components/contact/ContactForm";
import ContactFAQ from "@/src/components/contact/ContactFAQ";
import PremiumCTA from "@/src/components/premium/PremiumCTA";

export default async function Contact() {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <ContactFAQ />
      <PremiumCTA />
    </>
  );
}
