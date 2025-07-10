// utils/cloudinary.js
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Config Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload function
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // can handle image, video, raw
    });

    // Delete local temp file
    fs.unlinkSync(localFilePath);

    console.log("✅ Uploaded to Cloudinary:", response.secure_url);
    return response;
  } catch (error) {
    console.error("❌ Cloudinary Upload Failed:", error);
    fs.existsSync(localFilePath) && fs.unlinkSync(localFilePath); // cleanup
    return null;
  }
};

export { uploadOnCloudinary };
