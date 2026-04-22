import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import heroBg from "../../assets/hero-bg.png";
import LiftShowcase from "./LiftShowcase";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#06111f] text-white">
      {/* <div className="absolute inset-0"> */}
        {/* <img
          src={heroBg}
          alt="Orion industrial rope solutions"
          className="h-full w-full scale-[1.03] object-cover"
        /> */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,18,0.90)_0%,rgba(3,10,18,0.74)_42%,rgba(3,10,18,0.52)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(34,211,238,0.14),transparent_22%),radial-gradient(circle_at_right,rgba(251,191,36,0.12),transparent_20%),radial-gradient(circle_at_bottom,rgba(163,230,53,0.10),transparent_18%)]" />
      </div> */}

      {/* <div className="absolute inset-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="h-full w-full object-cover scale-[1.05]"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,18,0.88)_0%,rgba(3,10,18,0.72)_42%,rgba(3,10,18,0.55)_100%)]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(34,211,238,0.14),transparent_22%),radial-gradient(circle_at_right,rgba(251,191,36,0.12),transparent_20%)]" />
</div> */}
<div className="absolute inset-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="h-full w-full object-cover scale-[1.05]"
    style={{ filter: "brightness(0.72) contrast(1.08)" }}
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,18,0.62)_0%,rgba(3,10,18,0.48)_42%,rgba(3,10,18,0.34)_100%)]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(34,211,238,0.10),transparent_22%),radial-gradient(circle_at_right,rgba(251,191,36,0.08),transparent_20%)]" />
</div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="float-orb left-[6%] top-[18%] h-44 w-44 bg-cyan-400/18" />
        <div className="float-orb float-orb-delay right-[10%] top-[22%] h-56 w-56 bg-amber-300/14" />
        <div className="float-orb float-orb-slow left-[22%] bottom-[12%] h-40 w-40 bg-lime-400/12" />

        <div className="wire-line wire-line-1" />
        <div className="wire-line wire-line-2" />
        <div className="wire-line wire-line-3" />

        <div className="floating-chip left-[9%] top-[68%]">ISO Certified</div>
        <div className="floating-chip right-[15%] top-[18%]">200+ Dealers</div>
        <div className="floating-chip right-[20%] bottom-[14%]">20+ Countries</div>
        <div className="floating-chip right-[45%] bottom-[40%]">Wire ropes</div>
        {/* <div className="floating-chip right-[50%] bottom-[30%]">20+ Countries</div> */}
 

      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.38em] text-cyan-300/90">
            Premium Wire Rope Solutions
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] md:text-7xl">
            Trust Us To Lift
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-300 to-lime-300 bg-clip-text text-transparent">
              Your Weight
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-white/75 md:text-xl">
            Orion delivers engineered rope solutions for crane systems,
            elevators, mining, marine environments, structural safety, and
            other critical industrial applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-7 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-[0_12px_35px_rgba(251,191,36,0.35)]"
            >
              Explore Industries
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-[0_12px_35px_rgba(255,255,255,0.08)]"
            >
              <PlayCircle
                size={18}
                className="transition group-hover:rotate-6"
              />
              Explore More
            </Link>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass-card-dark ml-auto w-full max-w-xl rounded-[36px] p-6"
        >
          <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(3,10,18,0.82)_0%,rgba(5,18,34,0.92)_100%)] p-7">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300/90">
                  Vision
                </p>
                <p className="mt-4 text-lg leading-9 text-white/74">
                  To become the household name for quality wire ropes and a
                  trusted brand across applications where safety and consistency
                  matter most.
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">
                  Mission
                </p>
                <p className="mt-4 text-lg leading-9 text-white/74">
                  To make quality a priority, honour commitments, and build
                  long-term trust with customers through dependable products and
                  principled execution.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4">
                <div className="flex items-center gap-3 text-white/82">
                  <Sparkles className="h-5 w-5 text-cyan-300" />
                  <span className="text-base font-medium">
                    Premium industrial presentation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}

   <motion.div
  initial={{ opacity: 0, y: 30, scale: 0.96 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="ml-auto w-full max-w-[620px]"
>
  <div className="glass-card-dark rounded-[36px] p-6">
    <div className="grid items-center gap-6 rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(3,10,18,0.82)_0%,rgba(5,18,34,0.92)_100%)] p-6 md:grid-cols-[220px_1fr]">
      <LiftShowcase compact />

      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300/90">
            Vision
          </p>
          <p className="mt-4 text-lg leading-9 text-white/74">
            To become the household name for quality wire ropes and a trusted brand across applications where safety and consistency matter most.
          </p>
        </div>

        <div className="h-px bg-white/10" />

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">
            Mission
          </p>
          <p className="mt-4 text-lg leading-9 text-white/74">
            To make quality a priority, honour commitments, and build long-term trust with customers through dependable products and principled execution.
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.div>
 
      </div>

      <div className="relative border-y border-white/8 bg-[#071626]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-sm text-white/62 md:text-base">
          <span>Industrial Grade Quality</span>
          <span className="hidden text-white/25 md:inline">•</span>
          <span>Reliable Distribution Network</span>
          <span className="hidden text-white/25 md:inline">•</span>
          <span>Heavy-Duty Performance</span>
          <span className="hidden text-white/25 md:inline">•</span>
          <span>Modern Buyer Experience</span>
          <span className="hidden text-white/25 md:inline">•</span>
          <span>Fast Product Discovery</span>
        </div>
      </div>
    </section>
  );
}