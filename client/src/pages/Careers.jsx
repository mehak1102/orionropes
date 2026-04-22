import { useState } from "react";
import PublicLayout from "../components/layout/PublicLayout";
import PageHero from "../components/layout/PageHero";
import toast from "react-hot-toast";
import api from "../lib/api";

export default function Careers() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    qualification: "",
    experience: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // =========================
  // RESUME HANDLER
  // =========================
  const handleResume = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Only PDF allowed");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Max file size is 5MB");
      return;
    }

    setResume(file);
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 VALIDATIONS
    if (!formData.firstName || !formData.lastName) {
      return toast.error("Name is required");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return toast.error("Invalid email");
    }

    if (formData.phone.length !== 10) {
      return toast.error("Phone must be 10 digits");
    }

    if (!resume) {
      return toast.error("Please upload resume");
    }

    try {
      setLoading(true);

      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });

      payload.append("resume", resume);

      const { data } = await api.post("/applications", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(data.message || "Application submitted successfully");

      // 🔥 RESET FORM
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        qualification: "",
        experience: "",
        coverLetter: "",
      });

      setResume(null);

      const fileInput = document.getElementById("career-resume-input");
      if (fileInput) fileInput.value = "";

    } catch (err) {
      console.log("CAREERS SUBMIT ERROR:", err?.response?.data || err);

      toast.error(
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        "Failed to submit application"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      {/* <PageHero
        title="Careers"
        subtitle="Things constantly brewing"
        compact
      /> */}

      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-semibold text-white">
            Apply Now
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-2"
          >
            {/* FIRST NAME */}
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="input"
            />

            {/* LAST NAME */}
            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="input"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />

            {/* PHONE (FIXED) */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                if (val.length <= 10) {
                  setFormData((prev) => ({ ...prev, phone: val }));
                }
              }}
              placeholder="10 digit phone number"
              className="input"
            />

            {/* POSITION */}
            <input
              name="position"
              placeholder="Position Applying For"
              value={formData.position}
              onChange={handleChange}
              className="input"
            />

            {/* QUALIFICATION */}
            <input
              name="qualification"
              placeholder="Qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="input"
            />

            {/* EXPERIENCE */}
            <input
              name="experience"
              placeholder="Experience"
              value={formData.experience}
              onChange={handleChange}
              className="input"
            />

            {/* RESUME */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-white/70">
                Resume (Only PDF allowed)
              </label>

              <input
                id="career-resume-input"
                type="file"
                accept="application/pdf"
                onChange={handleResume}
                className="w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none"
              />
            </div>

            {/* COVER LETTER */}
            <textarea
              name="coverLetter"
              placeholder="Cover Letter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows={4}
              className="input md:col-span-2"
            />

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 px-6 py-3 font-medium text-black transition hover:scale-105 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>
    </PublicLayout>
  );
}