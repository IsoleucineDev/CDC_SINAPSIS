import { useEffect, useState } from 'react';
import { Instagram, Mail, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenRegistration: () => void;
}

export function Navbar({ onOpenRegistration }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Sinapsis', id: 'sinapsis' },
    { label: '¿Quiénes somos?', id: 'about' },
    { label: 'Avenidas', id: 'avenidas' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0e2e]/80 backdrop-blur-md shadow-lg shadow-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-3xl font-bold tracking-wider text-white"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 0 20px rgba(255,255,255,0.5)',
            }}
          >
            CDC
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white/90 hover:text-white transition-colors text-sm tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onOpenRegistration}
              className="text-white/90 hover:text-white transition-colors text-sm tracking-wide uppercase"
            >
              Inscripción
            </button>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/sinapsis.ciencia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:contact@sinapsis.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e2e]/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-white/90 hover:text-white transition-colors text-sm tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                onOpenRegistration();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-white/90 hover:text-white transition-colors text-sm tracking-wide uppercase"
            >
              Inscripción
            </button>
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <a
                href="https://www.instagram.com/sinapsis.ciencia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contact@sinapsis.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
