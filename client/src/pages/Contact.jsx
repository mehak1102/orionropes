import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  User,
  Building2,
  Globe,
  MessageSquare,
} from "lucide-react";
import api from "../lib/api";
import toast from "react-hot-toast";
import PublicLayout from "../components/layout/PublicLayout";
import PageHero from "../components/layout/PageHero";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyDigits = value.replace(/\D/g, "");
      if (onlyDigits.length <= 10) {
        setForm((prev) => ({ ...prev, phone: onlyDigits }));
      }
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.firstName.trim() || !form.lastName.trim()) {
      return toast.error("First and last name are required");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return toast.error("Enter a valid email address");
    }

    if (form.phone.length !== 10) {
      return toast.error("Enter a valid 10 digit contact number");
    }

    if (!form.company.trim() || !form.location.trim() || !form.requirement.trim()) {
      return toast.error("Please fill all required fields");
    }

    try {
      setLoading(true);

      const { data } = await api.post("/contact", form);

      toast.success(data.message || "Message sent successfully");

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        location: "",
        requirement: "",
      });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      <div className="relative overflow-hidden">
        <div className="absolute left-10 top-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-orange-300/10 blur-3xl" />

        <PageHero
          title="Get In Touch!"
          subtitle="Reach out for product discussions, business requirements, and industrial rope solutions."
          compact
        />
      </div>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-4xl font-bold text-white">Get In Touch!</h2>

              <div className="mt-8 space-y-6 text-white/75">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-medium text-white">Address:</p>
                    <p className="mt-1">
                      6/2, Rambag, Indore, 452004 (M.P.), India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-orange-300" />
                  <div>
                    <p className="font-medium text-white">Phone:</p>
                    <p className="mt-1">+91 9303014906</p>
                    <p>+91 9179887621</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-medium text-white">Email:</p>
                    <p className="mt-1">info@orionropes.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white">
                Let us know your requirement
              </h3>
              <p className="mt-4 leading-8 text-white/65">
                Share your contact details and requirement so our team can connect
                with the right technical guidance and commercial support.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/65">
                  First Name *
                </label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name *"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Last Name *
                </label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name *"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Contact Number *
                </label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Contact Number *"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Company Name *
                </label>
                <div className="relative">
                  <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Name *"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Business Location *
                </label>
                <div className="relative">
                  <Globe className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Business Location *"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-white/65">
                  Requirement *
                </label>
                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-white/35" />
                  <textarea
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    placeholder="Enter Your Requirement *"
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 pl-11 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 px-6 py-4 font-semibold text-black transition hover:scale-[1.01] disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </PublicLayout>
  );
}