import { motion } from "framer-motion";

const points = [
  {
    title: "Precision Manufacturing",
    desc: "Strong quality systems, engineered consistency, and reliable product standards.",
  },
  {
    title: "Trusted Distribution Network",
    desc: "A wider network presence that improves reach, support, and delivery confidence.",
  },
  {
    title: "Premium Product Presentation",
    desc: "Modern UX transforms technical content into a clear and compelling buyer journey.",
  },
  {
    title: "Conversion-Focused Experience",
    desc: "Built to guide visitors from product discovery to enquiry with less friction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section  id="about"  className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            A Better Digital Experience For An Industrial Brand
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {points.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}