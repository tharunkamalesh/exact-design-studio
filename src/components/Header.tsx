import { useState } from 'react';
import kingLogo from '@/assets/king logo.png';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(15,23,42,0.25)] backdrop-blur-[10px]">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={kingLogo} alt="King Power Systems" className="h-10 object-contain bg-transparent" />
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`text-white font-inter text-sm font-normal transition-all hover:opacity-80 ${
                  activeLink === link.name ? 'border-b border-white pb-1' : ''
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2 border border-white text-white rounded-full text-sm font-inter font-normal transition-all hover:bg-white hover:text-gray-900"
        >
          Contact Us
        </a>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;