import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <span>Canales Institucionales</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contáctanos
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Estamos disponibles para atender tus consultas, cotizaciones y requerimientos de desarrollo constructivo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Official Company Details */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-8 shadow-xl">
              
              <div>
                <div className="inline-block px-3 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-500/20">
                  Información Oficial
                </div>
                <h3 className="text-2xl font-bold text-white">Constructora Ecoedif SAS.</h3>
                <p className="text-xs text-slate-400 font-mono mt-1">NIT: 901148227-1</p>
              </div>

              <div className="space-y-6">
                
                {/* Address Card */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ubicación</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">Carrera 63 # 49 A 31</p>
                    <p className="text-xs text-slate-300">Medellín, Antioquia, Colombia</p>
                  </div>
                </div>

                {/* Phone Card & Direct Action */}
                <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Teléfono</h4>
                      <p className="text-sm font-semibold text-white mt-0.5">+57 3105399585</p>
                    </div>
                  </div>
                  <a
                    href="tel:+573105399585"
                    className="self-center px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shrink-0"
                  >
                    Llamar
                  </a>
                </div>

                {/* Email Card & Direct Action */}
                <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Correo Electrónico</h4>
                      <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 truncate">
                        constructoraecoedifsass470@gmail.com
                      </p>
                    </div>
                  </div>
                  <a
                    href="mailto:constructoraecoedifsass470@gmail.com"
                    className="self-center px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shrink-0"
                  >
                    Enviar correo
                  </a>
                </div>

              </div>

              {/* Service Hours / Trust Badge */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Atención Profesional Lunes a Viernes</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Respuesta Oportuna</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            
            <div className="bg-slate-900/90 border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl relative">
              
              <h3 className="text-2xl font-bold text-white mb-2">Envíanos un mensaje</h3>
              <p className="text-slate-400 text-sm mb-8">
                Diligencia el formulario a continuación para comunicarte con nuestro equipo técnico.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">¡Mensaje enviado con éxito!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Hemos recibido tus datos correctamente. Un representante de Constructora Ecoedif SAS revisará tu solicitud y se pondrá en contacto a la brevedad.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors mt-2"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
                      />
                    </div>

                    {/* Teléfono */}
                    <div className="space-y-2">
                      <label htmlFor="telefono" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Ej. 3101234567"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Correo Electrónico */}
                  <div className="space-y-2">
                    <label htmlFor="correo" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      required
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="Ej. contacto@empresa.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
                    />
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Describe brevemente los detalles o alcance de tu requerimiento..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Enviando mensaje...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Tus datos serán tratados de manera estrictamente confidencial para fines de contacto empresarial.
                  </p>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
