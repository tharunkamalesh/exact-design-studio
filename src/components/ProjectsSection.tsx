import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import projectResidential from '@/assets/project-residential.jpg';
import projectResidentialNew from '@/assets/project-residential-new.jpg';
import projectResidentialErode from '@/assets/project-residential-erode.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';
import projectCommercialCoimbatore from '@/assets/project-commercial-coimbatore.jpg';
import projectCommercialTextile from '@/assets/project-commercial-textile.jpg';
import projectCommercialNamakkal from '@/assets/project-commercial-namakkal.jpg';
import projectIndustrial from '@/assets/project-industrial.jpg';
import projectIndustrial1 from '@/assets/project-industrial-1.jpg';
import projectIndustrial2 from '@/assets/project-industrial-2.jpg';
import projectIndustrial3 from '@/assets/project-industrial-3.jpg';

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  images: string[];
}

const projects: Project[] = [
  {
    id: 'residential',
    title: 'RESIDENTIAL',
    image: projectResidential,
    description:
      'We offer complete house energy solutions that reduce electricity bills, cut emissions, and deliver years of reliable power. From solar installations to inverters and batteries, our systems are tailored for homes and designed for long-term value.',
    features: [
      'Rooftop solar installations',
      'Backup power systems',
      'Energy monitoring',
    ],
    images: [projectResidentialNew, projectResidentialErode],
  },
  {
    id: 'commercial',
    title: 'COMMERCIAL',
    image: projectCommercial,
    description:
      'We equip and maintain solar energy systems, UPS & home inverters, batteries, and backup power for offices, shops, showrooms, and small businesses. Our focus is on reducing power bills, improving efficiency, and keeping businesses operational with sustainable power solutions.',
    features: [
      'Commercial solar arrays',
      'UPS systems for offices',
      'Power factor correction',
    ],
    images: [projectCommercialCoimbatore, projectCommercialTextile, projectCommercialNamakkal],
  },
  {
    id: 'industrial',
    title: 'INDUSTRIAL',
    image: projectIndustrial,
    description:
      'We offer complete solar and industrial electrical products like solar systems, UPS, stabilizers, and switchgear. From solar systems to heavy-duty stabilizers, we provide end-to-end solutions for managing and maintaining your heavy-duty power systems at all times.',
    features: [
      'Large-scale solar farms',
      'Industrial stabilizers',
      'Heavy-duty UPS systems',
    ],
    images: [projectIndustrial1, projectIndustrial2, projectIndustrial3],
  },
];

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[activeIndex];

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-navy-dark"
    >
      {/* Dynamic Background Layer with smooth cross-fade */}
      <div
        key={project.id}
        className="absolute inset-0 transition-opacity duration-1000 animate-in fade-in duration-1000"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Subtle Overlay to ensure text readability while keeping the "bg only" feel */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-6 pt-12 pb-24 flex flex-col min-h-screen">
        {/* Main Section Heading */}
        <div className="text-center mb-16 mt-4 animate-in fade-in slide-in-from-top duration-700">
          <h2 className="text-white mb-6">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          {/* Left Side: Content */}
          <div key={`${project.id}-content`} className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <h3 className="text-5xl md:text-7xl lg:text-8xl text-white uppercase italic drop-shadow-2xl">
              {project.title}
            </h3>

            <p className="text-white max-w-lg">
              {project.description}
            </p>
          </div>

          {/* Right Side: Sub-images */}
          <div key={`${project.id}-images`} className="flex justify-end pr-8 lg:pr-12 animate-in fade-in slide-in-from-right duration-700">
            <div className="flex gap-4 md:gap-8">
              {project.images.slice(0, 2).map((img, index) => (
                <div
                  key={`${project.id}-img-${index}`}
                  className="relative overflow-hidden rounded-3xl transition-all duration-700 w-40 h-64 md:w-64 md:h-[450px] shadow-[0_30px_60px_rgba(0,0,0,0.7)] hover:scale-[1.05] border border-white/20"
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute w-full top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 z-30 pointer-events-none">
        <button
          onClick={prevProject}
          className="p-3 md:p-5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-gold hover:border-gold hover:text-navy-dark transition-all duration-300 pointer-events-auto shadow-2xl active:scale-90 group"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 md:p-5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-gold hover:border-gold hover:text-navy-dark transition-all duration-300 pointer-events-auto shadow-2xl active:scale-90 group"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-500 rounded-full h-1.5 ${activeIndex === index ? 'w-12 bg-gold' : 'w-4 bg-white/30 hover:bg-white/50'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
