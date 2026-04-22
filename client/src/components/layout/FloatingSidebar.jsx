import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Boxes,
  Users,
  Briefcase,
  FileText,
  Phone,
  ChevronRight,
} from "lucide-react";
import logo from "../../assets/orion-logo.png";

const menuItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "About Us", path: "/about", icon: Info },
  { label: "Products", path: "/products", icon: Boxes },
  { label: "Clients", path: "/clients", icon: Users },
  { label: "Careers", path: "/careers", icon: Briefcase },
  { label: "Enquiry", path: "/enquiry", icon: FileText },
  { label: "Contact", path: "/contact", icon: Phone },
];

export default function FloatingSidebar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    className={`fixed left-4 top-[110px] z-[70] hidden max-h-[calc(100vh-140px)] overflow-y-auto rounded-[28px] border border-white/10 bg-[#071423]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 lg:flex lg:flex-col ${
  expanded ? "w-72 p-4" : "w-20 p-3"
}`}
    >
      <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
        <img
          src={logo}
          alt="Orion Ropes"
          // className="h-11 w-11 rounded-xl object-cover"
          // className="h-14 w-auto object-contain"
          className="h-16 w-auto object-contain transition duration-300 hover:scale-105"
        />
        {expanded ? (
          <div>
            <h3 className="text-sm font-semibold text-white">Orion Ropes</h3>
            <p className="text-xs text-white/45">Trust us to lift your weight</p>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-2xl px-3 py-3 transition ${
                active
                  ? "bg-cyan-400 text-black"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {expanded ? <span className="text-sm">{item.label}</span> : null}
            </Link>
          );
        })}
      </div>

      <div className="mt-4 border-t border-white/10 pt-4">
        <a
          href="https://www.linkedin.com/company/orion-ropes-pvt-ltd"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-2xl px-3 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          <span className="text-sm font-semibold">in</span>
          {expanded ? <span className="text-sm">LinkedIn</span> : null}
        </a>
      </div>

      {!expanded ? (
        <div className="mt-2 flex justify-center text-white/35">
          <ChevronRight size={16} />
        </div>
      ) : null}
    </aside>
  );
}