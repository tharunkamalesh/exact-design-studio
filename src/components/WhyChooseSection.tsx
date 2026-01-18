import { useOnScreen } from "../hooks/useOnScreen";
import { useState, useEffect } from "react";
import whyBg from "../assets/why.jpg";

const stats = [
  { value: "200", label: "Solar Panels Installed" },
  { value: "25", label: "Years Experience" },
  { value: "600", label: "Customers Served" },
  { value: "100", label: "Percent Satisfaction" },
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
      <div className="font-bold text-white mb-2">
        {isVisible ? count : 0}{suffix}
      </div>
      <div className="text-white">
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
      id="about"
      className="h-screen w-full flex items-center justify-center bg-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${whyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay (65% opacity) for better text readability */}
      <div className="absolute inset-0 bg-black/65"></div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10 w-full flex items-center justify-center">
        <div className={`max-w-5xl mx-auto w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-white leading-tight mb-6">
              About King Power Systems
            </h2>
          </div>

          {/* Main Content Paragraph */}
          <div className="text-center mb-12">
            <p className="text-white max-w-4xl mx-auto">
              For over 25 years, King Power Systems has been a trusted name in the field of electrical supply and services. Established with a commitment to quality, reliability, and customer satisfaction, we have grown into a leading provider of comprehensive electrical solutions for residential, commercial, and industrial sectors. Our expertise spans across electrical installations, maintenance, repairs, and the supply of high-quality electrical components from top brands.
            </p>
          </div>

          {/* Statistics Row - Centered Horizontal Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center items-center">
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
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
