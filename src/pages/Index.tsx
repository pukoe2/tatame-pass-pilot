import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueSection } from "@/components/ValueSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <ValueSection />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
