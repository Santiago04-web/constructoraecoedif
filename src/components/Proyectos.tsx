import React, { useState } from 'react';
import { Layers } from 'lucide-react';

interface ProyectoItem {
  id: number;
  tag: string;
  category: string;
  title: string;
  description: string;
  image: string;
  specs: string;
}

export const Proyectos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const proyectosData: ProyectoItem[] = [
    {
      id: 1,
      tag: 'Proyecto destacado',
      category: 'Comercial',
      title: 'Desarrollo de Complejo Funcional',
      description: 'Estructura moderna concebida para la optimización de espacios y la máxima eficiencia energética.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      specs: 'Diseño Estructural & Ejecución',
    },
    {
      id: 2,
      tag: 'Espacio residencial',
      category: 'Residencial',
      title: 'Edificación Residencial Contemporánea',
      description: 'Solución habitacional enfocada en líneas arquitectónicas sobrias, confort y excelente iluminación natural.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      specs: 'Adecuación Integral',
    },
    {
      id: 3,
      tag: 'Desarrollo arquitectónico',
      category: 'Institucional',
      title: 'Módulo de Gestión y Servicios',
      description: 'Transformación de entorno corporativo priorizando circulaciones claras y materiales de alto impacto visual.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      specs: 'Planificación & Obras',
    },
    {
      id: 4,
      tag: 'Solución constructiva',
      category: 'Adecuación',
      title: 'Renovación Arquitectónica de Interiores',
      description: 'Actualización técnica y estética de superficies para adaptar el inmueble a requerimientos contemporáneos.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      specs: 'Remodelación de Espacios',
    },
  ];

  const categories = ['Todos', 'Comercial', 'Residencial', 'Institucional', 'Adecuación'];

  const filteredProyectos = selectedCategory === 'Todos'
    ? proyectosData
    : proyectosData.filter((p) => p.category === selectedCategory);

  return (
    <section id="proyectos" className="py-24 bg-slate-900/40 relative overflow-hidden border-t border-slate-800/80">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <span>Portafolio Conceptual</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Nuestros proyectos
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Muestra representativa del enfoque de diseño, planificación y estándares constructivos que aplicamos en cada iniciativa.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-500/60 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              {/* Image & Overlay */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
                <img
                  src={proyecto.image}
                  alt={proyecto.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Top Badge Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-amber-500/40 text-amber-400 text-xs font-bold backdrop-blur-md">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{proyecto.tag}</span>
                  </span>
                </div>

                {/* Specs pill */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 text-slate-300 text-xs font-medium border border-slate-700/80">
                    {proyecto.specs}
                  </span>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-6 text-left space-y-2 bg-slate-950/90 border-t border-slate-800">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {proyecto.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {proyecto.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Note on Editable Content */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 italic max-w-xl mx-auto">
            * Sección institucional en formato editable para la incorporación progresiva de especificaciones y registro fotográfico de nuevos desarrollos de la empresa.
          </p>
        </div>

      </div>
    </section>
  );
};
