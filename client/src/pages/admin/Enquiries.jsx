import { useEffect, useMemo, useState } from "react";
import api from "../../lib/api";
import AdminLayout from "../../components/admin/AdminLayout";
import toast from "react-hot-toast";

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const { data } = await api.get("/enquiries");
        setEnquiries(data || []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load enquiries");
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      const term = search.toLowerCase();

      const matchesSearch =
        item.name?.toLowerCase().includes(term) ||
        item.email?.toLowerCase().includes(term) ||
        item.company?.toLowerCase().includes(term) ||
        item.productInterest?.toLowerCase().includes(term) ||
        item.enquiryType?.toLowerCase().includes(term);

      const matchesType =
        typeFilter === "all" || item.enquiryType === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [enquiries, search, typeFilter]);


  const handleDelete = async (id) => {
  const confirmed = window.confirm("Are you sure you want to delete this enquiry?");
  if (!confirmed) return;

  try {
    await api.delete(`/enquiries/${id}`);
    setEnquiries((prev) => prev.filter((item) => item._id !== id));

    if (selectedEnquiry?._id === id) {
      setSelectedEnquiry(null);
    }

    toast.success("Enquiry deleted successfully");
  } catch (error) {
    toast.error("Failed to delete enquiry");
  }
};

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Admin
          </p>
          <h1 className="mt-3 text-4xl font-semibold">Enquiries</h1>
          <p className="mt-3 text-white/60">
            Review all incoming technical and business enquiries.
          </p>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="Search by name, email, company, or enquiry type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl bg-white/10 px-4 py-3 outline-none"
          />

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="rounded-xl bg-white/10 px-4 py-3 outline-none"
          >
            <option value="all">All Enquiries</option>
            <option value="Wire Ropes">Wire Ropes</option>
            <option value="Wire Rope Slings">Wire Rope Slings</option>
          </select>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-24 animate-pulse rounded-2xl border border-white/10 bg-white/5"
              />
            ))}
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white/60">
            No enquiries found.
          </div>
        ) : (
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-white/80">
                <thead className="bg-[#0b1626] text-white/55">
                  <tr>
                    <th className="px-5 py-4 font-medium">Name</th>
                    <th className="px-5 py-4 font-medium">Company</th>
                    <th className="px-5 py-4 font-medium">Email</th>
                    <th className="px-5 py-4 font-medium">Phone</th>
                    <th className="px-5 py-4 font-medium">Type</th>
                    <th className="px-5 py-4 font-medium">Date</th>
                    <th className="px-5 py-4 font-medium">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredEnquiries.map((item, index) => (
                    <tr
                      key={item._id}
                      className={`border-t border-white/10 ${
                        index % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                      }`}
                    >
                      <td className="px-5 py-4 font-medium text-white">
                        {item.name || "—"}
                      </td>

                      <td className="px-5 py-4 text-white/70">
                        {item.company || "—"}
                      </td>

                      <td className="px-5 py-4 text-white/70">
                        {item.email || "—"}
                      </td>

                      <td className="px-5 py-4 text-white/70">
                        {item.phone || "—"}
                      </td>

                      <td className="px-5 py-4 text-cyan-300/80">
                        {item.enquiryType || item.productInterest || "—"}
                      </td>

                      <td className="px-5 py-4 text-white/45">
                        {new Date(item.createdAt).toLocaleString()}
                      </td>

                      {/* <td className="px-5 py-4">
                        <button
                          onClick={() => setSelectedEnquiry(item)}
                          className="rounded-lg bg-cyan-400 px-4 py-2 text-black"
                        >
                          View Details
                        </button>
                        
                      </td> */}
<div className="flex gap-2">
  <button
    onClick={() => setSelectedEnquiry(item)}
    className="rounded-lg bg-cyan-400 px-4 py-2 text-black"
  >
    View Details
  </button>

  <button
    onClick={() => handleDelete(item._id)}
    className="rounded-lg bg-red-500 px-4 py-2 text-white"
  >
    Delete
  </button>
</div>
                      
                    </tr>

                    
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedEnquiry && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
            <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[32px] border border-white/10 bg-[#06111f] p-8 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                    Enquiry Details
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold">
                    {selectedEnquiry.name || "Unnamed enquiry"}
                  </h2>
                  <p className="mt-2 text-white/55">
                    {selectedEnquiry.enquiryType ||
                      selectedEnquiry.productInterest ||
                      "—"}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="rounded-xl border border-white/15 px-4 py-2 text-white/80 hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-xl font-semibold">Contact Info</h3>
                  <div className="mt-4 space-y-2 text-white/65">
                    <p>
                      <span className="text-white">Name:</span>{" "}
                      {selectedEnquiry.name || "—"}
                    </p>
                    <p>
                      <span className="text-white">Email:</span>{" "}
                      {selectedEnquiry.email || "—"}
                    </p>
                    <p>
                      <span className="text-white">Phone:</span>{" "}
                      {selectedEnquiry.phone || "—"}
                    </p>
                    <p>
                      <span className="text-white">Company:</span>{" "}
                      {selectedEnquiry.company || "—"}
                    </p>
                    <p>
                      <span className="text-white">Website:</span>{" "}
                      {selectedEnquiry.companyWebsite || "—"}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-xl font-semibold">Enquiry Info</h3>
                  <div className="mt-4 space-y-2 text-white/65">
                    <p>
                      <span className="text-white">Type:</span>{" "}
                      {selectedEnquiry.enquiryType || "—"}
                    </p>
                    <p>
                      <span className="text-white">Product Interest:</span>{" "}
                      {selectedEnquiry.productInterest || "—"}
                    </p>
                    <p>
                      <span className="text-white">Submitted:</span>{" "}
                      {new Date(selectedEnquiry.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-semibold">Technical Specifications</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-[#0b1626] p-4">
                    <p className="text-white/45">Rope Diameter</p>
                    <p className="mt-1 text-white">
                      {selectedEnquiry.specifications?.ropeDiameter || "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0b1626] p-4">
                    <p className="text-white/45">Rope Construction</p>
                    <p className="mt-1 text-white">
                      {selectedEnquiry.specifications?.ropeConstruction || "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0b1626] p-4">
                    <p className="text-white/45">Core Selection</p>
                    <p className="mt-1 text-white">
                      {selectedEnquiry.specifications?.coreSelection || "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0b1626] p-4">
                    <p className="text-white/45">Tensile</p>
                    <p className="mt-1 text-white">
                      {selectedEnquiry.specifications?.tensile || "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0b1626] p-4">
                    <p className="text-white/45">Lay</p>
                    <p className="mt-1 text-white">
                      {selectedEnquiry.specifications?.lay || "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0b1626] p-4">
                    <p className="text-white/45">Lay Type</p>
                    <p className="mt-1 text-white">
                      {selectedEnquiry.specifications?.layType || "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0b1626] p-4">
                    <p className="text-white/45">Length / Effective Length</p>
                    <p className="mt-1 text-white">
                      {selectedEnquiry.specifications?.length ||
                        selectedEnquiry.specifications?.effectiveLength ||
                        "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0b1626] p-4">
                    <p className="text-white/45">Packing</p>
                    <p className="mt-1 text-white">
                      {selectedEnquiry.specifications?.packing || "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0b1626] p-4">
                    <p className="text-white/45">Standard</p>
                    <p className="mt-1 text-white">
                      {selectedEnquiry.specifications?.standard || "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0b1626] p-4">
                    <p className="text-white/45">End Fitting</p>
                    <p className="mt-1 text-white">
                      {selectedEnquiry.specifications?.endFitting || "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0b1626] p-4 md:col-span-2">
                    <p className="text-white/45">Application</p>
                    <p className="mt-1 text-white">
                      {selectedEnquiry.specifications?.application || "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0b1626] p-4 md:col-span-2">
                    <p className="text-white/45">Other Specification</p>
                    <p className="mt-1 text-white">
                      {selectedEnquiry.specifications?.otherSpecification || "—"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-semibold">Message</h3>
                <p className="mt-4 leading-8 text-white/65">
                  {selectedEnquiry.message || "—"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}