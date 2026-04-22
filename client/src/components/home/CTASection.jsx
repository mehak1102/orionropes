import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function CTASection() {
  return (
    <section id="contact" className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-10 md:p-14 backdrop-blur-xl"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
            Let’s Build Trust Faster
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">
            Request A Quote Or Send Your Requirement
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/70">
            Share your product requirement, application need, or business query.
            Our team will get back to you with the right solution.
          </p>
        </div>

        <ContactForm />
      </motion.div>
    </section>
  );
}