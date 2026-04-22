// import { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../lib/api";

// import PublicLayout from "../components/layout/PublicLayout";
// import PageHero from "../components/layout/PageHero";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await api.get("/products");
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const categories = useMemo(() => {
//     const allCategories = products.map((p) => p.category);
//     return ["All", ...new Set(allCategories)];
//   }, [products]);

//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       const matchesSearch =
//         product.name.toLowerCase().includes(search.toLowerCase()) ||
//         product.shortDescription.toLowerCase().includes(search.toLowerCase());

//       const matchesCategory =
//         category === "All" || product.category === category;

//       return matchesSearch && matchesCategory;
//     });
//   }, [products, search, category]);

//   return (

//       <PublicLayout>
//     <PageHero
//       title="Products"
//       subtitle="Browse our industrial rope range with improved discovery, better visuals, and dedicated product pages."
//    compact
//    />
//     <div className="min-h-screen bg-[#06111f] px-6 pb-24 text-white">
//       <div className="mx-auto max-w-7xl">


      
//     <div className="min-h-screen bg-[#06111f] px-6 py-24 text-white">
//       <div className="mx-auto max-w-7xl">
//         <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
//           Products
//         </p>
//         <h1 className="mt-4 text-4xl font-semibold">Our Product Range</h1>
//         <p className="mt-4 max-w-2xl text-white/65">
//           Browse industrial rope categories with better discovery, filtering,
//           and technical clarity.
//         </p>

//         <div className="mt-10 grid gap-4 md:grid-cols-2">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
//           />

//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="rounded-2xl border border-white/10 bg-[#0b1626] px-4 py-3 text-white outline-none"
//           >
//             {categories.map((cat) => (
//               <option key={cat} value={cat} className="bg-[#0b1626] text-white">
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {filteredProducts.map((product) => (
//             <div
//               key={product._id}
//               className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-orange-300/20"
//             >
// <div className="mb-6 h-52 overflow-hidden rounded-[24px] bg-white/5">
//   {product.image ? (
//     <img
//       src={product.image}
//       alt={product.name}
//       className="h-full w-full object-cover"
//       onError={() => console.log("Products page image failed:", product.image)}
//     />
//   ) : (
//     <div className="h-full w-full bg-[linear-gradient(135deg,rgba(59,130,246,0.16),rgba(251,191,36,0.08),rgba(255,255,255,0.04))]" />
//   )}
// </div>
//               <h3 className="text-2xl font-semibold">{product.name}</h3>
//               <p className="mt-3 text-white/60">{product.shortDescription}</p>
//               <p className="mt-4 text-sm text-white/40">
//                 Category: {product.category}
//               </p>

//               <Link
//                 to={`/products/${product.slug}`}
//                 className="mt-6 inline-block text-sm font-medium text-orange-300"
//               >
//                 View Details →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//       </div>
//     </div>
//   </PublicLayout>
//   );
// }
import PublicLayout from "../components/layout/PublicLayout";
import PageHero from "../components/layout/PageHero";
import Industries from "../components/home/Industries";

export default function Products() {
  return (
    <PublicLayout>
      {/* <PageHero
        title="Application Industries"
        subtitle="Explore our industry-based rope solutions and open each segment for more detailed product information."
        compact
      /> */}
      <Industries />
    </PublicLayout>
  );
}