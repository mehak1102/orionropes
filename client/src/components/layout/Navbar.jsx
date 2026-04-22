import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/orion-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Clients", path: "/clients" },
  { label: "Careers", path: "/careers" },
  { label: "Enquiry", path: "/enquiry" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.25)]">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <motion.img
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                src={logo}
                alt="Orion Ropes"
                // className="h-12 w-12 rounded-xl object-cover"
                className="h-16 w-auto object-contain transition duration-300 hover:scale-105"
              />
              <div className="hidden sm:block">
                <div className="text-lg font-semibold tracking-wide text-white">
                  Orion Ropes
                </div>
                <div className="text-xs text-white/45">
                  Trust us to lift your weight
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 text-sm text-white/80">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`transition duration-300 hover:text-white ${
                      active ? "text-cyan-300" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Link
                to="/enquiry"
                className="rounded-full border border-white/15 bg-gradient-to-r from-orange-400 to-amber-300 px-5 py-2 text-sm font-medium text-black transition hover:scale-105"
              >
                Request Quote
              </Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden rounded-full border border-white/10 bg-white/10 p-2 text-white"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="flex flex-col gap-4 pt-5 text-sm text-white/80">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <Link
                    to="/enquiry"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex w-fit rounded-full bg-gradient-to-r from-orange-400 to-amber-300 px-5 py-2 font-medium text-black"
                  >
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}