const cloudinary = require("../config/cloudinary");
const Application = require("../models/Application");
const sendApplicationEmail = require("../utils/sendEmail");

const createApplication = async (req, res) => {
  try {
    console.log("CLOUD NAME:", process.env.CLOUDINARY_CLOUD_NAME);
    console.log("API KEY:", process.env.CLOUDINARY_API_KEY);
    console.log("CLOUDINARY CONFIG:", cloudinary.config());

    const {
      firstName,
      lastName,
      email,
      phone,
      position,
      qualification,
      experience,
      coverLetter,
    } = req.body;

    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({
        message: "First name, last name, email, and phone are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Resume PDF is required",
      });
    }

    const uploadedResume = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "orion-resumes",
          resource_type: "raw",
          use_filename: true,
          unique_filename: true,
          format: "pdf",
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      stream.end(req.file.buffer);
    });

    const application = await Application.create({
      firstName,
      lastName,
      email,
      phone,
      position,
      qualification,
      experience,
      coverLetter,
      resumeUrl: uploadedResume.secure_url,
      resumePublicId: uploadedResume.public_id,
      status: "new",
    });
try {
  await sendApplicationEmail({
    firstName,
    lastName,
    email,
    phone,
    position,
    resumeUrl: uploadedResume.secure_url,
  });
} catch (emailError) {
  console.log("EMAIL FAILED:", emailError.message);
}
    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    console.log("APPLICATION ERROR:", error);

    res.status(500).json({
      message: "Failed to submit application",
      error: error.message,
    });
  }
};

const getApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch applications",
      error: error.message,
    });
  }
};

const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["new", "reviewing", "shortlisted", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { returnDocument: "after" }
    );

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json({
      message: "Application status updated successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update application status",
      error: error.message,
    });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json({ message: "Application deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete application",
      error: error.message,
    });
  }
};

module.exports = {
  createApplication,
  getApplications,
  updateApplicationStatus,
  deleteApplication,
};