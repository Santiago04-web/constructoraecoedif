import React from 'react';
import { ArrowUpRight, MessageSquare, PhoneCall } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/80 relative overflow-hidden border-t border-b border-slate-800">
      {/* Visual Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 opacity-90" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl space-y-8 backdrop-blur-xl relative">
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-500/40 rounded-tl-lg" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-500/40 rounded-br-lg" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contacto Directo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ¿Tienes un proyecto en mente?
          </h2>

          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Hablemos sobre tu próxima iniciativa y encontremos una solución adecuada para tus necesidades.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 group"
            >
              <span>Solicitar información</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="tel:+573105399585"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-700 hover:border-slate-500 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Llamar ahora</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
