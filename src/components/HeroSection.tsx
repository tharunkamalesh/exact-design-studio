import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-navy-dark/30" />

      <div className="relative z-10 container mx-auto px-6 py-20 mt-16">
        <div className="max-w-2xl mx-auto text-center md:text-left md:mx-0 md:ml-[40%]">
          <div className="inline-block px-4 py-2 border border-primary-foreground/50 rounded-full mb-6">
            <p className="text-primary-foreground text-sm font-medium">
              Cut bills, not corners. Go solar today.
            </p>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold mb-6 tracking-wide">
            KING POWER SYSTEMS
          </h1>

          <p className="text-primary-foreground/90 text-base md:text-lg mb-4 font-light">
            Cut bills, boost savings, go green.
          </p>
          <p className="text-primary-foreground/90 text-base md:text-lg mb-8 font-light">
            Solar made easy, affordable & future-ready.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-full text-sm font-medium transition-all hover:bg-primary-foreground hover:text-navy-dark"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <h2 className="text-outline-white text-[8vw] md:text-[12vw] font-playfair font-bold tracking-wider whitespace-nowrap">
          SOLAR ENERGY
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
