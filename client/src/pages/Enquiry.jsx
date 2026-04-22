import { useMemo, useState } from "react";
import {
  Cable,
  Factory,
  Globe,
  Mail,
  MessageSquare,
  Package,
  Phone,
  ShieldCheck,
  User,
  Wrench,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../lib/api";
import PublicLayout from "../components/layout/PublicLayout";
import PageHero from "../components/layout/PageHero";

const ropeFields = [
  { name: "ropeDiameter", label: "Rope Diameter", placeholder: "Rope Diameter" },
  { name: "ropeConstruction", label: "Rope Construction", placeholder: "Rope Construction" },
  { name: "coreSelection", label: "Core Selection", type: "select", options: ["Select Core", "CF", "CWR", "CWS"]},
  { name: "tensile", label: "Tensile", type: "select", options: ["Select Tensile", "1570 N/mm2", "1770 N/mm2", "1960 N/mm2"] },
  { name: "lay", label: "Lay", type: "select", options: ["Select Lay", "Right", "Left"] },
  { name: "layType", label: "Lay Type", type: "select",options: ["Select Lay Type", "Ordinary", "Langs"] },
  { name: "length", label: "Length", placeholder: "Length" },
  { name: "packing", label: "Packing", placeholder: "Packing" },
  { name: "standard", label: "Standard", type: "select", options: [
  "Select Standard",
  "IS 2266",
  "IS 1856",
  "IS 2365",
  "IS 10891",
  "IS 1855",
  "IS 2581",
  "IS 4521",
  "IS 9282",
  "API-9A",
  "EN 12385-4",
  "Other"
]},
  { name: "application", label: "Application", placeholder: "Application" },
];

const slingFields = [
  { name: "ropeDiameter", label: "Rope Diameter", placeholder: "Rope Diameter" },
  { name: "ropeConstruction", label: "Rope Construction", placeholder: "Rope Construction" },
  { name: "coreSelection", label: "Core Selection", type: "select", options: ["Select Core", "CF", "CWR", "CWS"] },
  { name: "tensile", label: "Tensile", type: "select", options: ["Select Tensile", "1570 N/mm2", "1770 N/mm2", "1960 N/mm2"] },
  { name: "lay", label: "Lay", type: "select", options: ["Select Lay", "Right", "Left"]},
  { name: "layType", label: "Lay Type", type: "select", options: ["Select Lay Type", "Ordinary", "Langs"] },
  { name: "effectiveLength", label: "Effective Length", placeholder: "Effective Length" },
  { name: "endFitting", label: "End Fitting", placeholder: "End Fitting" },
  { name: "otherSpecification", label: "Other Specification", placeholder: "Other Specification" },
  { name: "application", label: "Application", placeholder: "Application" },
];

const initialForm = {
  enquiryType: "Wire Ropes",
  ropeDiameter: "",
  ropeConstruction: "",
  coreSelection: "Select Core",
  tensile: "Select Tensile",
  lay: "Select Lay",
  layType: "Select Lay Type",
  length: "",
  packing: "",
  standard: "Select Standard",
  effectiveLength: "",
  endFitting: "",
  otherSpecification: "",
  application: "",
  companyName: "",
  companyWebsite: "",
  yourName: "",
  email: "",
  contactNumber: "",
  message: "",
};

function InputField({ field, value, onChange }) {
  if (field.type === "select") {
    return (
      <div>
        <label className="mb-2 block text-sm text-white/65">{field.label}</label>
        <select
          name={field.name}
          value={value}
          onChange={onChange}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
        >
          {field.options.map((option) => (
            <option key={option} value={option} className="bg-[#091321] text-white">
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <label className="mb-2 block text-sm text-white/65">{field.label}</label>
      <input
        type="text"
        name={field.name}
        value={value}
        onChange={onChange}
        placeholder={field.placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
      />
    </div>
  );
}

export default function Enquiry() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const activeFields = useMemo(() => {
    return formData.enquiryType === "Wire Ropes" ? ropeFields : slingFields;
  }, [formData.enquiryType]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contactNumber") {
      const onlyDigits = value.replace(/\D/g, "");
      if (onlyDigits.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: onlyDigits }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.yourName.trim()) {
      return toast.error("Your name is required");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return toast.error("Invalid email");
    }

    if (formData.contactNumber.length !== 10) {
      return toast.error("Contact number must be 10 digits");
    }

    try {
      setLoading(true);

      const payload = {
        name: formData.yourName,
        email: formData.email,
        phone: formData.contactNumber,
        company: formData.companyName,
        companyWebsite: formData.companyWebsite,
        productInterest: formData.enquiryType,
        message: formData.message,
        enquiryType: formData.enquiryType,
        specifications: {
          ropeDiameter: formData.ropeDiameter,
          ropeConstruction: formData.ropeConstruction,
          coreSelection: formData.coreSelection,
          tensile: formData.tensile,
          lay: formData.lay,
          layType: formData.layType,
          length: formData.length,
          packing: formData.packing,
          standard: formData.standard,
          effectiveLength: formData.effectiveLength,
          endFitting: formData.endFitting,
          otherSpecification: formData.otherSpecification,
          application: formData.application,
        },
      };

      const { data } = await api.post("/enquiries", payload);
      toast.success(data.message || "Enquiry submitted successfully");
      resetForm();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to submit enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      <div className="relative overflow-hidden">
        <div className="absolute left-10 top-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-10 top-28 h-72 w-72 rounded-full bg-orange-300/10 blur-3xl" />
        <PageHero
          title="Contact Us, Today"
          subtitle="Let us know how we can help you. Submit your technical requirement and our team will connect with the right rope recommendation and commercial support."
          compact
        />
      </div>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-[#0b1626] p-3">
                <Cable className="h-7 w-7 text-cyan-300" />
              </div>
              <h2 className="text-3xl font-semibold">Enquiry Support</h2>
              <p className="mt-4 leading-8 text-white/65">
                Share your rope specifications, application requirements, and business
                details. Our team can respond with the right product suggestion,
                technical fit, and commercial guidance.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0b1626] p-4">
                  <Factory className="mt-1 h-5 w-5 text-orange-300" />
                  <div>
                    <p className="font-medium text-white">Industrial Applications</p>
                    <p className="mt-1 text-sm text-white/55">
                      Crane ropes, mining ropes, offshore ropes, structural systems, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0b1626] p-4">
                  <ShieldCheck className="mt-1 h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-medium text-white">Specification-Based Response</p>
                    <p className="mt-1 text-sm text-white/55">
                      Built to capture technical inputs for faster and more accurate recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0b1626] p-4">
                  <Package className="mt-1 h-5 w-5 text-orange-300" />
                  <div>
                    <p className="font-medium text-white">Commercial + Delivery Inputs</p>
                    <p className="mt-1 text-sm text-white/55">
                      Share packing, standards, and application context for better commercial follow-up.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold">Why this form works better</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#0b1626] p-4">
                  <Wrench className="mb-3 h-6 w-6 text-cyan-300" />
                  <p className="font-medium text-white">Technical capture</p>
                  <p className="mt-2 text-sm text-white/55">More relevant product recommendations.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0b1626] p-4">
                  <MessageSquare className="mb-3 h-6 w-6 text-orange-300" />
                  <p className="font-medium text-white">Lead quality</p>
                  <p className="mt-2 text-sm text-white/55">Better details mean better conversion.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl">
            <div className="mb-8 flex flex-wrap gap-4">
              {["Wire Ropes", "Wire Rope Slings"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, enquiryType: type }))}
                  className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                    formData.enquiryType === type
                      ? "bg-gradient-to-r from-orange-400 to-amber-300 text-black"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {activeFields.map((field) => (
                <InputField
                  key={field.name}
                  field={field}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              ))}

              <div>
                <label className="mb-2 block text-sm text-white/65">Company Name</label>
                <div className="relative">
                  <Factory className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">Company Website</label>
                <div className="relative">
                  <Globe className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <input
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    placeholder="Company Website"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">Your Name</label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <input
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">Email</label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-white/65">Contact Number</label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <input
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-white/65">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/30 focus:bg-white/[0.08]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 px-6 py-4 font-medium text-black transition duration-300 hover:scale-[1.01] disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}