import { Schema, model } from "mongoose";
import { TMovie, TReview } from "./movie.interface";

const reviewSchema = new Schema<TReview>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  releaseDate: {
    type: Date,
    required: [true, "Release date is required"],
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  reviews: [reviewSchema],
});

export const Movie = model<TMovie>("Movie", movieSchema);
