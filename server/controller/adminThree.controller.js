import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Service } from "../model/service.model.js";
import { Card } from "../model/card.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Create a new Service
const createService = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!req.file) {
    return res
      .status(400)
      .json(new ApiError(400, ["Image is required!"], "Validation Error"));
  }

  const cloudImage = await uploadOnCloudinary(req.file.path);
console.log("image uploaded : " , cloudImage);

  const service = new Service({
    title,
    image: cloudImage?.url,
  });

  const savedService = await service.save();

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { service: savedService },
        "Service created successfully"
      )
    );
});

// Get all Services with their linked Cards
const getAllServices = asyncHandler(async (req, res) => {
  const services = await Service.find()
    .populate("card")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(
      new ApiResponse(200, { services }, "All services fetched successfully")
    );
});

// Update Service
const updateService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const service = await Service.findById(id);
  if (!service) {
    return res.status(404).json(new ApiError(404, "Service not found"));
  }

  if (req.file) {
    const newImage = await uploadOnCloudinary(req.file.path);
    service.image = newImage?.url;
  }

  if (title) service.title = title;

  const updated = await service.save();

  return res
    .status(200)
    .json(
      new ApiResponse(200, { service: updated }, "Service updated successfully")
    );
});

// Delete Service (with cascade card delete)
const deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const service = await Service.findById(id);
  if (!service) {
    return res.status(404).json(new ApiError(404, "Service not found"));
  }

  if (service.card) {
    await Card.findByIdAndDelete(service.card);
  }

  await service.deleteOne();

  return res
    .status(200)
    .json(
      new ApiResponse(200, null, "Service and linked card deleted successfully")
    );
});

// Create Card (linked to a service)
const createCard = asyncHandler(async (req, res) => {
  const { title, description, serviceId } = req.body;
  const imageFiles = req.files["images"] || [];
  const videoFiles = req.files["videos"] || [];

  const uploadedImages = await Promise.all(
    imageFiles.map((file) => uploadOnCloudinary(file.path))
  );
  if (uploadedImages.length > 10) {
    return res
      .status(400)
      .json(
        new ApiError(
          400,
          ["You can upload up to 10 images only."],
          "Validation Error"
        )
      );
  }

  const uploadedVideos = await Promise.all(
    videoFiles.map((file) => uploadOnCloudinary(file.path))
  );
  if (uploadedVideos.length > 3) {
    return res
      .status(400)
      .json(
        new ApiError(
          400,
          ["You can upload up to 3 videos only."],
          "Validation Error"
        )
      );
  }

  const card = new Card({
    title,
    description,
    images: uploadedImages.map((img) => img.url),
    videos: uploadedVideos.map((vid) => vid.url),
    service: serviceId,
  });

  const savedCard = await card.save();

  await Service.findByIdAndUpdate(serviceId, { card: savedCard._id });

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { card: savedCard },
        "Card created and linked to service"
      )
    );
});

// Get Card by ID
const getCardById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const card = await Card.findById(id);
  if (!card) {
    return res.status(404).json(new ApiError(404, "Card not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { card }, "Card fetched successfully"));
});

// Update Card
const updateCard = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const card = await Card.findById(id);
  if (!card) {
    return res.status(404).json(new ApiError(404, "Card not found"));
  }

  if (req.files["images"]) {
    const newImgs = await Promise.all(
      req.files["images"].map((file) => uploadOnCloudinary(file.path))
    );
    card.images = newImgs.map((img) => img.url);
  }

  if (req.files["videos"]) {
    const newVids = await Promise.all(
      req.files["videos"].map((file) => uploadOnCloudinary(file.path))
    );
    card.videos = newVids.map((vid) => vid.url);
  }

  if (title) card.title = title;
  if (description) card.description = description;

  const updatedCard = await card.save();

  return res
    .status(200)
    .json(
      new ApiResponse(200, { card: updatedCard }, "Card updated successfully")
    );
});

// Delete Card
const deleteCard = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedCard = await Card.findByIdAndDelete(id);
  if (!deletedCard) {
    return res.status(404).json(new ApiError(404, "Card not found"));
  }

  await Service.findOneAndUpdate({ card: id }, { $unset: { card: "" } });

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Card deleted and unlinked from service"));
});

export {
  createService,
  getAllServices,
  updateService,
  deleteService,
  createCard,
  getCardById,
  updateCard,
  deleteCard,
};
