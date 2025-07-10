import express from 'express';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { Contact } from '../model/contact.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Review } from '../model/review.model.js';


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
export { getAllContacts , deleteContactById , deleteReviewById };