import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure upload folder exists
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, uniqueName);
  },
});

// File type restrictions
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/webp",
    "video/mp4",
    "video/quicktime",
  ];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image and video files are allowed!"), false);
  }
};

// Default multer upload
const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Max 10MB
  },
  fileFilter,
});

// ⛏️ Custom uploader for cards with images/videos
const uploadCardFiles = upload.fields([
  { name: "images", maxCount: 10 },
  { name: "videos", maxCount: 3 },
]);

export { upload, uploadCardFiles };
