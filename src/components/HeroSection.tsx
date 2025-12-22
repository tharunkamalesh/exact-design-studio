import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
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
