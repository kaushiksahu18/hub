import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstructorsSection from "@/components/InstructorsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GalleryPage from "./gallery/page";

function App() {
  return (
    <div className="font-sans">
      {/* <Header /> */}
      <main>
        <HeroSection />
        <ServicesSection />
        <InstructorsSection />
        <GalleryPage />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
