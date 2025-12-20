import solarPanelsBg from '@/assets/solar-panels-bg.jpg';

const features = [
  {
    title: 'Reliable Power Solutions',
    description:
      'We provide high-quality products backed by professional installation and consistent performance across all our services.',
  },
  {
    title: 'End-to-End Support',
    description:
      'From consultation to installation to after-sales service, our team ensures smooth, uninterrupted power with long-term reliability.',
  },
  {
    title: 'Wide Range of Products',
    description:
      'We offer complete solutions — Solar systems, UPS, batteries, stabilizers, pumps, inverters, and lighting — all under one roof.',
  },
  {
    title: 'Energy-Efficient & Sustainable',
    description:
      'Our solar and eco-friendly technologies help customers save energy, lower costs, and reduce environmental impact.',
  },
  {
    title: 'Trusted for 25+ Years',
    description:
      'Decades of expertise and customer satisfaction make us a preferred choice for both residential and commercial power needs.',
  },
  {
    title: 'Building a Greener Tomorrow',
    description:
      'We believe in powering a cleaner, sustainable future through innovation and responsible energy solutions.',
  },
];

const WhyChooseSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20"
      style={{
        backgroundImage: `url(${solarPanelsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-navy/60" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-bold mb-6 italic">
            Why Choose King
            <br />
            Power Systems?
          </h2>
          <p className="text-primary-foreground/80 text-sm md:text-base max-w-2xl">
            With over 25 years of trusted services in the electrical and renewable energy sector, King Power Systems delivers reliable, efficient, and sustainable solar solutions tailored for homes and businesses. Our expertise spans solar systems, UPS & batteries, stabilizers, inverters, and solar lighting — ensuring dependable energy wherever you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <h3 className="font-playfair text-xl md:text-2xl text-primary-foreground font-semibold mb-3 italic">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
