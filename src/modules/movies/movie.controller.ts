import { Request, Response } from "express";
import { MovieServices } from "./movie.service";
import { z } from "zod";
import { movieValidationSchema } from "./movie.validation";

const createMovie = async (req: Request, res: Response) => {
  try {
    const zodParsedData = movieValidationSchema.parse(req.body);
    const movies = await MovieServices.createMovie(zodParsedData);
    res.json({
      success: true,
      message: "Movie created successfully",
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Movie creation failed",
      error,
    });
  }
};

const getMovies = async (req: Request, res: Response) => {
  const movies = await MovieServices.getMovies();
  res.json({
    success: true,
    message: "Movies fetched successfully",
    data: movies,
  });
};

const getMovieById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const movies = await MovieServices.getMoviesById(id);
    res.json({
      success: true,
      message: "Movie fetched successfully",
      data: movies,
    });
  } catch (error) {
    console.log(error);
  }
};

export const MovieControllers = {
  createMovie,
  getMovies,
  getMovieById,
};
