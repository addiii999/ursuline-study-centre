import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustHighlights from '@/components/TrustHighlights';
import CoursesSection from '@/components/CoursesSection';
import ResultsSection from '@/components/ResultsSection';
import FacultySection from '@/components/FacultySection';
import Testimonials from '@/components/Testimonials';
import DemoForm from '@/components/DemoForm';
import ParentTrustSection from '@/components/ParentTrustSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustHighlights />
      <CoursesSection />
      <ResultsSection />
      <FacultySection />
      <Testimonials />
      <DemoForm />
      <ParentTrustSection />
      <Footer />
    </>
  );
}
