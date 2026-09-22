import React from 'react';
import { ArrowRight, ShieldCheck, Building2, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Architectural Grid & Subtle Radial Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Desarrollo & Soluciones Constructivas</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Construimos espacios <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                para el futuro
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Soluciones de construcción y desarrollo orientadas a crear espacios funcionales, modernos y de calidad.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Conoce nuestros servicios</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 rounded-xl border border-slate-700/80 hover:border-slate-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Contáctanos</span>
              </a>
            </div>

            {/* Micro Feature Highlights */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Estándar Institucional</p>
                  <p className="text-sm text-white font-semibold">Calidad & Seguridad</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Enfoque Integral</p>
                  <p className="text-sm text-white font-semibold">Planificación & Control</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Architectural Visual Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/30 to-sky-600/30 blur-xl opacity-70" />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80"
                  alt="Construcción y desarrollo arquitectónico moderno por Ecoedif"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Floating Architectural Stat Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">ECOEDIF SAS</p>
                      <p className="text-sm font-bold text-white">Medellín, Antioquia</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    Operativo
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
