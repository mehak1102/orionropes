import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  Info,
  Sparkles,
} from "lucide-react";
import PublicLayout from "../components/layout/PublicLayout";
import { applicationIndustries } from "../data/applicationIndustries";

export default function ProductConstructionDetail() {
  const { slug, productSlug } = useParams();

  const industry = useMemo(
    () => applicationIndustries.find((item) => item.slug === slug),
    [slug]
  );

  const product = useMemo(
    () => industry?.products?.find((item) => item.productSlug === productSlug),
    [industry, productSlug]
  );

  if (!industry || !product) {
    return (
      <PublicLayout>
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-10 text-center text-white backdrop-blur-xl">
            <h1 className="text-4xl font-semibold">Product not found</h1>
            <Link
              to={`/products/${slug}`}
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-medium text-black"
            >
              Back
            </Link>
          </div>
        </section>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={industry.bannerImage}
            alt={industry.title}
            className="h-[340px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03101d]/95 via-[#03101d]/82 to-[#03101d]/55" />
        </div>

        <div className="float-orb left-8 top-12 h-40 w-40 bg-cyan-400/10" />
        <div className="float-orb right-10 top-10 h-56 w-56 bg-orange-300/10" />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto max-w-7xl px-6 pb-14 pt-28 text-white"
        >
          <Link
            to={`/products/${slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10"
          >
            <ArrowLeft size={16} />
            Back to {industry.title}
          </Link>

          <div className="mt-8 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/85">
              Product Construction
            </p>
            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
              {product.description}
            </p>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-[#06111f] px-6 py-16 text-white">
        <div className="float-orb left-[-60px] top-48 h-72 w-72 bg-cyan-400/10" />
        <div className="float-orb right-[-60px] bottom-12 h-72 w-72 bg-lime-400/10" />

        <div className="mx-auto max-w-7xl space-y-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-[#0b1626] p-3">
                  <Sparkles className="h-5 w-5 text-cyan-300" />
                </div>
                <h2 className="text-2xl font-semibold">Rope Construction</h2>
              </div>

              <div className="flex min-h-[420px] items-center justify-center rounded-[24px] border border-white/10 bg-[#0b1626] p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[380px] w-full object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="space-y-8"
            >
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-2xl border border-white/10 bg-[#0b1626] p-3">
                    <CheckCircle2 className="h-5 w-5 text-lime-400" />
                  </div>
                  <h2 className="text-2xl font-semibold">Applications</h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {product.applications.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-[#0b1626] p-4 text-white/75"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-2xl border border-white/10 bg-[#0b1626] p-3">
                    <Info className="h-5 w-5 text-orange-300" />
                  </div>
                  <h2 className="text-2xl font-semibold">Key Notes</h2>
                </div>

                <ul className="space-y-3">
                  {product.notes.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/10 bg-[#0b1626] p-4 text-white/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-[#0b1626] p-3">
                <FileText className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">
                  Mass & Breaking Force Table
                </h2>
                <p className="mt-1 text-white/60">
                  Technical table for {product.name}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white p-4">
              <img
                src={product.tableImage}
                alt={`${product.name} table`}
                className="w-full rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}