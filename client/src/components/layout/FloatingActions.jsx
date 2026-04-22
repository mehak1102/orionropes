import { ArrowUpRight, FileText, Phone } from "lucide-react";

export default function FloatingActions() {
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 z-[80] hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      <a
        href="/contact"
        className="group flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 hover:shadow-[0_10px_30px_rgba(34,211,238,0.18)]"
      >
        <Phone size={20} className="transition group-hover:scale-110" />
      </a>

      <a
        href="/enquiry"
        className="group flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-amber-300/20 hover:shadow-[0_10px_30px_rgba(251,191,36,0.16)]"
      >
        <FileText size={20} className="transition group-hover:scale-110" />
      </a>

      <button
        onClick={goTop}
        className="group flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-lime-400/20 hover:shadow-[0_10px_30px_rgba(163,230,53,0.16)]"
      >
        <ArrowUpRight size={20} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
      </button>
    </div>
  );
}