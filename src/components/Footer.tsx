import kingLogo from '@/assets/king logo.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={kingLogo} alt="King Power Systems" className="h-12 w-12 object-contain" />
              <span className="text-primary-foreground text-lg font-bold">KING</span>
            </div>
            <p className="text-primary-foreground text-sm">
              Powering homes and businesses with reliable, sustainable energy solutions for over 25
              years.
            </p>
          </div>

          <div>
            <h3 className="text-primary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Projects', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground text-sm hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Solar Panels',
                'Inverters & UPS',
                'Batteries',
                'Stabilizers',
                'Installation',
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary-foreground mb-4">Contact Us</h3>
            <div className="space-y-3 text-primary-foreground text-sm">
              <p>123 Solar Street, Energy City</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@kingpowersystems.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground text-sm">
            © 2024 King Power Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;