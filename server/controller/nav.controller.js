import express from 'express';
import {Contact} from '../model/contact.model.js';
import {Review} from '../model/review.model.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {asyncHandler} from '../utils/asyncHandler.js'
import mongoose from 'mongoose';
import { Faq } from '../model/faq.model.js';
import { TermsCond } from '../model/termscond.model.js';

//Create Contact Controller
const createContact = asyncHandler(async (req, res) => {
  try {
    const { name, email, comment } = req.body;

    const newContact = new Contact({
      name,
      email,
      comment,
    });

    await newContact.save();

    return res.status(201).json({
      success: true,
      message: "Your message has been received successfully!",
      data: newContact,
    });
  } catch (err) {
    console.error("Error saving contact message:", err.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while submitting your message.",
    });
  }
});

//Create Review Controller
const createReview = asyncHandler(async (req, res) => {
  try {
    const { name, email, rating, feedback } = req.body;

    const newReview = new Review({ name, email, rating, feedback });
    await newReview.save();

    res.status(201).json({
      success: true,
      message: "Review submitted successfully!",
      data: newReview,
    });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while submitting your review.",
    });
  }
});

//Fetch All Reviews Controller
const getAllReviews = asyncHandler(async (req, res) => {
  try {
    const reviews = await Review.find({}).sort({ createdAt: -1 });

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No reviews found.",
        details: ["No customer reviews are available."],
      });
    }

    return res
      .status(200)
      .json(new ApiResponse(200, { reviews }, "Reviews fetched successfully!"));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, error, "Unable to fetch reviews!"));
  }
});

//  Create FAQ Controller
const createFaq = asyncHandler(async (req, res) => {
  const { ques, ans } = req.body;

  const newFaq = await Faq.create({ ques, ans});

  return res.status(201).json(
    new ApiResponse(201, { faq: newFaq }, "FAQ created successfully.")
  );
});

// Get all FAQs Controller
const getAllFaqs = asyncHandler(async (req, res) => {
  const faqs = await Faq.find({}).sort({ createdAt: -1 });

  if (!faqs.length) {
    return res.status(404).json(
      new ApiError(404, null, "No FAQs found.")
    );
  }

  return res.status(200).json(
    new ApiResponse(200, { faqs }, "FAQs fetched successfully.")
  );
});

//  Edit Individual FAQ Controller
const updateFaq = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { ques, ans } = req.body;

  const updatedFaq = await Faq.findByIdAndUpdate(
    id,
    { $set: { ques, ans } },
    { new: true, runValidators: true }
  );

  if (!updatedFaq) {
    return res.status(404).json(
      new ApiError(404, null, "FAQ not found.")
    );
  }

  return res.status(200).json(
    new ApiResponse(200, { faq: updatedFaq }, "FAQ updated successfully.")
  );
});

//  Delete Individual FAQ Controller
const deleteFaq = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedFaq = await Faq.findByIdAndDelete(id);

  if (!deletedFaq) {
    return res.status(404).json(
      new ApiError(404, null, "FAQ not found.")
    );
  }

  return res.status(200).json(
    new ApiResponse(200, { faq: deletedFaq }, "FAQ deleted successfully.")
  );
});

//  Create Terms Controller
const createTerms = asyncHandler(async (req, res) => {
  const { terms } = req.body;

  const newTerms = await TermsCond.create({ terms });

  return res.status(201).json(
    new ApiResponse(201, { terms: newTerms }, "Terms & Conditions added successfully.")
  );
});

//  Get all Terms Controller
const getAllTerms = asyncHandler(async (req, res) => {
  const termsList = await TermsCond.find({}).sort({ createdAt: -1 });

  if (!termsList.length) {
    return res.status(404).json(
      new ApiError(404, null, "No Terms & Conditions found.")
    );
  }

  return res.status(200).json(
    new ApiResponse(200, { terms: termsList }, "Terms & Conditions fetched successfully.")
  );
});

//  Update Terms Controller
const updateTerms = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { terms } = req.body;

  const updated = await TermsCond.findByIdAndUpdate(
    id,
    { terms },
    { new: true, runValidators: true }
  );

  if (!updated) {
    return res.status(404).json(
      new ApiError(404, null, "Terms not found.")
    );
  }

  return res.status(200).json(
    new ApiResponse(200, { terms: updated }, "Terms & Conditions updated successfully.")
  );
});

//  Delete Terms Controller
const deleteTerms = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deleted = await TermsCond.findByIdAndDelete(id);

  if (!deleted) {
    return res.status(404).json(
      new ApiError(404, null, "Terms not found.")
    );
  }

  return res.status(200).json(
    new ApiResponse(200, { terms: deleted }, "Terms & Conditions deleted successfully.")
  );
});

export {createContact , createReview , getAllReviews ,createFaq, getAllFaqs, updateFaq, deleteFaq ,createTerms, getAllTerms, updateTerms, deleteTerms};
