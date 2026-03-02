import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import testRoutes from "./routes/tests.routes"
import { readFile } from "fs/promises";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/test", testRoutes);

app.get("/", async (req: Request, res: Response) => {
  const html = await readFile("index.html", "utf8");
  res.type("html").send(html);
})

app.get("/questions", async (req: Request, res: Response) => {
  const html = await readFile("questions.html", "utf8");
  res.send(html);
})

app.use(async (req: Request, res: Response) => {
  const html = await readFile("404.html", "utf8");
  res.status(404).send(html);
})

app.listen(8080);
