

const stats = [
  {
    number: '25+',
    label: 'Years of Experience',
    description: 'Trusted expertise in electrical and renewable energy solutions',
  },
  {
    number: '500+',
    label: 'Projects Completed',
    description: 'Successful installations across residential and commercial sectors',
  },
  {
    number: '98%',
    label: 'Customer Satisfaction',
    description: 'Quality service and reliable solutions',
  },
];

const features = [
  {
    icon: '⚡',
    title: 'Reliable Power Solutions',
    description: 'High-quality products with professional installation and consistent performance.',
  },
  {
    icon: '🛠️',
    title: 'End-to-End Support',
    description: 'Complete service from consultation to after-sales support.',
  },
  {
    icon: '🔧',
    title: 'Complete Solutions',
    description: 'Solar systems, UPS, batteries, stabilizers, pumps, inverters, and lighting.',
  },
  {
    icon: '🌱',
    title: 'Sustainable & Efficient',
    description: 'Eco-friendly technologies that save energy and reduce costs.',
  },
  {
    icon: '🛡️',
    title: 'Trusted Expertise',
    description: 'Over 25 years of proven reliability and customer satisfaction.',
  },
  {
    icon: '🌍',
    title: 'Greener Future',
    description: 'Innovation-driven solutions for a sustainable tomorrow.',
  },
];

const WhyChooseSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-georgia text-[34px] md:text-[42px] font-bold mb-6 text-navy-dark">
            Why Choose King Power Systems?
          </h2>
          <p className="font-georgia text-[16px] md:text-[18px] text-gray-700 max-w-2xl mx-auto">
            With over 25 years of trusted services in the electrical and renewable energy sector, King Power Systems delivers reliable, efficient, and sustainable solar solutions tailored for homes and businesses.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl md:text-5xl font-bold text-navy-dark mb-3">
                {stat.number}
              </div>
              <h3 className="font-georgia text-[18px] md:text-[20px] font-semibold text-navy-dark mb-2">
                {stat.label}
              </h3>
              <p className="font-georgia text-[14px] md:text-[16px] text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md group"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-georgia text-[18px] md:text-[20px] font-semibold text-navy-dark mb-3">
                {feature.title}
              </h3>
              <p className="font-georgia text-[15px] md:text-[16px] text-gray-700">
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