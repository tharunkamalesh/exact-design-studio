import React, { useState, useEffect } from 'react';
import projectResidential from '@/assets/project-residential.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';
import projectIndustrial from '@/assets/project-industrial.jpg';

const AnimatedProjectSections = () => {
  const projects = [
    {
      title: "Residential Projects",
      description: "Tailored solar solutions for homes, designed to maximize energy efficiency and reduce electricity bills. Our residential installations blend seamlessly with your home's architecture while delivering reliable, clean energy.",
      imageCards: [projectResidential, projectCommercial, projectIndustrial], // Using different images for each card
    },
    {
      title: "Commercial Projects",
      description: "Comprehensive solar systems for businesses aiming to reduce operational costs and environmental impact. Our commercial solutions scale with your business needs while ensuring maximum ROI.",
      imageCards: [projectCommercial, projectIndustrial, projectResidential], // Using different images for each card
    },
    {
      title: "Industrial Projects",
      description: "Large-scale solar installations for industrial facilities requiring significant power solutions. Our industrial-grade systems ensure consistent performance and durability under demanding conditions.",
      imageCards: [projectIndustrial, projectResidential, projectCommercial], // Using different images for each card
    }
  ];

  // State to manage the active card for each section
  const [activeCards, setActiveCards] = useState([0, 0, 0]); // One for each section

  // Animation effect for each section
  useEffect(() => {
    const intervals = projects.map((_, sectionIndex) => {
      const interval = setInterval(() => {
        setActiveCards(prev => {
          const newActiveCards = [...prev];
          // Cycle through cards 0, 1, 2
          newActiveCards[sectionIndex] = (newActiveCards[sectionIndex] + 1) % 3;
          return newActiveCards;
        });
      }, 3000); // Change every 3 seconds

      return interval;
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {projects.map((project, sectionIndex) => (
          <div 
            key={sectionIndex} 
            className="mb-20 last:mb-0 flex flex-col lg:flex-row items-center gap-10"
          >
            {/* Static Text Content - Left Side */}
            <div className="lg:w-1/2 w-full">
              <h2 
                className="font-georgia text-[34px] md:text-[52px] font-bold leading-[1.15] mb-6 text-navy-dark"
                style={{ fontSize: 'clamp(34px, 5vw, 52px)' }}
              >
                {project.title}
              </h2>
              <p className="font-georgia text-[15px] md:text-[20px] font-medium leading-[1.5] mb-4 text-gray-700"
                 style={{ fontSize: 'clamp(15px, 2.5vw, 20px)' }}>
                Subheading for {project.title.toLowerCase()} projects
              </p>
              <p 
                className="font-georgia text-[15px] md:text-[17px] font-normal leading-[1.7] text-gray-700 max-w-[580px]"
                style={{ fontSize: 'clamp(15px, 2.5vw, 17px)' }}
              >
                {project.description}
              </p>
            </div>

            {/* Animated Cards - Right Side */}
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="relative w-full max-w-md h-80">
                {project.imageCards.map((image, cardIndex) => (
                  <div
                    key={cardIndex}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                      activeCards[sectionIndex] === cardIndex
                        ? 'scale-110 z-20 opacity-100'  // Active card: larger, forward, fully opaque
                        : 'scale-95 z-10 opacity-70'    // Inactive cards: smaller, back, semi-transparent
                    }`}
                    style={{
                      transform: `translateY(${cardIndex * 10}px) ${activeCards[sectionIndex] === cardIndex ? 'scale(1.1)' : 'scale(0.95)'}`
                    }}
                  >
                    <div className="w-full h-full relative">
                      <img
                        src={image}
                        alt={`${project.title} project ${cardIndex + 1}`}
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-xl">
                        <h3 
                          className="font-georgia text-[16px] md:text-[18px] font-semibold text-white truncate"
                          style={{ fontSize: 'clamp(16px, 2vw, 18px)' }}
                        >
                          Card Title {cardIndex + 1}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedProjectSections;