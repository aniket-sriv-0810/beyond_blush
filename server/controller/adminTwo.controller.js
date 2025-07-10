// controllers/pricing.controller.js
import {imgSlider} from '../model/imgSlider.model.js';
import {asyncHandler} from "../utils/asyncHandler.js";
import { Pricing } from "../model/pricing.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import fs from "fs";
// Add Pricing Controller
const addPricing = asyncHandler(async (req, res) => {
  const { category, title, includes, price } = req.body;

  const newPricing = await Pricing.create({ category, title, includes, price });

  return res.status(201).json(
    new ApiResponse(201, { pricing: newPricing }, "Pricing added successfully.")
  );
});

// Get All Pricing Controller
const getAllPricing = asyncHandler(async (req, res) => {
  const pricingList = await Pricing.find({}).sort({ createdAt: -1 });

  if (!pricingList.length) {
    throw new ApiError(404, null, "No pricing found.");
  }

  return res.status(200).json(
    new ApiResponse(200, { pricing: pricingList }, "All pricing data fetched successfully.")
  );
});

// Update Pricing Controller
const updatePricing = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedPricing = await Pricing.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedPricing) {
    throw new ApiError(404, null, "Pricing entry not found.");
  }

  return res.status(200).json(
    new ApiResponse(200, { pricing: updatedPricing }, "Pricing updated successfully.")
  );
});

// Delete Pricing Controller
const deletePricing = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deleted = await Pricing.findByIdAndDelete(id);
  if (!deleted) {
    throw new ApiError(404, null, "Pricing not found.");
  }

  return res.status(200).json(
    new ApiResponse(200, { pricing: deleted }, "Pricing deleted successfully.")
  );
});

//  CREATE SLIDESHOW controller
const createSlider = asyncHandler(async (req, res) => {
  try {
    //  No files uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json(
        new ApiError(400, ["Images are required."], "Validation Error")
      );
    }

    //  Exceeds max limit
    if (req.files.length > 5) {
      return res.status(400).json(
        new ApiError(400, ["Maximum of 5 images are allowed."], "Validation Error")
      );
    }

    //  Upload each file to Cloudinary
    const uploadedImages = await Promise.all(
      req.files.map(file => uploadOnCloudinary(file.path).then(res => res.url))
    );

    // Save to DB
    const newSlider = new imgSlider({ images: uploadedImages });
    const savedSlider = await newSlider.save();

    return res.status(201).json(
      new ApiResponse(201, { slider: savedSlider }, "Slider created successfully!")
    );
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json(
      new ApiError(500, error.message, "Image upload failed")
    );
  }
});

// GET ALL SLIDERS Controller
const getAllSliders = asyncHandler(async (req, res) => {
  try {
    const sliders = await imgSlider.find().sort({ createdAt: -1 });
    res.status(200).json(new ApiResponse(200, { sliders }, "Fetched all sliders"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message, "Failed to fetch sliders"));
  }
});

//  EDIT A SLIDER BY ID Controller
const editSlider = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    //  Check if slider exists
    const existingSlider = await imgSlider.findById(id);
    if (!existingSlider) {
      return res.status(404).json(
        new ApiError(404, ["Slider not found."], "Not Found")
      );
    }

    //  If new images are provided
    let uploadedImages = existingSlider.images;

    if (req.files && req.files.length > 0) {
      if (req.files.length > 5) {
        return res.status(400).json(
          new ApiError(400, ["Maximum of 5 images are allowed."], "Validation Error")
        );
      }

      //  Upload new images to Cloudinary
      uploadedImages = await Promise.all(
        req.files.map(file =>
          uploadOnCloudinary(file.path).then(res => res.url)
        )
      );
    }

    //  Update the document
    existingSlider.images = uploadedImages;
    await existingSlider.save();

    return res.status(200).json(
      new ApiResponse(200, { slider: existingSlider }, "Slider updated successfully.")
    );
  } catch (error) {
    console.error("Slider update error:", error);
    return res.status(500).json(
      new ApiError(500, error.message, "Failed to update slider.")
    );
  }
});


//  DELETE A SLIDER BY ID Controller
const deleteSlider = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const slider = await imgSlider.findById(id);
    if (!slider) {
      return res.status(404).json(new ApiError(404, ["Slider not found"], "Not Found"));
    }

    await imgSlider.findByIdAndDelete(id);
    res.status(200).json(new ApiResponse(200, {}, "Slider deleted successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message, "Failed to delete slider"));
  }
});
export { addPricing, getAllPricing, updatePricing, deletePricing , createSlider, getAllSliders, editSlider, deleteSlider};
