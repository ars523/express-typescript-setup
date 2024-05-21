import { z } from "zod";
const reviewValidationSchema = z.object({
  email: z.string(),
  rating: z.number(),
  comment: z.string(),
});

export const movieValidationSchema = z.object({
  title: z.string(),
  description: z.string(),
  genre: z.string(),
  releaseDate: z.string(),
  viewCount: z.number().default(0),
  isDeleted: z.boolean().default(false),
  reviews: z.array(reviewValidationSchema).default([]),
});
