import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+573105399585"
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors py-2 px-3"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>+57 3105399585</span>
            </a>
            <a
              href="#contacto"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-md shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 group"
            >
              <span>Solicitar información</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="#contacto"
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors"
            >
              Contactar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-xl px-4 pt-4 pb-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/80 rounded-xl transition-all border-l-2 border-transparent hover:border-amber-400"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col space-y-3">
              <a
                href="tel:+573105399585"
                className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-slate-300 bg-slate-900 rounded-xl border border-slate-800"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>+57 3105399585</span>
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-500/20 transition-all"
              >
                <span>Solicitar información</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
