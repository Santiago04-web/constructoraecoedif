import React from 'react';
import { Target, Compass, Layers, CheckCircle2 } from 'lucide-react';

export const Nosotros: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Planificación Estratégica',
      description: 'Estructuración clara de requerimientos, presupuestos y cronogramas para una ejecución óptima.',
    },
    {
      icon: Compass,
      title: 'Visión Arquitectónica',
      description: 'Creación de ambientes modernos y funcionales alineados con las expectativas de cada iniciativa.',
    },
    {
      icon: Layers,
      title: 'Calidad Constructiva',
      description: 'Selección de procesos y materiales que garantizan firmeza, estética y durabilidad a largo plazo.',
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <span>Quiénes Somos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Construcción con visión
            </h2>

            {/* Editable Institutional Main Copy */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal bg-slate-950/40 p-6 rounded-2xl border border-slate-800/90 shadow-sm">
              En <strong className="text-amber-400 font-semibold">Constructora Ecoedif SAS</strong> desarrollamos soluciones orientadas a la construcción y transformación de espacios, combinando planificación, calidad y una visión moderna del desarrollo.
            </p>

            <p className="text-base text-slate-400 leading-relaxed">
              Nuestro compromiso radica en transformar ideas en estructuras sostenibles, aplicando metodologías de gestión eficientes para cumplir rigurosamente con los objetivos de cada proyecto institucional, comercial o residencial.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Metodología técnica orientada al cumplimiento de objetivos',
                'Supervisión continua de estándares y seguridad',
                'Comunicación transparente en todas las fases del desarrollo',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual Architectural Feature */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Background Accent Grid */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-amber-500/20 rounded-3xl pointer-events-none hidden sm:block" />
              
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Planificación y diseño arquitectónico Constructora Ecoedif SAS"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel rounded-2xl border border-slate-700">
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Enfoque Proactivo</p>
                  <h3 className="text-lg font-bold text-white mt-1">Transformación de Espacios con Calidad</h3>
                  <p className="text-xs text-slate-300 mt-1">Estructuras concebidas para la funcionalidad y la perdurabilidad.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
