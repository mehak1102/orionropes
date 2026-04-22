import { useEffect, useMemo, useState } from "react";
import api from "../../lib/api";
import AdminLayout from "../../components/admin/AdminLayout";
import toast from "react-hot-toast";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  const fetchApplications = async () => {
    try {
      const { data } = await api.get("/applications");
      setApplications(data || []);
    } catch (error) {
      console.log("FETCH APPLICATIONS ERROR:", error?.response?.data || error);
      toast.error(
        error?.response?.data?.message || "Failed to load applications"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await api.put(`/applications/${id}/status`, { status });

      setApplications((prev) =>
        prev.map((item) => (item._id === id ? { ...item, status } : item))
      );

      toast.success("Status updated");
    } catch (error) {
      console.log("STATUS UPDATE ERROR:", error?.response?.data || error);
      toast.error(
        error?.response?.data?.message || "Failed to update status"
      );
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this application?"
    );
    if (!confirmed) return;

    try {
      await api.delete(`/applications/${id}`);

      setApplications((prev) => prev.filter((item) => item._id !== id));

      toast.success("Application deleted successfully");
    } catch (error) {
      console.log("DELETE APPLICATION ERROR:", error?.response?.data || error);
      toast.error(
        error?.response?.data?.message || "Failed to delete application"
      );
    }
  };

  const filteredApplications = useMemo(() => {
    return applications.filter((item) => {
      const matchesStatus =
        statusFilter === "all" || item.status === statusFilter;

      const term = search.toLowerCase();
      const matchesSearch =
        `${item.firstName || ""} ${item.lastName || ""}`
          .toLowerCase()
          .includes(term) ||
        item.email?.toLowerCase().includes(term) ||
        item.position?.toLowerCase().includes(term);

      return matchesStatus && matchesSearch;
    });
  }, [applications, statusFilter, search]);

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Admin
          </p>
          <h1 className="mt-3 text-4xl font-semibold">Applications</h1>
          <p className="mt-3 text-white/60">
            Review job applications, resumes, and hiring status.
          </p>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="Search by name, email, or position..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl bg-white/10 px-4 py-3 outline-none"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl bg-white/10 px-4 py-3 outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="reviewing">Reviewing</option>
            <option value="shortlisted">Shortlisted</option>
            <option value="rejected">Rejected</option>
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
        ) : filteredApplications.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white/60">
            No applications found.
          </div>
        ) : (
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-white/80">
                <thead className="bg-[#0b1626] text-white/55">
                  <tr>
                    <th className="px-5 py-4 font-medium">Candidate</th>
                    <th className="px-5 py-4 font-medium">Email</th>
                    <th className="px-5 py-4 font-medium">Phone</th>
                    <th className="px-5 py-4 font-medium">Position</th>
                    <th className="px-5 py-4 font-medium">Resume</th>
                    <th className="px-5 py-4 font-medium">Status</th>
                    <th className="px-5 py-4 font-medium">Date</th>
                    <th className="px-5 py-4 font-medium">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredApplications.map((item, index) => (
                    <tr
                      key={item._id}
                      className={`border-t border-white/10 ${
                        index % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                      }`}
                    >
                      <td className="px-5 py-4 font-medium text-white">
                        {item.firstName} {item.lastName}
                      </td>

                      <td className="px-5 py-4 text-white/70">
                        {item.email || "—"}
                      </td>

                      <td className="px-5 py-4 text-white/70">
                        {item.phone || "—"}
                      </td>

                      <td className="px-5 py-4 text-cyan-300/80">
                        {item.position || "—"}
                      </td>

                      <td className="px-5 py-4">
                        {item.resumeUrl ? (
                          <div className="flex gap-3">
                            <button
                              onClick={() => window.open(item.resumeUrl, "_blank")}
                              className="rounded-lg bg-cyan-400 px-3 py-1 text-xs font-medium text-black hover:opacity-90"
                            >
                              View Resume
                            </button>

                            <a
                              href={item.resumeUrl}
                              target="_blank"
                              rel="noreferrer"
                              download
                              className="rounded-lg border border-white/10 px-3 py-1 text-xs hover:bg-white/10"
                            >
                              Download
                            </a>
                          </div>
                        ) : (
                          "—"
                        )}
                      </td>

                      <td className="px-5 py-4">
                        <select
                          value={item.status}
                          onChange={(e) =>
                            handleStatusChange(item._id, e.target.value)
                          }
                          className="rounded-lg bg-[#0b1626] px-3 py-2 outline-none"
                        >
                          <option value="new">New</option>
                          <option value="reviewing">Reviewing</option>
                          <option value="shortlisted">Shortlisted</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>

                      <td className="px-5 py-4 text-white/45">
                        {new Date(item.createdAt).toLocaleString()}
                      </td>

                      <td className="px-5 py-4">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="rounded-lg bg-red-500 px-4 py-2 text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}