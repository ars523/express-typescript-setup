"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRouter = void 0;
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("./movie.controller");
const router = express_1.default.Router();
router.post("/", movie_controller_1.MovieControllers.createMovie);
router.get("/", movie_controller_1.MovieControllers.getMovies);
router.get("/:id", movie_controller_1.MovieControllers.getMovieById);
exports.movieRouter = router;
