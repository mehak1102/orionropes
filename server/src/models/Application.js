const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    position: { type: String, trim: true },
    qualification: { type: String, trim: true },
    experience: { type: String, trim: true },
    coverLetter: { type: String, trim: true },
    resumeUrl: { type: String, trim: true },
    resumePublicId: { type: String, trim: true },
    status: {
      type: String,
      enum: ["new", "reviewing", "shortlisted", "rejected"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);