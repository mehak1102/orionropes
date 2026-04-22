import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../lib/api";
import PublicLayout from "../components/layout/PublicLayout";

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await api.get(`/products/${slug}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#06111f] px-6 py-24 text-white">
        Loading...
      </div>
    );
  }

  return (


      <PublicLayout>
    <div className="min-h-screen bg-[#06111f] px-6 pb-24 text-white">
      <div className="mx-auto max-w-5xl">

 
    <div className="min-h-screen bg-[#06111f] px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <Link to="/products" className="text-sm text-orange-300">
          ← Back to Products
        </Link>

        <div className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
<div className="mb-8 h-72 overflow-hidden rounded-[28px] bg-white/5">
  {product.image ? (
    <img
      src={product.image}
      alt={product.name}
      className="h-full w-full object-cover"
      onError={() => console.log("Detail page image failed:", product.image)}
    />
  ) : (
    <div className="h-full w-full bg-[linear-gradient(135deg,rgba(59,130,246,0.16),rgba(251,191,36,0.08),rgba(255,255,255,0.04))]" />
  )}
</div>
          <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">
            {product.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold">{product.name}</h1>

          <p className="mt-6 text-lg leading-8 text-white/70">
            {product.shortDescription}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#0b1626] p-5">
              <p className="text-sm text-white/40">Construction</p>
              <p className="mt-2 text-lg font-medium">
                {product.construction || "N/A"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b1626] p-5">
              <p className="text-sm text-white/40">Material</p>
              <p className="mt-2 text-lg font-medium">
                {product.material || "N/A"}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Applications</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.applications?.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 leading-8 text-white/70">
              {product.fullDescription || "No detailed description available."}
            </p>
          </div>

          <div className="mt-10">
            <a
              href="/#contact"
              className="rounded-full bg-gradient-to-r from-orange-400 to-amber-300 px-7 py-3 font-medium text-black transition duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(251,191,36,0.25)]"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </div>

          </div>
    </div>
  </PublicLayout>

  );
}