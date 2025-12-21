import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* Video Background with enhanced clarity */}
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
      
      {/* Reduced dark overlay - ~25% opacity */}
      <div className="absolute inset-0 bg-black/25 z-10" />
      
      {/* "SOLAR ENERGY" Background Text with reduced letter-spacing */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
        <h2 className="font-montserrat font-bold text-[8vw] md:text-[12vw] tracking-tight text-white whitespace-nowrap" 
            style={{ opacity: '0.15' }}>
          SOLAR ENERGY
        </h2>
      </div>
      
      {/* Hero Text Content - Positioned on the right side */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-2xl ml-auto mr-0 text-right">
            <div className="inline-block px-4 py-2 border border-gray-300 rounded-full mb-6">
              <p className="text-sm font-inter font-medium body-color">
                Cut bills, not corners. Go solar today.
              </p>
            </div>

            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl heading-color font-semibold mb-6 tracking-[0.04em] uppercase">
              KING POWER SYSTEMS
            </h1>

            <p className="body-color text-base md:text-lg mb-4 font-inter font-normal">
              Cut bills, boost savings, go green.
            </p>
            <p className="body-color text-base md:text-lg mb-8 font-inter font-normal">
              Solar made easy, affordable & future-ready.
            </p>

            <a
              href="#contact"
              className="inline-block px-8 py-3 border border-white text-white rounded-full text-sm font-inter font-normal transition-all hover:bg-white hover:text-gray-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;