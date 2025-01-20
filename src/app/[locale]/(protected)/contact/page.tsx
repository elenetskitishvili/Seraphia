import ContactHero from "@/src/app/components/contact/ContactHero";
import ContactDetails from "@/src/app/components/contact/ContactDetails";
import ContactForm from "@/src/app/components/contact/ContactForm";
import ContactFAQ from "@/src/app/components/contact/ContactFAQ";

export default function Contact() {
  return (
    <div className="">
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <ContactFAQ />
    </div>
  );
}
