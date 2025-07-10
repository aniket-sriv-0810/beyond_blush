import express from 'express';
import {Contact} from '../model/contact.model.js';
import {Review} from '../model/review.model.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {asyncHandler} from '../utils/asyncHandler.js'
import mongoose from 'mongoose';

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


export {createContact , createReview , getAllReviews};
