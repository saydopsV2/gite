import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import GitesSection from "../components/GitesSection";
import RegionSection from "../components/RegionSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (!section) {
      return;
    }

    const target = document.getElementById(section);

    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.search]);

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
