import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import testRoutes from "./routes/tests.routes"
import { readFile } from "fs/promises";
import path from "path"

const app = express();
app.set("view engine", "pug");
app.set("views", "views");

const viewsDirectory = path.join(__dirname, "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/test", testRoutes);

app.get("/", async (req: Request, res: Response) => {
  const fileName = path.join(viewsDirectory, "index.pug");
  res.render(fileName);
})

app.get("/questions", async (req: Request, res: Response) => {
  const fileName = path.join(viewsDirectory, "questions.pug");
  res.render(fileName);
})

app.use(async (req: Request, res: Response) => {
  const fileName = path.join(viewsDirectory, "404.pug");
  res.status(404).render(fileName);
})

app.listen(8080);
