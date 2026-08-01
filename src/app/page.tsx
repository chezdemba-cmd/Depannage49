import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Features } from "@/components/sections/Features";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Features />
      <ContactCTA />
    </>
  );
}
