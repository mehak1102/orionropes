import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">

      {/* Floating gradient blob */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Another floating shape */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl right-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Content */}
      <div className="text-center z-10">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Industrial Ropes
        </motion.h1>

        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Engineered for strength, safety, and performance.
        </motion.p>
      </div>
    </section>
  );
}