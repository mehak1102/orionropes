import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../../assets/orion-logo.png";

export default function Footer() {
  return (
    // <footer className="relative overflow-hidden border-t border-white/10 bg-[#06111f] px-6 py-16 text-white">
    // <footer className="relative overflow-hidden border-t border-white/10 px-6 py-35 text-white">
    <footer className="relative min-h-[420px] overflow-hidden border-t border-white/10 px-6 py-35 text-white">
       
<div className="absolute inset-0 z-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="h-full w-full object-cover"
    style={{ filter: "brightness(0.25) contrast(1.2)" }}
  >
    <source src="/videos/footer.mp4" type="video/mp4" />
  </video>

  {/* STRONG OVERLAY */}
  {/* <div className="absolute inset-0 bg-gradient-to-b from-[#06111f]/90 via-[#06111f]/85 to-[#06111f]/95" /> */}
</div>

      {/* <div className="float-orb left-10 top-10 h-40 w-40 bg-cyan-400/10" />
      <div className="float-orb right-10 bottom-10 h-52 w-52 bg-lime-400/10" /> */}
      <div className="relative z-10 float-orb left-10 top-10 h-40 w-40 bg-cyan-400/10" />
<div className="relative z-10 float-orb right-10 bottom-10 h-52 w-52 bg-lime-400/10" />

      {/* <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4"> */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <img
            src={logo}
            alt="Orion Ropes"
            className="h-20 w-auto object-contain"
          />

          <p className="mt-4 max-w-xs text-sm leading-7 text-white/65">
            Premium wire rope solutions engineered for strength, safety, and long-term reliability.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.facebook.com"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              Facebook
            </a>

          <a
  href="https://www.linkedin.com/company/orion-ropes-pvt-ltd"
  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
>
  LinkedIn
</a>
          </div>
        </div>

        <div className="md:col-span-3 grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="text-cyan-300" size={18} />
              <h3 className="text-lg font-semibold">HEAD OFFICE</h3>
            </div>
            <p className="text-sm leading-7 text-white/65">
              6/2, Rambag, Indore, 452004(M.P.), India
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Phone className="text-cyan-300" size={18} />
              <h3 className="text-lg font-semibold">Phone</h3>
            </div>
            <p className="text-sm leading-7 text-white/65">
              +91 9303014906
              <br />
              +91 9179887621
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Mail className="text-cyan-300" size={18} />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="text-sm leading-7 text-white/65">
              info@orionropes.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}