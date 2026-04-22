import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { industries } from "../../data/industries";

export default function ApplicationIndustries({ compact = false }) {
  return (
    <section className="px-6 py-20">
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
            Explore the industries we serve with engineered wire rope solutions
            built for reliability, safety, and performance.
          </p>
        </div>

        <div
          className={`grid gap-6 ${
            compact ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-3"
          }`}
        >
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
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.cardImage}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#03101d] via-[#03101d]/55 to-transparent" />
                    <div className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-[#081321]/80 p-4 backdrop-blur">
                      <Icon className="h-10 w-10 text-cyan-300" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/70">
                            {item.shortDescription}
                          </p>
                        </div>
                        <ArrowUpRight className="mt-1 h-5 w-5 text-orange-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 bg-[#071423]/70 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/45">Hover / Click to explore</span>
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