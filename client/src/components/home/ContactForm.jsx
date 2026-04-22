import { useState } from "react";
import api from "../../lib/api";
import toast from "react-hot-toast";

const initialFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  productInterest: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await api.post("/enquiries", formData);

      toast.success(data.message || "Enquiry submitted successfully");
      setFormData(initialFormData);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-4 md:grid-cols-2">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35"
        required
      />

      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35"
      />

      <input
        type="text"
        name="productInterest"
        placeholder="Product Interest"
        value={formData.productInterest}
        onChange={handleChange}
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 md:col-span-2"
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Tell us about your requirement"
        value={formData.message}
        onChange={handleChange}
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 md:col-span-2"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-gradient-to-r from-orange-400 to-amber-300 px-7 py-3 font-medium text-black transition duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(251,191,36,0.25)] disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2"
      >
        {loading ? "Submitting..." : "Send Enquiry"}
      </button>
    </form>
  );
}