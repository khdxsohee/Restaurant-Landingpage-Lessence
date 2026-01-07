
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-2xl font-bold tracking-widest serif uppercase text-amber-500">L'Essence</a>
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-amber-500 transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Instagram size={18} className="cursor-pointer hover:text-amber-500 transition-colors" />
          <Facebook size={18} className="cursor-pointer hover:text-amber-500 transition-colors" />
          <button className="ml-4 border border-amber-500/50 px-6 py-2 text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all">
            Book Table
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-8 flex flex-col items-center space-y-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl serif tracking-widest uppercase">
              {link.name}
            </a>
          ))}
          <button className="w-full border border-amber-500/50 py-4 text-sm uppercase tracking-widest">
            Book Table
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
