import { useEffect, useState } from "react";
import api from "../../lib/api";
import AdminLayout from "../../components/admin/AdminLayout";
import toast from "react-hot-toast";

const initialForm = {
  name: "",
  slug: "",
  category: "",
  shortDescription: "",
  fullDescription: "",
  construction: "",
  material: "",
  applications: "",
  featured: false,
  image: "",
};

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [savingProduct, setSavingProduct] = useState(false);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get("/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = async () => {
    if (!selectedFile) return;

    const uploadData = new FormData();
    uploadData.append("image", selectedFile);

    try {
      setUploadingImage(true);

      const { data } = await api.post("/upload", uploadData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFormData((prev) => ({
        ...prev,
        image: data.imageUrl,
      }));

      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Image upload failed");
    } finally {
      setUploadingImage(false);
    }
  };

  const resetForm = () => {
    setFormData(initialForm);
    setEditingId(null);
    setSelectedFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      applications: formData.applications
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    try {
      setSavingProduct(true);

      if (editingId) {
        await api.put(`/products/${editingId}`, payload);
        toast.success("Product updated successfully");
      } else {
        await api.post("/products", payload);
        toast.success("Product added successfully");
      }

      resetForm();
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("Failed to save product");
    } finally {
      setSavingProduct(false);
    }
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setFormData({
      name: product.name || "",
      slug: product.slug || "",
      category: product.category || "",
      shortDescription: product.shortDescription || "",
      fullDescription: product.fullDescription || "",
      construction: product.construction || "",
      material: product.material || "",
      applications: product.applications?.join(", ") || "",
      featured: product.featured || false,
      image: product.image || "",
    });

    toast.success("Product loaded for editing");
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");

    if (!confirmed) return;

    try {
      await api.delete(`/products/${id}`);
      toast.success("Product deleted successfully");
      fetchProducts();

      if (editingId === id) {
        resetForm();
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
    }
  };

  return (
    <AdminLayout>
      <h1 className="mb-6 text-3xl font-semibold">Products</h1>

      <form
        onSubmit={handleSubmit}
        className="mb-10 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-2"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="rounded-xl bg-white/10 px-4 py-3 outline-none"
          required
        />

        <input
          type="text"
          name="slug"
          placeholder="Slug (example: crane-ropes)"
          value={formData.slug}
          onChange={handleChange}
          className="rounded-xl bg-white/10 px-4 py-3 outline-none"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="rounded-xl bg-white/10 px-4 py-3 outline-none"
          required
        />

        <input
          type="text"
          name="construction"
          placeholder="Construction"
          value={formData.construction}
          onChange={handleChange}
          className="rounded-xl bg-white/10 px-4 py-3 outline-none"
        />

        <input
          type="text"
          name="material"
          placeholder="Material"
          value={formData.material}
          onChange={handleChange}
          className="rounded-xl bg-white/10 px-4 py-3 outline-none"
        />

        <div className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4">
          <label className="mb-3 block text-sm text-white/70">Product Image</label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="w-full rounded-xl bg-white/10 px-4 py-3 outline-none"
          />

          <button
            type="button"
            onClick={handleImageUpload}
            disabled={!selectedFile || uploadingImage}
            className="mt-3 rounded-xl bg-cyan-400 px-4 py-2 text-black disabled:opacity-60"
          >
            {uploadingImage ? "Uploading..." : "Upload Image"}
          </button>

          {formData.image && (
            <div className="mt-4">
              <img
                src={formData.image}
                alt="Preview"
                className="h-32 w-32 rounded-xl border border-white/10 object-cover"
              />
              <p className="mt-2 break-all text-xs text-white/50">{formData.image}</p>
            </div>
          )}
        </div>

        <input
          type="text"
          name="applications"
          placeholder="Applications (comma separated)"
          value={formData.applications}
          onChange={handleChange}
          className="rounded-xl bg-white/10 px-4 py-3 outline-none md:col-span-2"
        />

        <textarea
          name="shortDescription"
          placeholder="Short Description"
          value={formData.shortDescription}
          onChange={handleChange}
          className="rounded-xl bg-white/10 px-4 py-3 outline-none md:col-span-2"
          rows="3"
          required
        />

        <textarea
          name="fullDescription"
          placeholder="Full Description"
          value={formData.fullDescription}
          onChange={handleChange}
          className="rounded-xl bg-white/10 px-4 py-3 outline-none md:col-span-2"
          rows="5"
        />

        <label className="flex items-center gap-3 text-white/80">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
          />
          Featured Product
        </label>

        <div className="flex gap-3 md:col-span-2">
          <button
            type="submit"
            disabled={savingProduct}
            className="rounded-xl bg-orange-400 px-6 py-3 font-medium text-black disabled:opacity-70"
          >
            {savingProduct
              ? editingId
                ? "Updating..."
                : "Adding..."
              : editingId
              ? "Update Product"
              : "Add Product"}
          </button>

          {editingId ? (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-xl border border-white/20 px-6 py-3"
            >
              Cancel Edit
            </button>
          ) : null}
        </div>
      </form>
{products.length === 0 ? (
  <div className="grid gap-4">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="h-24 animate-pulse rounded-2xl border border-white/10 bg-white/5"
      />
    ))}
  </div>
) : (
  <div className="grid gap-4">
    {products.map((p) => (
      <div
        key={p._id}
        className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 md:flex-row md:items-center"
      >
        <div className="flex items-center gap-4">
          {p.image ? (
            <img
              src={p.image}
              alt={p.name}
              className="h-20 w-20 rounded-xl object-cover"
            />
          ) : (
            <div className="h-20 w-20 rounded-xl bg-white/10" />
          )}

          <div>
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-white/50">{p.category}</p>
            <p className="mt-2 text-sm text-white/60">
              {p.shortDescription}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => handleEdit(p)}
            className="rounded-lg bg-blue-400 px-4 py-2 text-black"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(p._id)}
            className="rounded-lg bg-red-500 px-4 py-2 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
)}
     
    </AdminLayout>
  );
}