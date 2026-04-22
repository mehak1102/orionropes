export default function TrustStrip() {
  const items = [
    "Industrial Grade Quality",
    "Reliable Distribution Network",
    "Heavy-Duty Performance",
    "Modern Buyer Experience",
    "Fast Product Discovery",
  ];

  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-6 py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 text-sm text-white/55 md:gap-8">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-4">
            <span>{item}</span>
            {index !== items.length - 1 ? <span className="text-white/20">•</span> : null}
          </div>
        ))}
      </div>
    </section>
  );
}