// const { v2: cloudinary } = require("cloudinary");

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// module.exports = cloudinary;

// const { v2: cloudinary } = require("cloudinary");

// cloudinary.config({
//   cloud_name: "diwvgqcd0",
//   api_key: "874619964257553",
//   api_secret: "8tPchSUdK2tl0Bv8GWpdOo4GZdA",
//   secure: true,
// });

// console.log("CLOUDINARY FINAL CONFIG:", cloudinary.config());

// module.exports = cloudinary;



require("dotenv").config();

const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

module.exports = cloudinary;