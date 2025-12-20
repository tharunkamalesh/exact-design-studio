import { useState } from 'react';
import servicesBg from '@/assets/services-bg.jpg';
import serviceSolarPanels from '@/assets/service-solar-panels.jpg';
import serviceInverters from '@/assets/service-inverters.jpg';
import serviceIndustrial from '@/assets/service-industrial.jpg';
import serviceInstallation from '@/assets/service-installation.jpg';

interface ServiceCard {
  id: number;
  title: string;
  image: string;
  heading: string;
  content: string[];
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: 'Solar Panels & Water Pumps',
    image: serviceSolarPanels,
    heading: 'Solar Panels & Pumping Solutions',
    content: [
      '500-725 Wp Solar Panels (DCR / Non-DCR), Bifacial & N-Type panels.',
      'Brands: Novasys, Premier, Loom',
      'Solar Water Pumps with PLDC Motor/Pump (450-725 Wp).',
      'Bifacial & N-Type Panels, Internal/External Drives.',
      'Reliable solar energy generation for homes, farms & industries.',
    ],
  },
  {
    id: 2,
    title: 'Inverters, UPS & Batteries',
    image: serviceInverters,
    heading: 'Power Backup & Energy Storage',
    content: [
      'UPS/Inverters from Microtek, Exide, Amaron, Luminous',
      'Solar Inverters: DEYE, VSOLE, EVVO, POLYCOB (4-150 kWp String Inverters)',
      'Batteries: Lead-acid (Microtek, Exide) + Lithium batteries',
      'Complete backup & storage systems for uninterrupted power.',
    ],
  },
  {
    id: 3,
    title: 'Industrial Power Systems',
    image: serviceIndustrial,
    heading: 'Stabilizers & Industrial Drives',
    content: [
      'Stabilizers by Krykard (1 kW – 500 kVA, Domestic & Industrial)',
      'AC Drives / VFD for Industrial Motors (PLDC in-built & external drives)',
      'Online UPS: Branded SMF, Exide, Amaron',
      'High-performance solutions for stable and efficient industrial operations.',
    ],
  },
  {
    id: 4,
    title: 'Installation & Support',
    image: serviceInstallation,
    heading: 'Professional Installation',
    content: [
      'Expert installation services for all solar and power systems',
      'Comprehensive after-sales support and maintenance',
      'Training and guidance for system operation',
      'Warranty support and quick response times',
    ],
  },
];

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative min-h-screen py-20"
      style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky-light/90 to-sky-blue/80" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-navy-dark font-bold mb-6">
            Our Solar Services
          </h2>
          <p className="text-navy/80 text-sm md:text-base max-w-2xl mx-auto">
            There are many powerful solutions we offer to support homes, businesses, and industries
            with reliable, efficient, and sustainable energy systems.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 mt-12 min-h-[500px]">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ease-in-out ${
                activeCard === service.id
                  ? 'md:flex-[3] flex-1'
                  : 'md:flex-1 flex-shrink-0'
              } min-h-[400px] md:min-h-[500px]`}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-playfair text-lg md:text-xl text-primary-foreground font-semibold mb-2">
                  {service.title}
                </h3>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    activeCard === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <h4 className="font-playfair text-xl md:text-2xl text-primary-foreground font-bold mb-4 mt-4">
                    {service.heading}
                  </h4>
                  <ul className="space-y-2">
                    {service.content.map((item, index) => (
                      <li key={index} className="text-primary-foreground/90 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
