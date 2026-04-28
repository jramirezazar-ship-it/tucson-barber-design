import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tucson Barber Y.B — Barbería en Yerba Buena, Tucumán" },
      { name: "description", content: "Cortes modernos, atención personalizada y resultados prolijos. Barbería en Chubut 2550, Yerba Buena. Lunes a Sábado 16:00–20:30." },
      { property: "og:title", content: "Tucson Barber Y.B — Barbería en Yerba Buena" },
      { property: "og:description", content: "Cortes modernos, atención personalizada y resultados prolijos que se notan." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main id="top">
      <Header />
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <AboutSection />
      <ContactSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
