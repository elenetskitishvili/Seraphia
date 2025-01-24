import ContactHero from "@/src/app/components/contact/ContactHero";
import ContactDetails from "@/src/app/components/contact/ContactDetails";
import ContactForm from "@/src/app/components/contact/ContactForm";
import ContactFAQ from "@/src/app/components/contact/ContactFAQ";
import PremiumCTA from "@/src/app/components/premium/PremiumCTA";

export default function Contact() {
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
