import React, { useEffect, useRef, useState } from 'react';
import kingLogo from '@/assets/king logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
];

const HeroSection = () => {
  const [activeLink, setActiveLink] = useState('Home');
  
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(1.1) contrast(1.05)' }}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Navbar integrated with hero section */}
      <nav className="absolute top-0 left-0 right-0 z-30 bg-transparent pt-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={kingLogo} alt="King Power Systems" className="h-10 object-contain bg-transparent" />
            </div>
            
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`text-white font-inter text-sm font-normal transition-all hover:opacity-80 ${
                      activeLink === link.name ? 'border-b border-white pb-1' : ''
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <a
              href="#contact"
              className="hidden md:inline-block px-6 py-2 border border-white text-white rounded-full text-sm font-inter font-normal transition-all hover:bg-white hover:text-gray-900"
            >
              Contact Us
            </a>
            
            <button className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Dark overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/25 z-10"></div>
      
      {/* Text content layer */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-2xl ml-auto mr-0 text-right">
            {/* Badge text */}
            <div className="inline-block px-4 py-2 border border-white border-opacity-60 rounded-full mb-6">
              <p className="text-sm font-inter font-medium text-white">
                Cut bills, not corners. Go solar today.
              </p>
            </div>

            {/* Main heading */}
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-[0.02em]">
              KING POWER SYSTEMS
            </h1>

            {/* Subtext */}
            <p className="text-white text-base md:text-lg mb-4 font-inter font-normal" style={{ opacity: '0.7' }}>
              Cut bills, boost savings, go green.
            </p>
            <p className="text-white text-base md:text-lg font-inter font-normal" style={{ opacity: '0.7' }}>
              Solar made easy, affordable & future-ready.
            </p>
          </div>
        </div>
      </div>
      
      {/* "SOLAR ENERGY" Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
        <h2 className="font-montserrat font-bold text-[8vw] md:text-[12vw] tracking-tight text-white whitespace-nowrap" 
            style={{ opacity: '0.15' }}>
          SOLAR ENERGY
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
