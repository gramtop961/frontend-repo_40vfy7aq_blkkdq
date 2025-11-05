import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">About</h2>
          <p className="mt-2 text-neutral-500">根—craft rooted in clarity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px,1fr] gap-10 md:gap-16 items-start">
          <div className="flex md:block items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="h-28 w-28 shrink-0 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 grid place-items-center text-2xl font-medium text-neutral-700"
            >
              林
            </motion.div>
            <div className="hidden md:block h-24 w-px bg-neutral-200" />
          </div>

          <div className="space-y-6 text-neutral-700 leading-relaxed">
            <p>
              I’m Lin, a designer-engineer focused on serene, dependable web experiences. I combine thoughtful
              interface design with precise front‑end engineering to create products that feel effortless.
            </p>
            <p>
              My approach draws from Japanese minimalism: remove noise, emphasize intention, and let micro‑interactions
              guide attention. The result is work that feels calm yet alive.
            </p>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {['Interface Design', 'Design Systems', 'Frontend Engineering', 'Animations', 'Accessibility', 'Prototyping'].map((item) => (
                <li key={item} className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-neutral-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Subtle divider pattern evoking shoji grid */}
      <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </section>
  );
}
