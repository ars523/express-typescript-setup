import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovie = async (payload: TMovie) => {
  const result = await Movie.create(payload);
  return result;
};

const getMovies = async () => {
  const result = await Movie.find();
  return result;
};

const getMoviesById = async (id: string) => {
  const result = await Movie.findById(id);
  return result;
};

export const MovieServices = {
  createMovie,
  getMovies,
  getMoviesById,
};
