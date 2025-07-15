import express from 'express';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { Contact } from '../model/contact.model.js';
import { User } from '../model/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Review } from '../model/review.model.js';

//Register User Controller
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Check for missing fields
  if (!name || !email || !phone || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  //  Check if email or phone already exists
  const existingEmail = await User.findOne({ email: email.toLowerCase() });
  if (existingEmail) {
    return res.status(400).json({
      success: false,
      message: "Email is already registered.",
    });
  }

  const existingPhone = await User.findOne({ phone });
  if (existingPhone) {
    return res.status(400).json({
      success: false,
      message: "Phone number is already registered.",
    });
  }

  //  Create user (hashing is done in model pre-save hook)
  const user = new User({ name, email, phone, password });
  await user.save();

  const token = user.generateToken();

  return res.status(201).json({
    success: true,
    message: "User registered successfully.",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    },
    token,
  });
});

//Login a User Controller
const loginUser = asyncHandler(async (req, res) => {
  const { emailOrPhone, password } = req.body;

  if (!emailOrPhone || !password) {
    return res.status(400).json({
      success: false,
      message: "Email/Phone and password are required.",
    });
  }

  //  Try finding user by email or phone
  const user = await User.findOne({
    $or: [
      { email: emailOrPhone.toLowerCase() },
      { phone: emailOrPhone }
    ],
  }).select("+password");

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials.",
    });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Incorrect password.",
    });
  }

  const token = user.generateToken();

  return res.status(200).json({
    success: true,
    message: "Login successful.",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    },
    token,
  });
});

//Fetch individual User details Controller
const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id).select("-password"); // exclude password

  if (!user) {
    return res.status(404).json(
      new ApiError(404, "User not found")
    );
  }

  return res.status(200).json(
    new ApiResponse(200, { user }, "User fetched successfully")
  );
});

// Update User Details Controller
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json(new ApiError(404, "User not found"));
  }

  if (email) user.email = email.toLowerCase();
  if (name) user.name = name;
  if (phone) user.phone = phone;

  await user.save();

  return res.status(200).json(
    new ApiResponse(200, { user }, "User updated successfully")
  );
});

//Change Password Controller
const changePassword = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { currentPassword, newPassword } = req.body;

  const user = await User.findById(id).select("+password");
  if (!user) {
    return res.status(404).json(new ApiError(404, "User not found"));
  }

  const isMatch = await user.comparePassword(currentPassword);
  if (!isMatch) {
    return res.status(401).json(new ApiError(401, "Current password is incorrect"));
  }

  user.password = newPassword;
  await user.save();

  return res.status(200).json(
    new ApiResponse(200, {}, "Password updated successfully")
  );
});

const checkAuthentication = asyncHandler(async (req, res) => {
  try {
    if (req.user) {
      console.log("Authenticated user:", req.user);

      const { _id, name, email, phone, role } = req.user;

      return res.status(200).json(
        new ApiResponse(200, {
          isAuthenticated: true,
          user: {
            _id,
            name,
            email,
            phone,
            role,
            isAdmin: role === "admin", // boolean flag
          },
        })
      );
    } else {
      console.log("User not authenticated!");
      return res.status(200).json(
        new ApiResponse(200, { isAuthenticated: false }, "User not authenticated yet!")
      );
    }
  } catch (error) {
    console.log("Error in authentication check:", error);
    return res.status(400).json(
      new ApiError(400, error.message || error, "Failed to authenticate the user!")
    );
  }
});
//Fetch all Contact Details
const getAllContacts = asyncHandler(async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });

    if (!contacts.length) {
      return res.status(404).json({
        status: 404,
        message: "No contact messages found.",
        details: ["No contact data available in the system."],
      });
    }

    return res
      .status(200)
      .json(new ApiResponse(200, { contacts }, "Contacts fetched successfully!"));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, error, "Unable to fetch contact data!"));
  }
});

//Delete the Contact Controller
const deleteContactById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({
        status: 404,
        message: "Contact not found",
        details: ["Invalid contact ID"],
      });
    }

    return res
      .status(200)
      .json(new ApiResponse(200, { contact }, "Contact deleted successfully."));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, error, "Failed to delete contact."));
  }
});

//Delete the Review Controller
const deleteReviewById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return res.status(404).json({
        status: 404,
        message: "Review not found",
        details: ["Invalid review ID"],
      });
    }

    return res
      .status(200)
      .json(new ApiResponse(200, { review }, "Review deleted successfully."));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, error, "Failed to delete review."));
  }
});
export {registerUser,loginUser,getUserById ,updateUser ,changePassword ,checkAuthentication, getAllContacts , deleteContactById , deleteReviewById };