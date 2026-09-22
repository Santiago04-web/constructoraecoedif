import React from 'react';
import { HardHat, Compass, Wrench, ClipboardCheck, ArrowRight } from 'lucide-react';

export const Servicios: React.FC = () => {
  const serviciosList = [
    {
      number: '01',
      icon: HardHat,
      title: 'Construcción',
      description: 'Desarrollo y ejecución de soluciones constructivas para diferentes necesidades.',
      tag: 'Ejecución Estructural',
    },
    {
      number: '02',
      icon: Compass,
      title: 'Diseño y planificación',
      description: 'Planeación de espacios y proyectos con enfoque funcional y eficiente.',
      tag: 'Arquitectura & Planos',
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Adecuación y remodelación',
      description: 'Transformación y actualización de espacios para mejorar su funcionalidad y apariencia.',
      tag: 'Renovación & Interiores',
    },
    {
      number: '04',
      icon: ClipboardCheck,
      title: 'Gestión de proyectos',
      description: 'Organización y seguimiento de las diferentes etapas de un proyecto constructivo.',
      tag: 'Control & Supervisión',
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <span>Nuestra Oferta Especializada</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Servicios Integrales de Construcción
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Soluciones estructuradas para abordar cada fase del ciclo de desarrollo de obras e infraestructura.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {serviciosList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl bg-slate-900/70 border border-slate-800/90 p-7 flex flex-col justify-between hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl"
              >
                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold text-slate-700 group-hover:text-amber-500/40 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded bg-slate-800/60 text-slate-400 text-[11px] font-medium mb-3 border border-slate-700/50">
                    {service.tag}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-amber-400 transition-colors">
                  <span>Consulta técnica</span>
                  <a href="#contacto" className="p-1 rounded-full bg-slate-800 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white">¿Requieres una propuesta técnica personalizada?</h4>
            <p className="text-sm text-slate-400 mt-1">Estructuramos presupuestos detallados según los alcances de tu proyecto.</p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 px-6 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md"
          >
            Solicitar Evaluación
          </a>
        </div>

      </div>
    </section>
  );
};
