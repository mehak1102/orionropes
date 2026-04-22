// const dotenv = require("dotenv");
require("dotenv").config();
const cloudinary = require("./config/cloudinary");

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
// import applicationRoutes from "./routes/applicationRoutes";
const applicationRoutes = require("./routes/applicationRoutes");
const contactRoutes = require("./routes/contactRoutes"); 

// dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.use("/api/enquiries", require("./routes/enquiryRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));
app.use("/api/applications", applicationRoutes);
// app.use("/api/applications", require("./routes/applicationRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});