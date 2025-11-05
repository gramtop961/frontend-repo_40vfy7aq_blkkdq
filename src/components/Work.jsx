import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Kintsugi Finance',
    tag: 'Fintech UI',
    description: 'A quiet, trustworthy dashboard with ritual-like flows.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Momiji Studio',
    tag: 'Portfolio',
    description: 'A minimal, motion-led studio presence.',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Shōji Commerce',
    tag: 'E‑commerce',
    description: 'Quiet product storytelling with tactile interactions.',
    image: 'https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Work() {
  return (
    <section className="relative py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Portfolio</h2>
            <p className="mt-2 text-neutral-500">Selected work anchored in restraint</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-800">Start a project</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <div className="text-xs text-rose-600">{p.tag}</div>
                <h3 className="mt-1 text-lg font-medium text-neutral-900">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{p.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </section>
  );
}
