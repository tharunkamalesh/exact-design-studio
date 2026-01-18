import { useState, useEffect } from 'react';
import clientsBg from '@/assets/clients-bg.jpg';
import clientAvatar from '@/assets/client-avatar.jpg';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "A game-changer for our home! We recently installed a solar power system from King Power Systems. The installation was swift, the team was professional, and our electricity bills have dropped drastically.",
    author: 'Suresh Kumar',
    role: 'Homeowner',
    image: clientAvatar,
  },
  {
    id: 2,
    text: "I purchased an inverter and battery combo from King Power Systems. The quality is excellent, and their after-sales support is top-notch. Great service from a trustworthy company!",
    author: 'Vijayanamy',
    role: 'Home owner',
    image: clientAvatar,
  },
  {
    id: 3,
    text: "King Power Systems handled the solar installation for our office. Their team made the process seamless, from design to execution — and we now enjoy significant savings on power costs.",
    author: 'Saravanan',
    role: 'Business Owner',
    image: clientAvatar,
  },
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[activeTestimonial];

  return (
    <section
      id="testimonials"
      className="relative min-h-screen py-20"
      style={{
        backgroundImage: `url(${clientsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-dark/30" />

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-gold italic mb-16 uppercase">
          Our Clients
        </h2>

        <div className="flex justify-center items-center min-h-[60vh] relative">
          {/* Decorative Wave */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[120%] -z-10 pointer-events-none opacity-80">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path
                fill="none"
                stroke="#FFD700"
                strokeWidth="15"
                strokeLinecap="round"
                d="M0,160 C320,300,420,0,640,160 C860,320,1120,0,1440,160"
                className="path-wave"
              />
            </svg>
          </div>

          <div
            key={activeTestimonial}
            className="bg-black/80 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 max-w-md text-center shadow-2xl relative z-10 animate-in fade-in slide-in-from-left-20 duration-1000 ease-in-out"
          >
            {/* Profile picture removed */}

            <p className="text-white mb-6 italic">
              "{testimonial.text}"
            </p>

            <p className="text-gold font-bold text-xs uppercase tracking-widest">
              {testimonial.author} | {testimonial.role}
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === index ? 'bg-primary-foreground' : 'bg-primary-foreground/40'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
