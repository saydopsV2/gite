import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import GitesSection from "../components/GitesSection";
import RegionSection from "../components/RegionSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GitesSection />
      <RegionSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
