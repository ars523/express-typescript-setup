import express, { Request, Response } from "express";
import { movieRouter } from "./modules/movies/movie.route";
const app = express();

//parser
app.use(express.json());

app.use("/api/movies", movieRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello From setup project!");
});

export default app;
