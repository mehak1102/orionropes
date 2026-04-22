import { motion } from "framer-motion";

const stats = [
  { number: "30+", label: "Years of Excellence" },
  { number: "200+", label: "Dealer Network" },
  { number: "20+", label: "Countries Served" },
  { number: "100%", label: "Quality Focused" },
];

export default function Stats() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
          >
            <div className="text-4xl font-semibold text-white">{item.number}</div>
            <p className="mt-3 text-white/60">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}