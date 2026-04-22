export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#081728] px-6 py-24 text-white">
      <div className="float-orb left-10 top-10 h-44 w-44 bg-cyan-400/12" />
      <div className="float-orb right-10 bottom-10 h-56 w-56 bg-lime-400/10" />

      <div className="mx-auto max-w-5xl rounded-[34px] border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/85">
          Contact Orion
        </p>

        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
          Let’s Discuss Your Requirement
        </h2>

        <p className="mt-4 text-lg leading-8 text-white/70">
          Reach out for product discussions, technical guidance, and business enquiries.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 px-6 py-3 font-medium text-black transition duration-300 hover:scale-105"
          >
            Contact Us
          </a>

          <a
            href="/enquiry"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white/80 transition duration-300 hover:bg-white/10 hover:scale-105"
          >
            Request Quote
          </a>
        </div>
      </div>
    </section>
  );
}