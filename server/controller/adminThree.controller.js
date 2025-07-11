import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import {Service} from '../model/service.model.js'
import { ApiResponse } from "../utils/ApiResponse.js";

//  Create a new Service Controller
const createService = asyncHandler(async (req, res) => {
  try {
    const { title } = req.body;

    // Check if image file exists
    if (!req.file) {
      return res.status(400).json(
        new ApiError(400, ["Image is required!"], "Validation Error")
      );
    }

    // Upload image to Cloudinary
    const cloudImage = await uploadOnCloudinary(req.file.path);

    const service = new Service({
      title,
      image: cloudImage?.url,
    });

    const savedService = await service.save();

    return res.status(201).json(
      new ApiResponse(201, { service: savedService }, "Service created successfully")
    );
  } catch (error) {
    return res.status(500).json(
      new ApiError(500, error.message, "Failed to create service")
    );
  }
});

// Get all Services Controller
const getAllServices = asyncHandler(async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });

    return res.status(200).json(
      new ApiResponse(200, { services }, "All services fetched successfully")
    );
  } catch (error) {
    return res.status(500).json(
      new ApiError(500, error.message, "Failed to fetch services")
    );
  }
});

// Edit Service by ID Controller
const updateService = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json(new ApiError(404, "Service not found"));
    }

    // If new image uploaded
    if (req.file) {
      const newImage = await uploadOnCloudinary(req.file.path);
      service.image = newImage?.url;
    }

    if (title) service.title = title;

    const updated = await service.save();

    return res.status(200).json(
      new ApiResponse(200, { service: updated }, "Service updated successfully")
    );
  } catch (error) {
    return res.status(500).json(
      new ApiError(500, error.message, "Failed to update service")
    );
  }
});

//  Delete Service by ID Controller
const deleteService = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return res.status(404).json(new ApiError(404, "Service not found"));
    }

    return res.status(200).json(
      new ApiResponse(200, null, "Service deleted successfully")
    );
  } catch (error) {
    return res.status(500).json(
      new ApiError(500, error.message, "Failed to delete service")
    );
  }
});

export { createService, getAllServices, updateService, deleteService };