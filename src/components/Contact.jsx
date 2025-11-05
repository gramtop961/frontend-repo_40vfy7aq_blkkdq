import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent('Project inquiry');
    const body = encodeURIComponent(
      `Name: ${form.get('name') || ''}\n` +
      `Email: ${form.get('email') || ''}\n` +
      `Message: ${form.get('message') || ''}`
    );
    window.location.href = `mailto:hello@lin.studio?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Contact</h2>
          <p className="mt-2 text-neutral-500">Let’s build something thoughtful</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-neutral-600">Name</span>
                <input name="name" required className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm text-neutral-600">Email</span>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="you@company.com" />
              </label>
            </div>
            <label className="block mt-4">
              <span className="text-sm text-neutral-600">Message</span>
              <textarea name="message" rows="5" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Tell me about your project" />
            </label>
            <div className="mt-6 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm text-white">
                <Mail size={16} /> Send inquiry
              </button>
              <a href="mailto:hello@lin.studio" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm text-neutral-800">
                <MessageSquare size={16} /> Email directly
              </a>
            </div>
          </motion.form>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-neutral-700 leading-relaxed"
            >
              I value projects with clear intent and long‑term impact. If that resonates, I’d love to hear from you.
              Share a brief and I’ll reply within 24 hours.
            </motion.p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{ label: 'Availability', value: 'Part‑time & sprints' }, { label: 'Timezone', value: 'UTC+9 (JST)' }, { label: 'Languages', value: 'EN / 日本語' }, { label: 'Location', value: 'Tokyo' }].map((info) => (
                <li key={info.label} className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <div className="text-xs text-neutral-500">{info.label}</div>
                  <div className="text-sm text-neutral-800">{info.value}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
