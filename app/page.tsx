import QuoteSection from "@/components/QuoteSection";
import AboutSection from "@/components/aboutsection";
import EventsSection from "@/components/Events";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main>
      <QuoteSection />
      <AboutSection />
      <EventsSection />
      <TeamSection />
      <GallerySection />
    </main>
  );
}
