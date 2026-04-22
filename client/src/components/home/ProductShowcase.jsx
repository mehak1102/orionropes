import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../../lib/api";
import { Link } from "react-router-dom";

export default function ProductShowcase() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="products" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
            Product Range
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white">
            Engineered Product Categories
          </h2>
          <p className="mt-4 max-w-2xl text-white/65">
            Discover a modern, premium product showcase designed for technical
            clarity, trust, and faster customer decision-making.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:border-orange-300/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
<div className="mb-6 h-52 overflow-hidden rounded-[24px] bg-white/5">
  {product.image ? (
    <img
      src={product.image}
      alt={product.name}
      className="h-full w-full object-cover"
      onError={() => console.log("Homepage image failed:", product.image)}
    />
  ) : (
    <div className="h-full w-full bg-[linear-gradient(135deg,rgba(59,130,246,0.16),rgba(251,191,36,0.08),rgba(255,255,255,0.04))]" />
  )}
</div>
              <h3 className="text-2xl font-semibold text-white">{product.name}</h3>

              <p className="mt-3 leading-7 text-white/60">
                {product.shortDescription}
              </p>

              <p className="mt-4 text-sm text-white/40">
                Category: {product.category}
              </p>

            <Link
  to={`/products/${product.slug}`}
  className="mt-6 inline-block text-sm font-medium text-orange-300 transition group-hover:translate-x-1"
>
  View Details →
</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}