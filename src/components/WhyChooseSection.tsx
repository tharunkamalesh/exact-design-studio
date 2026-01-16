import { useOnScreen } from "../hooks/useOnScreen";
import { useState, useEffect } from "react";

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
    bgColor: "bg-sky-blue/5"
  },
  {
    title: "Innovation",
    value: "Cutting-edge",
    description: "Latest technology solutions for enhanced performance",
    bgColor: "bg-gold/5"
  },
  {
    title: "Reliable Power Solutions",
    value: "",
    description: "High-quality products with professional installation and consistent performance.",
    bgColor: "bg-gray-50"
  },
  {
    title: "Sustainable & Efficient",
    value: "",
    description: "Eco-friendly technologies that save energy and reduce costs.",
    bgColor: "bg-gray-50"
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
      <div className="text-4xl md:text-5xl font-bold text-navy-dark mb-2">
        {isVisible ? count : 0}{suffix}
      </div>
      <div className="font-georgia text-[16px] md:text-[18px] text-gray-700">
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
  
  const [animateCards, setAnimateCards] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      setAnimateCards(true);
    }
  }, [isVisible]);

  return (
    <section 
      id="why-choose"
      className="py-20 bg-white"
    >
      <div ref={containerRef} className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-georgia text-[32px] md:text-[42px] font-bold mb-6 text-navy-dark">
            Why Choose Us
          </h2>
          <p className="font-georgia text-[16px] md:text-[18px] text-gray-700 leading-relaxed max-w-2xl mx-auto">
            We combine decades of industry expertise with innovative solutions to deliver exceptional results that exceed expectations.
          </p>
        </div>
        
        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 justify-items-center">
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
        
        {/* Key Strengths Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {keyStrengths.slice(0, 2).map((strength, index) => {
            return (
              <div 
                key={index}
                className={`p-8 rounded-2xl border-2 border-gray-300 transition-all duration-500 hover:bg-black hover:text-white group ${strength.bgColor} ${(animateCards && isVisible) ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="text-4xl md:text-5xl font-bold text-navy-dark mb-3 group-hover:text-white">
                    {strength.value}
                  </div>
                  <h3 className="font-georgia text-[20px] md:text-[22px] font-semibold text-navy-dark mb-3 group-hover:text-white">
                    {strength.title}
                  </h3>
                  <p className="font-georgia text-[15px] md:text-[16px] text-gray-700 leading-relaxed group-hover:text-white">
                    {strength.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyStrengths.slice(2).map((strength, index) => {
            const adjustedIndex = index + 2; // Adjust index for animation delay
            return (
              <div 
                key={adjustedIndex}
                className={`p-8 rounded-2xl border-2 border-gray-300 transition-all duration-500 hover:bg-black hover:text-white group ${strength.bgColor} ${(animateCards && isVisible) ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${adjustedIndex * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <h3 className="font-georgia text-[20px] md:text-[22px] font-semibold text-navy-dark mb-3 group-hover:text-white">
                    {strength.title}
                  </h3>
                  <p className="font-georgia text-[15px] md:text-[16px] text-gray-700 leading-relaxed group-hover:text-white">
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