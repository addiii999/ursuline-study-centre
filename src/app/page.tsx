import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CoursesSection from '@/components/CoursesSection';
import FacultySection from '@/components/FacultySection';
import WhyChooseUs from '@/components/WhyChooseUs';
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
      <CoursesSection />
      <FacultySection />
      <WhyChooseUs />
      <AdmissionSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
