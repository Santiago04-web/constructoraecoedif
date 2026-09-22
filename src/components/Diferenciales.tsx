import React from 'react';
import { Award, CalendarCheck, Handshake, CheckCircle } from 'lucide-react';

export const Diferenciales: React.FC = () => {
  const bloques = [
    {
      icon: Award,
      title: 'Calidad',
      subtitle: 'Estándares y precisión en cada detalle',
      description: 'Implementamos procesos estrictos de selección de materiales y control de obra, asegurando que cada proyecto cumpla con elevados niveles de solidez técnica, resistencia y acabados óptimos.',
    },
    {
      icon: CalendarCheck,
      title: 'Planificación',
      subtitle: 'Estructuración y control riguroso de fases',
      description: 'Optimizamos recursos, tiempos de entrega y presupuestos mediante un seguimiento metódico de las etapas constructivas, previniendo desviaciones y garantizando ejecuciones organizadas.',
    },
    {
      icon: Handshake,
      title: 'Compromiso',
      subtitle: 'Transparencia y atención personalizada',
      description: 'Fomentamos relaciones de confianza con cada cliente a través de una comunicación clara, cumplimiento responsable de los acuerdos y un acompañamiento profesional continuo.',
    },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <span>Nuestros Pilares Principales</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Una visión moderna de la construcción
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Valores corporativos y técnicos que orientan nuestras decisiones y respaldan la confiabilidad de nuestras soluciones.
          </p>
        </div>

        {/* 3 Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {bloques.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/90 p-8 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 mb-6 shadow-lg shadow-amber-500/5">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                    {item.title}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {item.subtitle}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enfoque Institucional ECOEDIF</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
