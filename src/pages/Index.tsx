import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramSection from "@/components/InstagramSection";
import ContactSection from "@/components/ContactSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden bg-background text-foreground min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TrustSection />
      <PackagesSection />
      <TestimonialsSection />
      <InstagramSection />
      <ContactSection />
      <StickyMobileCTA />
      <Footer />
    </main>
  );
};

export default Index;
