import { motion } from "framer-motion";

const features = [
  {
    title: "Precision Manufacturing",
    desc: "Built to maintain consistency, reliability, and industrial-grade performance across applications.",
  },
  {
    title: "Quality-Centric Process",
    desc: "A stronger digital presentation of manufacturing quality and product trust signals.",
  },
  {
    title: "Technical Confidence",
    desc: "Show product construction, applications, and material information with better clarity.",
  },
];

export default function QualitySection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop"
            alt="Quality and industrial manufacturing"
            className="h-full min-h-[420px] w-full rounded-[26px] object-cover"
          />
        </motion.div>

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Quality & Assurance
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            A Premium Digital Layer For A High-Trust Industrial Brand
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            Present engineering strength, process reliability, and product confidence
            through a cleaner visual system and more persuasive content structure.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-[#0b1626] p-5"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}