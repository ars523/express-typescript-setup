import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

router.post("/", MovieControllers.createMovie);
router.get("/", MovieControllers.getMovies);
router.get("/:id", MovieControllers.getMovieById);

export const movieRouter = router;
