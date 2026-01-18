import { useState } from 'react';
import servicesBg from '@/assets/services-bg.jpg';
import serviceSolarPanels from '@/assets/service-solar-panels.jpg';
import inverterImg from '@/assets/Solar inveter.jpg';
import pumpImg from '@/assets/Solar Water Pumps.jpg';
import industrialImg from '@/assets/service-industrial.jpg';
import onlineUpsImg from '@/assets/Online UPS.webp';
import batteriesImg from '@/assets/Batteries.jpg';
import upsImg from '@/assets/ups.jpg';
import stabilizersImg from '@/assets/Stabilizers.jpg';
import vfdImg from '@/assets/VFD Drives.webp';

interface SubService {
  title: string;
  image: string;
  description: string;
}

interface ServiceCard {
  id: number;
  title: string;
  image: string;
  description: string;
  details?: string[];
  subServices?: SubService[];
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: 'Solar Power Solutions',
    image: serviceSolarPanels,
    description: 'Comprehensive solar energy systems including panels, pumps, and street lights.',
    subServices: [
      {
        title: 'Solar Inverter',
        image: inverterImg,
        description: 'Advanced power conversion for maximum efficiency.'
      },
      {
        title: 'Solar Panel',
        image: serviceSolarPanels,
        description: 'High-performance PV modules for clean energy.'
      },
      {
        title: 'Solar Water Pump',
        image: pumpImg,
        description: 'Reliable water solutions powered by the sun.'
      },
    ],
  },
  {
    id: 2,
    title: 'Power Backup Systems',
    image: inverterImg,
    description: 'Reliable energy storage and backup solutions for uninterrupted operations.',
    subServices: [
      {
        title: 'Online UPS',
        image: onlineUpsImg,
        description: 'Uninterrupted power for critical industrial systems.'
      },
      {
        title: 'Batteries',
        image: batteriesImg,
        description: 'Deep-cycle solar batteries for long-lasting backup.'
      },
      {
        title: 'UPS',
        image: upsImg,
        description: 'Reliable power protection for home and office.'
      }
    ],
  },
  {
    id: 3,
    title: 'Power Conditioning & Control',
    image: industrialImg,
    description: 'Precision control and stable power for heavy industrial machinery.',
    subServices: [
      {
        title: 'Stabilizers',
        image: stabilizersImg,
        description: 'Digital and servo stabilizers for voltage consistency.'
      },
      {
        title: 'VFD Drives',
        image: vfdImg,
        description: 'Advanced motor control and energy management.'
      }
    ],
  },
];

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative min-h-screen py-24"
      style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-white mb-6">
            Our Solar Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-white max-w-3xl mx-auto">
            Empowering your future with sustainable, efficient, and reliable solar energy solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveCard(activeCard === service.id ? null : service.id)}
              className={`group relative overflow-hidden rounded-3xl h-[500px] md:h-[600px] shadow-2xl transition-all duration-700 cursor-pointer
                ${activeCard === service.id ? 'ring-4 ring-primary ring-inset scale-[1.02]' : 'hover:shadow-primary/20'}
              `}
            >
              {/* Main Background Image */}
              <div
                className={`absolute inset-0 transition-transform duration-1000 ${activeCard === service.id ? 'scale-110 blur-[2px]' : 'group-hover:scale-110 group-hover:blur-[2px]'}`}
                style={{
                  backgroundImage: `url("${service.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              {/* Default State Layer (Base Layer) */}
              <div className={`absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500 bg-gradient-to-t from-black/95 via-black/40 to-transparent
                ${activeCard === service.id ? 'opacity-0 translate-y-[-20px]' : 'opacity-100 translate-y-0 group-hover:opacity-0 group-hover:translate-y-[-20px]'}
              `}>
                <h3 className="text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-white text-center line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* Hover Page Layer (The "New Page" within the card) */}
              <div className={`absolute inset-0 bg-black/85 backdrop-blur-sm p-6 flex flex-col transition-all duration-700 ease-in-out
                ${activeCard === service.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0'}
              `}>
                <div className="text-center mb-6">
                  <h3 className="text-primary mb-2 italic">
                    {service.title}
                  </h3>
                  <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-4">
                  {service.subServices ? (
                    service.subServices.map((sub, index) => (
                      <div
                        key={index}
                        className="relative flex-1 group/sub overflow-hidden rounded-2xl border border-white/20 transition-all duration-500 hover:scale-[1.02] shadow-xl bg-slate-900"
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/sub:scale-110"
                          style={{ backgroundImage: `url("${sub.image}")` }}
                        />
                        {/* Subtle overlay only for text readability */}
                        <div className="absolute inset-0 bg-black/20 group-hover/sub:bg-black/10 transition-colors duration-500" />

                        <div className="absolute inset-0 flex flex-col justify-center px-6">
                          <h4 className="text-white text-sm md:text-base font-bold tracking-wide uppercase mb-1"
                            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
                            {sub.title}
                          </h4>
                          <p className="text-white text-[10px] md:text-xs font-semibold line-clamp-1"
                            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}>
                            {sub.description}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="space-y-3">
                      {service.details?.map((detail, index) => (
                        <div key={index} className="flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 shrink-0 shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                          <span className="text-xs md:text-sm font-semibold text-white/95">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
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
