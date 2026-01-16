import { useState } from 'react';
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
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gold font-bold italic mb-16">
          Clients
        </h2>

        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="bg-primary-foreground/95 rounded-3xl p-8 md:p-12 max-w-md text-center shadow-2xl">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-sky-blue">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-navy text-sm md:text-base leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>

            <p className="text-gold font-semibold text-sm">
              {testimonial.author}, {testimonial.role}
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeTestimonial === index ? 'bg-primary-foreground' : 'bg-primary-foreground/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
