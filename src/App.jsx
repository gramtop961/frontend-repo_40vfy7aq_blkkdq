import { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  // Add a subtle scroll restoration and hash-based navigation enhancement
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-rose-200/60 selection:text-neutral-900 scroll-smooth">
      {/* Minimal top nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-neutral-900">林 Lin</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600">
            <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
            <a href="#work" className="hover:text-neutral-900 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Lin Studio</p>
          <p className="text-neutral-400">Designed with a calm, minimalist Japanese rhythm.</p>
        </div>
      </footer>
    </div>
  );
}
