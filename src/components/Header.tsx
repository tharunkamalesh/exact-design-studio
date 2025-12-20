import { useState } from 'react';
import crownLogo from '@/assets/crown-logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/90 backdrop-blur-sm">
      <div className="h-1 bg-sky-blue w-full" />
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={crownLogo} alt="King Power Systems" className="h-12 w-12 object-contain" />
          <span className="text-primary-foreground font-playfair text-sm font-bold">KING</span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`text-primary-foreground font-poppins text-sm font-medium transition-all hover:opacity-80 ${
                  activeLink === link.name ? 'border-b-2 border-primary-foreground pb-1' : ''
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2 border-2 border-primary-foreground text-primary-foreground rounded-full text-sm font-medium transition-all hover:bg-primary-foreground hover:text-navy-dark"
        >
          Contact Us
        </a>

        <button className="md:hidden text-primary-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
