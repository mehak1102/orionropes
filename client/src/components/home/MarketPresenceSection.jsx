import { motion } from "framer-motion";

export default function MarketPresenceSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_18%),linear-gradient(180deg,#06111f_0%,#081728_100%)] px-6 py-24 text-white">
      <div className="float-orb left-[-60px] top-20 h-72 w-72 bg-cyan-400/12" />
      <div className="float-orb float-orb-delay right-[-60px] top-40 h-72 w-72 bg-lime-400/12" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-semibold md:text-6xl">
            Market <span className="text-lime-400">Presence</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-lime-400" />
        </div>

        <div className="mt-16 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid items-start gap-8 lg:grid-cols-[260px_1fr]"
          >
            <h3 className="text-center text-4xl font-semibold leading-tight text-cyan-300 lg:text-right lg:text-5xl">
              Dealer <br /> Network
            </h3>
            <div className="glass-card-dark rounded-[30px] p-8">
              <p className="text-lg leading-9 text-white/78">
                We have a strong dealer network spread across the country with more than 200 active dealers. The strategic distribution across the territory not only covers the wider area, but also dampens the volatility of regional demand, averaging and balancing out the production rollouts.
              </p>
              <img
                src="/home/dealer-network-map.png"
                alt="Dealer Network"
                className="mt-8 w-full rounded-[24px] border border-white/10 bg-white/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition duration-500 hover:scale-[1.01]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="grid items-start gap-8 lg:grid-cols-[260px_1fr]"
          >
            <h3 className="text-center text-4xl font-semibold leading-tight text-lime-300 lg:text-right lg:text-5xl">
              Global <br /> Presence
            </h3>
            <div className="glass-card-dark rounded-[30px] p-8">
              <p className="text-lg leading-9 text-white/78">
                We also cater to the demands of the global market and have been a part in many infrastructure development projects by foreign government. We have till date exported our products to over 20 countries across 5 continents.
              </p>
              <img
                src="/home/global-presence-map.png"
                alt="Global Presence"
                className="mt-8 w-full rounded-[24px] border border-white/10 bg-white/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition duration-500 hover:scale-[1.01]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="grid items-start gap-8 lg:grid-cols-[260px_1fr]"
          >
            <h3 className="text-center text-4xl font-semibold leading-tight text-orange-300 lg:text-right lg:text-5xl">
              End <br /> Consumers
            </h3>
            <div className="glass-card-dark rounded-[30px] p-8">
              <p className="text-lg leading-9 text-white/78">
                We also cater to large consumers and the government institutions directly. Repeat orders and annual rate contracts prove the satisfaction level and the trust our manufacturers put in us. We are registered wire rope brand in majority of the government institutions, eg- Indian Railways, Steel Plants, Coal Mines to name a few.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}