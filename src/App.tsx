import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Nosotros } from './components/Nosotros';
import { Servicios } from './components/Servicios';
import { Proyectos } from './components/Proyectos';
import { Diferenciales } from './components/Diferenciales';
import { CTA } from './components/CTA';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Top Header */}
      <Header />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Proyectos />
        <Diferenciales />
        <CTA />
        <Contacto />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
