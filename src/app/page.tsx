import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FounderSection from '@/components/FounderSection';
import CoursesSection from '@/components/CoursesSection';
import FacultySection from '@/components/FacultySection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ParentTrustSection from '@/components/ParentTrustSection';
import ResultsSection from '@/components/ResultsSection';
import YoutubeSection from '@/components/YoutubeSection';
import TestimonialSection from '@/components/TestimonialSection';
import AdmissionSection from '@/components/AdmissionSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <CoursesSection />
      <FacultySection />
      <WhyChooseUs />
      <ParentTrustSection />
      <ResultsSection />
      <YoutubeSection />
      <TestimonialSection />
      <AdmissionSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
