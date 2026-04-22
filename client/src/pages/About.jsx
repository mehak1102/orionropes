import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Factory,
  Gem,
  Handshake,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import PublicLayout from "../components/layout/PublicLayout";
import PageHero from "../components/layout/PageHero";

const strengths = [
  {
    title: "Superior Quality",
    desc: "Stringent quality checks at all stages of production ensure trusted performance and long-term reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Quick Delivery",
    desc: "Efficient inventory models for raw material and finished goods support faster execution and dispatch.",
    icon: Sparkles,
  },
  {
    title: "Promoter Involvement",
    desc: "Hands-on guidance from experienced industry leaders strengthens technical clarity and manufacturing discipline.",
    icon: Handshake,
  },
];

const beliefs = [
  {
    title: "Our First Responsibility",
    desc: "To our customers — products must always be good, continuously improved, and orders must be executed promptly and accurately.",
    icon: Users,
  },
  {
    title: "Our Second Responsibility",
    desc: "To our people — fair wages, safe conditions, dignity, growth opportunities, and a strong leadership culture matter deeply.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Our Third Responsibility",
    desc: "To society — ethical business, responsible citizenship, social contribution, and disciplined accountability guide our conduct.",
    icon: Building2,
  },
  {
    title: "Our Fourth Responsibility",
    desc: "To our stakeholders — sustain profitability, continue research and development, build reserves, and invest in future-ready systems.",
    icon: Gem,
  },
];

const milestones = [
  "First company to have wire rope machines designed and made in India by promoters.",
  "Among the first Indian SSI wire rope manufacturers to receive ISO recognition.",
  "Started using identification tape in ropes for easier material identification.",
  "Developed import substitute for mining ropes and helped shift the industry to 6x41 construction.",
  "Pioneered the use of polypropylene core for the Indian fishing industry.",
  "Awarded Best SSI Industrial Undertaking by the Maharashtra Government.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <PublicLayout>
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-10 top-40 h-80 w-80 rounded-full bg-orange-300/10 blur-3xl"
          animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <PageHero
          title="About Us"
          subtitle="ORION has been delivering wire rope solutions to India and the world for decades with a legacy of quality, reliability, technical leadership, and long-term customer trust."
      compact
      />
      </div>

      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-7xl space-y-10">
          {/* Intro */}
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                Orion Legacy
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Providing Wire Rope Solutions Since Decades
              </h2>
              <p className="mt-5 leading-8 text-white/65">
                ORION has built a strong position in the wire rope industry through
                decades of dedicated manufacturing, technical excellence, and a
                commitment to supplying trusted solutions across India and global
                markets.
              </p>
              <p className="mt-4 leading-8 text-white/65">
                The company presents itself as a long-standing, quality-led
                enterprise backed by experienced leadership and a strong workforce,
                with a reputation for reliability and industrial trust.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#0b1626] p-5">
                  <p className="text-sm text-white/45">Established Legacy</p>
                  <p className="mt-2 text-2xl font-semibold">Since 1990s</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0b1626] p-5">
                  <p className="text-sm text-white/45">Global Reach</p>
                  <p className="mt-2 text-2xl font-semibold">India to World</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1400&auto=format&fit=crop"
                alt="Industrial manufacturing"
                className="h-full min-h-[420px] w-full rounded-[26px] object-cover transition duration-500 hover:scale-[1.03]"
              />
            </motion.div>
          </div>

          {/* Story */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
                Our Story
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Built From Humble Roots Into A Global Industrial Presence
              </h2>
              <div className="mt-6 space-y-4 leading-8 text-white/65">
                <p>
                  The business traces its roots to a modest family-owned enterprise
                  that began in a small town and evolved into a multi-product
                  organization with global reach through steady development and the
                  continuous exploration of possibilities.
                </p>
                <p>
                  Orion emphasizes the collective experience of its promoters, their
                  involvement in standards and technical guidance, and their strong
                  grounding in wire rope solutions as a major reason for its leadership
                  edge in the industry.
                </p>
                <p>
                  The company manufactures high carbon steel, stainless steel,
                  galvanised, and PVC coated wire ropes serving applications such as
                  crane hoists, fishing, drilling, mining, structural systems,
                  adventure sports, safety, and elevators.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop"
                alt="Industrial quality and leadership"
                className="h-full min-h-[420px] w-full rounded-[26px] object-cover transition duration-500 hover:scale-[1.03]"
              />
            </motion.div>
          </div>

          {/* Strengths */}
          <div className="grid gap-6 md:grid-cols-3">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-[#0b1626] p-3">
                    <Icon className="h-7 w-7 text-cyan-300" />
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-white/65">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* We Believe */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                  We Believe
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Values That Shape Our Culture And Operations
                </h2>
              </div>
              <p className="max-w-xl text-white/55">
                A values-driven structure focused on customers, people, society, and
                long-term growth.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {beliefs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="rounded-[28px] border border-white/10 bg-[#0b1626] p-6"
                  >
                    <div className="mb-5 flex items-center gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                        <Icon className="h-8 w-8 text-cyan-300" />
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="leading-8 text-white/65">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Prayer + leadership */}
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-[#0b1626] p-3">
                <BadgeCheck className="h-7 w-7 text-orange-300" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
                Prayer
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Strength, Patience, And Wisdom
              </h2>
              <p className="mt-5 leading-8 text-white/65">
                The organization frames its purpose through discipline,
                responsibility, humility, and the determination to fulfill its
                obligations with strength, patience, and wisdom.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-[#0b1626] p-3">
                <Users className="h-7 w-7 text-cyan-300" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                Leadership
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Experienced Leadership Across Functions
              </h2>
              <p className="mt-5 leading-8 text-white/65">
                Orion describes its facility as being managed by a competent team
                where ethics flow from the top. Directors, senior managers, works
                managers, technical staff, quality control leaders, and
                administrative teams together drive daily manufacturing and business
                operations.
              </p>
            </motion.div>
          </div>

          {/* Team */}
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                alt="Team collaboration"
                className="h-full min-h-[420px] w-full rounded-[26px] object-cover transition duration-500 hover:scale-[1.03]"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-[#0b1626] p-3">
                <Users className="h-7 w-7 text-cyan-300" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
                Team
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Built By Experience, Discipline, And Coordination
              </h2>
              <div className="mt-6 space-y-4 leading-8 text-white/65">
                <p>
                  The company presents its team as a collaboration of experienced
                  pioneers, managers, supervisors, technical experts, and
                  administrative personnel aligned around productivity, punctuality,
                  efficiency, and customer satisfaction.
                </p>
                <p>
                  Workshops, seminars, and continuous knowledge acquisition remain an
                  important part of developing a stronger workforce and sustaining
                  manufacturing excellence.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Certifications + Infrastructure */}
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-[#0b1626] p-3">
                <BadgeCheck className="h-7 w-7 text-cyan-300" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                Certifications
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Quality Backed By Standards
              </h2>
              <p className="mt-5 leading-8 text-white/65">
                Orion manufactures products according to stringent international and
                national standards and positions quality as one of its strongest
                brand commitments.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-[#0b1626] p-3">
                <Factory className="h-7 w-7 text-orange-300" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
                Infrastructure
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Built For Quality, Scale, And Coverage
              </h2>
              <p className="mt-5 leading-8 text-white/65">
                In-house testing facilities, semi-automatic machinery, strategic plant
                location, and strong production capability support shorter lead times,
                broader reach, and more efficient service delivery.
              </p>
            </motion.div>
          </div>

          {/* Footprints */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                Footprints
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Milestones That Define Our Industrial Journey
              </h2>
            </div>

            <div className="grid gap-4">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0b1626] p-5 text-white/70"
                >
                  <div className="mt-1 rounded-full bg-cyan-400 px-2 py-1 text-xs font-semibold text-black">
                    {index + 1}
                  </div>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-10 md:p-14 backdrop-blur-xl"
          >
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
                Orion Promise
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight">
                Finest Wire Ropes Since Generations. Built By Lineage, Maintained By Trust.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Orion continues to position itself around reliability, durability,
                technical strength, and long-term trust — qualities that define a
                modern industrial brand with legacy roots.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}