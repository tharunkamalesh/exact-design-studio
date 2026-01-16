import HeroSection from '@/components/HeroSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;