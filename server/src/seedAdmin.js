const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const email = "admin@orion.com";
    const plainPassword = "123456";

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    await Admin.create({
      name: "Orion Admin",
      email,
      password: hashedPassword,
    });

    console.log("Admin created successfully");
    console.log("Email:", email);
    console.log("Password:", plainPassword);

    process.exit();
  } catch (error) {
    console.error("Error seeding admin:", error.message);
    process.exit(1);
  }
};

seedAdmin();