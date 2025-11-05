import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative h-[80vh] sm:h-[88vh] w-full overflow-hidden">
      {/* Interactive Spline backdrop */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient edges to frame the canvas (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80"></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white"></div>

      {/* Foreground content */}
      <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 backdrop-blur px-3 py-1 text-xs text-neutral-600"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-500" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-900"
          >
            Calm digital experiences
            <br className="hidden sm:block" />
            with a Japanese sensibility
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-5 max-w-2xl text-neutral-600"
          >
            I design and build minimalist interfaces that balance clarity, motion, and trust. Meticulous craft for modern brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm">
              View portfolio
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm text-neutral-800">
              Contact
            </a>
          </motion.div>

          {/* Small vertical mark inspired by shoji proportions */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 h-14 w-px bg-gradient-to-b from-rose-400 to-rose-600"
          />
        </div>
      </div>
    </div>
  );
}
