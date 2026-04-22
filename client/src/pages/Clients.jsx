import PublicLayout from "../components/layout/PublicLayout";
import PageHero from "../components/layout/PageHero";

const clients = [
  "acc.png",
  "amns.png",
  "balco.png",
  "bekem.png",
  "shirke.png",
  "bhel.png",
  "navy.png",
  "coal.png",
  "cochin.png",
  "dredging.png",
  "escorts.png",
  "essar.png",
  "gammon.png",
  "garware.png",
  "hed.png",
  "hindalco.png",
  "indianrailways.png",
  "jaypee.png",
  "jspl.png",
  "kec.png",
  "int.png",
  "yo.png",
  "nalco.png",
  "navaldockyard.png",
  "ntpc.png",
  "ongc.png",
  "pipavav.png",
  "reliance.png",
  "sail.png",
  "tata.png",
  "ultratech.png",
];

const row1 = clients.slice(0, 10);
const row2 = clients.slice(10, 20);
const row3 = clients.slice(20);

function ClientRow({ items, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div className="client-marquee-wrapper">
      <div className={`client-marquee ${reverse ? "client-marquee-reverse" : ""}`}>
        {doubled.map((client, index) => (
          <div
            key={`${client}-${index}`}
            className="flex min-w-[260px] h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            <img
              src={`/clients/${client}`}
              alt={client}
              className="h-20 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <PublicLayout>
      <PageHero
        title="Our Clients"
        subtitle="Building Bonds That Last"
        compact
      />

      <section className="px-6">
        <div className="mx-auto max-w-5xl text-center text-white/70 text-sm leading-7">
          Since decades, we have served customers from various sectors. Their
          repeat orders reflect the satisfaction offered by the enterprise and the
          market reputation our team has strived to achieve and maintain. Our
          clients include blue-chip companies who are famed in their respective
          sectors nationally and internationally.
        </div>
      </section>

      <section className="relative px-6 py-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-10 top-8 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-10 bottom-8 h-64 w-64 rounded-full bg-orange-300/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl space-y-6">
          <ClientRow items={row1} />
          <ClientRow items={row2} reverse />
          <ClientRow items={row3} />
        </div>
      </section>
    </PublicLayout>
  );
}