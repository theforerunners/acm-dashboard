import Header from "@/app/components/Header";
import QuoteSection from "@/app/components/QuoteSection";
import AboutSection from "@/app/components/aboutsection";
import EventsSection from "@/app/components/Events";
import TeamSection from "@/app/components/TeamSection";
import GallerySection from "@/app/components/GallerySection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Header />
      <QuoteSection />
      <AboutSection />
      <EventsSection />
      <TeamSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
