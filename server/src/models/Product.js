const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String },
    applications: [{ type: String }],
    construction: { type: String },
    material: { type: String },
    featured: { type: Boolean, default: false },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);