import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    toast.success("Logged out successfully");

    navigate("/admin/login");
  };

  const navItems = [
    { label: "Dashboard", path: "/admin/dashboard" },
    // { label: "Products", path: "/admin/products" },
    { label: "Enquiries", path: "/admin/enquiries" },
    { label: "Applications", path: "/admin/applications" },
    { label: "Contacts", path: "/admin/contacts" },
  ];

  return (
    <div className="flex min-h-screen bg-[#06111f] text-white">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/10 bg-[#04101d] p-6">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Orion
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Admin Panel</h2>
          <p className="mt-2 text-sm text-white/50">
            Manage products, enquiries, and website content.
          </p>
        </div>

        <nav className="space-y-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`block rounded-2xl px-4 py-3 transition ${
                  isActive
                    ? "bg-cyan-400 text-black"
                    : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-10 rounded-2xl bg-red-500 px-4 py-3 text-white transition hover:opacity-90"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 md:p-10">{children}</main>
    </div>
  );
}