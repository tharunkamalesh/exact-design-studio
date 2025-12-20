import { useState } from 'react';
import projectResidential from '@/assets/project-residential.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';
import projectIndustrial from '@/assets/project-industrial.jpg';

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
      'We offer complete home energy solutions that reduce electricity bills, cut emissions, and deliver years of reliable power. From solar installations to inverters and batteries, our systems are tailored for homes and designed for long-term value.',
    features: [
      'Rooftop solar installations',
      'Backup power systems',
      'Energy monitoring',
    ],
    images: [projectResidential, projectCommercial, projectIndustrial],
  },
  {
    id: 'commercial',
    title: 'COMMERICAL',
    image: projectCommercial,
    description:
      'We equip and maintain solar energy systems, UPS & home inverters, batteries, and backup power for offices, shops, showrooms, and small businesses. Our focus is on reducing power bills, improving efficiency, and keeping businesses operational with sustainable power solutions.',
    features: [
      'Commercial solar arrays',
      'UPS systems for offices',
      'Power factor correction',
    ],
    images: [projectCommercial, projectIndustrial, projectResidential],
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
    images: [projectIndustrial, projectResidential, projectCommercial],
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<string>('residential');
  const [currentSlide, setCurrentSlide] = useState(0);

  const project = projects.find((p) => p.id === activeProject) || projects[0];

  return (
    <section
      id="projects"
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/70 via-navy-dark/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gold font-bold italic">
              {project.title}
            </h2>

            <p className="text-primary-foreground/90 text-sm md:text-base leading-relaxed max-w-lg">
              {project.description}
            </p>

            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-gold text-navy-dark rounded text-sm font-medium transition-all hover:bg-gold-dark"
            >
              Contact us
            </a>
          </div>

          <div className="flex justify-end">
            <div className="flex gap-4">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                    index === 0
                      ? 'w-48 h-64 md:w-56 md:h-80'
                      : 'w-32 h-48 md:w-40 md:h-60 opacity-70'
                  }`}
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-navy-dark/20" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          {projects.map((p, index) => (
            <button
              key={p.id}
              onClick={() => {
                setActiveProject(p.id);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                activeProject === p.id ? 'bg-primary-foreground' : 'bg-primary-foreground/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
