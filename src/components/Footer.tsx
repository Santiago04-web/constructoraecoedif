import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-left mb-16">
          
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-5 space-y-6">
            <Logo size="lg" />
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Empresa colombiana especializada en soluciones de construcción, diseño y adecuación de espacios funcionales y modernos.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-500">
              NIT: 901148227-1 | Registrado en Medellín, Colombia
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Contact Summary */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Contacto Corporativo
            </h4>
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Carrera 63 # 49 A 31, Medellín, Antioquia, Colombia</span>
              </li>
              
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+573105399585" className="hover:text-amber-400 transition-colors">
                  +57 3105399585
                </a>
              </li>

              <li className="flex items-center gap-3 text-slate-300 break-all">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:constructoraecoedifsass470@gmail.com" className="hover:text-amber-400 transition-colors">
                  constructoraecoedifsass470@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Constructora Ecoedif SAS. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Políticas de Privacidad</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Términos de Servicio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
