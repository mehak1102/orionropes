import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <section className="relative overflow-hidden bg-[#06111f] px-6 py-24 text-white home-grid-bg">
      <div className="float-orb left-[-40px] top-10 h-48 w-48 bg-cyan-400/18" />
      <div className="float-orb float-orb-delay right-10 top-24 h-64 w-64 bg-lime-400/14" />
      <div className="float-orb float-orb-slow bottom-10 left-1/3 h-44 w-44 bg-sky-400/10" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card-dark overflow-hidden rounded-[34px] p-3"
        >
          <img
            src="/home/vision-mission-team.png"
            alt="Vision Mission Team"
            className="h-full w-full rounded-[26px] object-cover transition duration-500 hover:scale-[1.02]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <div className="glass-card-dark rounded-[30px] p-8">
            <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
              <h2 className="text-4xl font-semibold text-cyan-300 md:text-5xl">Vision</h2>
              <div className="border-l-4 border-white/20 pl-6 text-lg leading-9 text-white/80">
                To become the household name for quality wire ropes and the most trusted brand of extensively used wire ropes.
              </div>
            </div>
          </div>

          <div className="glass-card-dark rounded-[30px] p-8">
            <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
              <h2 className="text-4xl font-semibold text-lime-300 md:text-5xl">Mission</h2>
              <div className="border-l-4 border-white/20 pl-6 text-lg leading-9 text-white/80">
                Our mission is to always make quality a priority, to go the extra mile in order to honour our commitments and to establish long term associations with our clients by building and keeping their trust.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}