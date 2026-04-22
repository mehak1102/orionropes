import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Anvil,
  Building2,
  Cable,
    Construction,  
  Fish,
  Mountain,
  Pickaxe,
  ShipWheel,
  TowerControl,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    slug: "general-engineering-ropes",
    title: "General Engineering Ropes",
    icon: Anvil,
    image:
      // "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      "/industries/general-engineering-banner.png",
    description:
      "Reliable ropes for versatile heavy engineering and industrial movement systems.",
  },
  {
    slug: "crane-ropes",
    title: "Crane Ropes",
    icon:   Construction,  
    image:
      // "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
      "/industries/crane-banner.png",
    description:
      "Engineered for lifting systems requiring strength, fatigue resistance, and uptime.",
  },
  {
    slug: "elevator-ropes",
    title: "Elevator Ropes",
    icon: Building2,
    image:
      // "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
       "/industries/elevator-banner.png",
    description:
      "Smooth travel, strong traction, and dependable performance in lift systems.",
  },
  {
    slug: "fishing-and-shipping-ropes",
    title: "Fishing And Shipping Ropes",
    icon: Fish,
    image:
      // "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
       "/industries/fishing-banner.png",
    description:
      "Marine-ready ropes suited for coastal, fishing, and shipping operations.",
  },
  {
    slug: "haulage-ropes",
    title: "Haulage Ropes",
    icon: Cable,
    image:
      // "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      "/industries/haulage-banner.png",
    description:
      "Built for movement systems where endurance and controlled haulage matter.",
  },
  {
    slug: "mining-ropes",
    title: "Mining Ropes",
    icon: Pickaxe,
    image:
      // "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop",
      "/industries/mining-banner.png",
    description:
      "Tough ropes for underground and surface mining environments.",
  },
  {
    slug: "oil-and-offshore-drilling-ropes",
    title: "Oil And Offshore Drilling Ropes",
    icon: TowerControl,
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop",
    description:
      "Dependable ropes for offshore and drilling operations under demanding conditions.",
  },
  {
    slug: "ropes-for-adventure-sports",
    title: "Ropes For Adventure Sports",
    icon: Mountain,
    image:
      // "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1200&auto=format&fit=crop",
       "/industries/adventure-banner.png",
    description:
      "Safety-conscious ropes for outdoor activity and adventure systems.",
  },
  {
    slug: "structural-systems-and-safety-systems",
    title: "Structural Systems And Safety Systems",
    icon: ShipWheel,
    image:
      // "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
      "/industries/structural-banner.png",
    description:
      "Engineered support solutions for structural and safety-critical environments.",
  },
];

export default function Industries() {
  return (
    <section className="px-6 py-20" id="application-industries">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            Orion Industries
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Application{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-orange-300 bg-clip-text text-transparent">
              Industries
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-300 to-orange-300" />
          <p className="mx-auto mt-5 max-w-3xl text-white/60">
            Explore our industry-focused rope solutions built for safety,
            reliability, performance, and premium industrial trust.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <Link
                  to={`/products/${item.slug}`}
                  className="group relative block overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#03101d] via-[#03101d]/65 to-transparent" />
                    <div className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-[#081321]/80 p-4 backdrop-blur">
                      <Icon className="h-10 w-10 text-cyan-300" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-white/70">
                            {item.description}
                          </p>
                        </div>
                        <ArrowUpRight className="mt-1 h-5 w-5 text-orange-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 bg-[#071423]/70 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/45">
                        Hover / Click to explore
                      </span>
                      <span className="text-sm font-medium text-cyan-300">
                        View details
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}