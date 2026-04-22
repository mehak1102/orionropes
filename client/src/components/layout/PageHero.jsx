export default function PageHero({ title, subtitle, compact = false }) {
  return (
    <section
      className={`px-6 ${
        compact ? "pt-6 pb-6" : "pt-10 pb-12"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl rounded-[32px] border border-white/10 
        bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]
        backdrop-blur-xl ${
          compact ? "p-6 md:p-8" : "p-10 md:p-14"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">
          Orion Ropes
        </p>

        <h1
          className={`mt-3 font-semibold ${
            compact
              ? "text-2xl md:text-3xl"
              : "text-4xl md:text-5xl"
          }`}
        >
          {title}
        </h1>

        <p
          className={`mt-3 max-w-3xl text-white/65 ${
            compact ? "text-sm leading-6" : "text-lg leading-8"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}