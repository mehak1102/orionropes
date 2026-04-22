import { useEffect, useMemo, useState } from "react";
import api from "../../lib/api";
import AdminLayout from "../../components/admin/AdminLayout";
import toast from "react-hot-toast";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [search, setSearch] = useState("");

  const fetchContacts = async () => {
    try {
      const { data } = await api.get("/contact");
      setContacts(data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this contact?");

    if (!confirmed) return;

    try {
      await api.delete(`/contact/${id}`);
      toast.success("Contact deleted successfully");
      setContacts((prev) => prev.filter((item) => item._id !== id));

      if (selectedContact?._id === id) {
        setSelectedContact(null);
      }
    } catch (error) {
      toast.error("Failed to delete contact");
    }
  };

  const filteredContacts = useMemo(() => {
    const term = search.toLowerCase();

    return contacts.filter((item) => {
      return (
        item.firstName?.toLowerCase().includes(term) ||
        item.lastName?.toLowerCase().includes(term) ||
        item.email?.toLowerCase().includes(term) ||
        item.company?.toLowerCase().includes(term) ||
        item.location?.toLowerCase().includes(term)
      );
    });
  }, [contacts, search]);

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Admin
          </p>
          <h1 className="mt-3 text-4xl font-semibold">Contacts</h1>
          <p className="mt-3 text-white/60">
            Review contact form submissions, business details, and requirements.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <input
            type="text"
            placeholder="Search by name, email, company, or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl bg-white/10 px-4 py-3 outline-none"
          />
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
        ) : filteredContacts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white/60">
            No contacts found.
          </div>
        ) : (
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-white/80">
                <thead className="bg-[#0b1626] text-white/55">
                  <tr>
                    <th className="px-5 py-4 font-medium">Name</th>
                    <th className="px-5 py-4 font-medium">Email</th>
                    <th className="px-5 py-4 font-medium">Phone</th>
                    <th className="px-5 py-4 font-medium">Company</th>
                    <th className="px-5 py-4 font-medium">Location</th>
                    <th className="px-5 py-4 font-medium">Date</th>
                    <th className="px-5 py-4 font-medium">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredContacts.map((item, index) => (
                    <tr
                      key={item._id}
                      className={`border-t border-white/10 ${
                        index % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                      }`}
                    >
                      <td className="px-5 py-4 font-medium text-white">
                        {item.firstName} {item.lastName}
                      </td>

                      <td className="px-5 py-4 text-white/70">{item.email || "—"}</td>

                      <td className="px-5 py-4 text-white/70">{item.phone || "—"}</td>

                      <td className="px-5 py-4 text-cyan-300/80">
                        {item.company || "—"}
                      </td>

                      <td className="px-5 py-4 text-white/70">
                        {item.location || "—"}
                      </td>

                      <td className="px-5 py-4 text-white/45">
                        {new Date(item.createdAt).toLocaleString()}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedContact(item)}
                            className="rounded-lg bg-cyan-400 px-4 py-2 text-black"
                          >
                            View
                          </button>

                          <button
                            onClick={() => handleDelete(item._id)}
                            className="rounded-lg bg-red-500 px-4 py-2 text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedContact && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
            <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[32px] border border-white/10 bg-[#06111f] p-8 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                    Contact Details
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold">
                    {selectedContact.firstName} {selectedContact.lastName}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedContact(null)}
                  className="rounded-xl border border-white/15 px-4 py-2 text-white/80 hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-xl font-semibold">Basic Info</h3>
                  <div className="mt-4 space-y-2 text-white/65">
                    <p>
                      <span className="text-white">First Name:</span>{" "}
                      {selectedContact.firstName || "—"}
                    </p>
                    <p>
                      <span className="text-white">Last Name:</span>{" "}
                      {selectedContact.lastName || "—"}
                    </p>
                    <p>
                      <span className="text-white">Email:</span>{" "}
                      {selectedContact.email || "—"}
                    </p>
                    <p>
                      <span className="text-white">Phone:</span>{" "}
                      {selectedContact.phone || "—"}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-xl font-semibold">Business Info</h3>
                  <div className="mt-4 space-y-2 text-white/65">
                    <p>
                      <span className="text-white">Company:</span>{" "}
                      {selectedContact.company || "—"}
                    </p>
                    <p>
                      <span className="text-white">Location:</span>{" "}
                      {selectedContact.location || "—"}
                    </p>
                    <p>
                      <span className="text-white">Submitted:</span>{" "}
                      {new Date(selectedContact.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-semibold">Requirement</h3>
                <p className="mt-4 leading-8 text-white/65">
                  {selectedContact.requirement || "—"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}