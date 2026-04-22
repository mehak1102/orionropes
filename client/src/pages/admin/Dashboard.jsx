import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../lib/api";
import AdminLayout from "../../components/admin/AdminLayout";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [productsRes, enquiriesRes] = await Promise.all([
          api.get("/products"),
          api.get("/enquiries"),
        ]);

        setProducts(productsRes.data || []);
        setEnquiries(enquiriesRes.data || []);
      } catch (error) {
        console.error("Dashboard fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const recentEnquiries = enquiries.slice(0, 5);
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Admin Overview
          </p>
          <h1 className="mt-3 text-4xl font-semibold">Dashboard</h1>
          <p className="mt-3 text-white/60">
            Monitor products, enquiries, and recent activity from one place.
          </p>
        </div>

       {loading ? (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="h-32 animate-pulse rounded-3xl border border-white/10 bg-white/5"
      />
    ))}
  </div>
) : (
          <>
            {/* Stats */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-white/50">Total Products</p>
                <h2 className="mt-3 text-4xl font-semibold">{products.length}</h2>
                <p className="mt-2 text-sm text-white/40">
                  All products currently in catalog
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-white/50">Total Enquiries</p>
                <h2 className="mt-3 text-4xl font-semibold">{enquiries.length}</h2>
                <p className="mt-2 text-sm text-white/40">
                  All customer enquiries received
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-white/50">Featured Products</p>
                <h2 className="mt-3 text-4xl font-semibold">
                  {featuredProducts.length}
                </h2>
                <p className="mt-2 text-sm text-white/40">
                  Highlighted products on the website
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-white/50">Recent Enquiries</p>
                <h2 className="mt-3 text-4xl font-semibold">
                  {recentEnquiries.length}
                </h2>
                <p className="mt-2 text-sm text-white/40">
                  Latest activity from contact forms
                </p>
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid gap-6 lg:grid-cols-3">
              <Link
                to="/admin/products"
                className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                  Manage
                </p>
                <h3 className="mt-3 text-2xl font-semibold">Products</h3>
                <p className="mt-3 text-white/60">
                  Add, edit, delete, and manage your product catalog.
                </p>
              </Link>

              <Link
                to="/admin/enquiries"
                className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300/20"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">
                  Review
                </p>
                <h3 className="mt-3 text-2xl font-semibold">Enquiries</h3>
                <p className="mt-3 text-white/60">
                  View recent leads and customer requirements quickly.
                </p>
              </Link>

              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-300/80">
                  Summary
                </p>
                <h3 className="mt-3 text-2xl font-semibold">Site Health</h3>
                <p className="mt-3 text-white/60">
                  Core admin flows are working: auth, products, enquiries, and uploads.
                </p>
              </div>
            </div>

            {/* Recent enquiries */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                    Recent Activity
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">Latest Enquiries</h2>
                </div>

                <Link
                  to="/admin/enquiries"
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/15"
                >
                  View All
                </Link>
              </div>

              {recentEnquiries.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-[#0b1626] p-5 text-white/60">
                  No enquiries yet.
                </div>
              ) : (
                <div className="grid gap-4">
                  {recentEnquiries.map((enquiry) => (
                    <div
                      key={enquiry._id}
                      className="rounded-2xl border border-white/10 bg-[#0b1626] p-5"
                    >
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-lg font-medium">{enquiry.name}</h3>
                          <p className="text-sm text-white/50">{enquiry.email}</p>
                        </div>

                        <p className="text-xs text-white/40">
                          {new Date(enquiry.createdAt).toLocaleString()}
                        </p>
                      </div>

                      <p className="mt-3 text-white/65">{enquiry.message}</p>

                      {enquiry.productInterest ? (
                        <p className="mt-3 text-sm text-cyan-300/80">
                          Product Interest: {enquiry.productInterest}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}