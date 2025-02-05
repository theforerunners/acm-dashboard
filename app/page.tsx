import QuoteSection from "@/app/components/QuoteSection";
import AboutSection from "@/app/components/aboutsection";
import EventsSection from "@/app/components/Events";
import TeamSection from "@/app/components/TeamSection";
import GallerySection from "@/app/components/GallerySection";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <QuoteSection />
      <AboutSection />
      <EventsSection />
      <TeamSection />
      <GallerySection />
    </main>
  );
}
