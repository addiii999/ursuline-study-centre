import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import DashboardSection from "@/components/DashboardSection";
import YoutubeSection from "@/components/YoutubeSection";
import EnrollForm from "@/components/EnrollForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Fixed background layers */}
      <Background />

      {/* Scroll reveal observer (client-only) */}
      <ScrollReveal />

      {/* Fixed nav */}
      <Navbar />

      {/* Page content */}
      <main className="relative z-10">
        <HeroSection />
        <BentoGrid />
        <DashboardSection />
        <YoutubeSection />
        <Testimonials />
        <EnrollForm />
      </main>

      <Footer />
    </div>
  );
}
