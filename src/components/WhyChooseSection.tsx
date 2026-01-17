import { useOnScreen } from "../hooks/useOnScreen";
import { useState, useEffect } from "react";
import whyBg from "../assets/why.jpg";

const stats = [
  { value: "200", label: "Solar Panels Installed" },
  { value: "25", label: "Years Experience" },
  { value: "600", label: "Customers Served" },
  { value: "100", label: "Percent Satisfaction" },
];

const keyStrengths = [
  {
    title: "Sustainability",
    value: "100%",
    description: "Commitment to eco-friendly technologies and green energy solutions",
  },
  {
    title: "Innovation",
    value: "Cutting-edge",
    description: "Latest technology solutions for enhanced performance",
  },
  {
    title: "Reliable Power Solutions",
    value: "Reliable",
    description: "High-quality products with professional installation and consistent performance.",
  }
];

const StatCounter = ({ value, suffix, label, index, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const increment = Math.ceil(value / 50); // Divide into 50 steps
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(current);
          }
        }, 20);
      }, index * 200); // Stagger the start time

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible, index, value]);

  return (
    <div
      className="text-center stat-item"
      style={{
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        opacity: isVisible ? '1' : '0',
        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
        transitionDelay: `${index * 200}ms`
      }}
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {isVisible ? count : 0}{suffix}
      </div>
      <div className="font-georgia text-[16px] md:text-[18px] text-white">
        {label}
      </div>
    </div>
  );
};

const WhyChooseSection = () => {
  const [containerRef, isVisible] = useOnScreen({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <section
      id="why-choose"
      className="py-24 bg-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${whyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay (65% opacity) for better text readability */}
      <div className="absolute inset-0 bg-black/65"></div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-georgia text-[32px] md:text-[42px] font-bold mb-6 text-white">
            Why Choose Us
          </h2>
          <p className="font-georgia text-[16px] md:text-[18px] text-white leading-relaxed max-w-2xl mx-auto opacity-90">
            We combine decades of industry expertise with innovative solutions to deliver exceptional results that exceed expectations.
          </p>
        </div>

        {/* Statistics Row - Main Highlight */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 justify-items-center">
          {stats.map((stat, index) => {
            const finalValue = parseInt(stat.value.replace(/[^0-9]/g, ''));

            return (
              <StatCounter
                key={index}
                value={finalValue}
                suffix={stat.value.replace(/[0-9]/g, '')}
                label={stat.label}
                index={index}
                isVisible={isVisible}
              />
            );
          })}
        </div>

        {/* Key Strengths Cards - Three supporting cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyStrengths.map((strength, index) => {
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-white/20 transition-all duration-500 hover:bg-black hover:border-black group bg-white/90 backdrop-blur-sm shadow-xl"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {strength.value}
                  </div>
                  <h3 className="font-georgia text-[20px] md:text-[22px] font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {strength.title}
                  </h3>
                  <p className="font-georgia text-[15px] md:text-[16px] text-gray-700 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {strength.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
