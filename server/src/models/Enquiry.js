const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    company: { type: String, trim: true },
    companyWebsite: { type: String, trim: true },
    productInterest: { type: String, trim: true },
    message: { type: String, trim: true },
    enquiryType: { type: String, trim: true },
    specifications: {
      ropeDiameter: String,
      ropeConstruction: String,
      coreSelection: String,
      tensile: String,
      lay: String,
      layType: String,
      length: String,
      packing: String,
      standard: String,
      effectiveLength: String,
      endFitting: String,
      otherSpecification: String,
      application: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);