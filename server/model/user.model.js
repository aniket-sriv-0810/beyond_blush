
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required!"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required!"],
      validate: {
        validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Invalid email format",
      },
    },
    phone: {
      type: String,
      unique: true,
      required: [true, "Phone number is required!"],
      validate: {
        validator: (v) => /^[0-9]{10}$/.test(v),
        message: "Phone number must be a 10-digit number.",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      minlength: [6, "Password must be at least 6 characters long"],
      select: false, // Don't return password in queries by default
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

// Convert email to lowercase
userSchema.pre("save", function (next) {
  if (this.isModified("email")) {
    this.email = this.email.toLowerCase();
  }
  next();
});
//  Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

//  Compare entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//  Generate JWT Token
userSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id, email: this.email, role: this.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

const User = mongoose.model("User", userSchema);
export { User };
