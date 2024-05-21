"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieControllers = void 0;
const movie_service_1 = require("./movie.service");
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield movie_service_1.MovieServices.createMovie(req.body);
    res.json({
        success: true,
        message: "Movie created successfully",
        data: movies,
    });
});
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield movie_service_1.MovieServices.getMovies();
    res.json({
        success: true,
        message: "Movies fetched successfully",
        data: movies,
    });
});
const getMovieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const movies = yield movie_service_1.MovieServices.getMoviesById(id);
    res.json({
        success: true,
        message: "Movie fetched successfully",
        data: movies,
    });
});
exports.MovieControllers = {
    createMovie,
    getMovies,
    getMovieById,
};
