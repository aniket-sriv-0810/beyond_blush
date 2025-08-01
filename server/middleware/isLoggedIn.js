import jwt from 'jsonwebtoken';
import {User} from '../model/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const verifyJWT = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; // 🔥 This is the key
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
});

export {verifyJWT};