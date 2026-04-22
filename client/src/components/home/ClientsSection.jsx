const clients = [
  "port.png",
  "coal.png",
  "cochin.png",
  "dae.png",
  "escorts.png",
  "acc.png",
  "amns.png",
  "balco.png",
  "bhel.png",
];

export default function ClientsSection() {
  const items = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden bg-[#081728] px-6 pb-24 pt-2">
      <div className="float-orb left-10 top-6 h-44 w-44 bg-cyan-400/10" />
      <div className="float-orb right-10 bottom-2 h-52 w-52 bg-lime-400/10" />

      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] px-4 py-8 backdrop-blur-xl">
          <div className="client-track flex items-center gap-8">
            {items.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex h-28 min-w-[190px] items-center justify-center rounded-2xl border border-white/10 bg-white px-6 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
              >
                <img
                  src={`/clients/${logo}`}
                  alt={logo}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}