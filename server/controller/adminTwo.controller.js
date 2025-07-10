// controllers/pricing.controller.js
import {asyncHandler} from "../utils/asyncHandler.js";
import { Pricing } from "../model/pricing.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

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

export { addPricing, getAllPricing, updatePricing, deletePricing };
