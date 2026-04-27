import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FounderSection from '@/components/FounderSection';
import CoursesSection from '@/components/CoursesSection';
import FacultySection from '@/components/FacultySection';
import WhyChooseUs from '@/components/WhyChooseUs';
import YoutubeSection from '@/components/YoutubeSection';
import AdmissionSection from '@/components/AdmissionSection';
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
      <YoutubeSection />
      <AdmissionSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
