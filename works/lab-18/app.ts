import express, { Request, Response } from "express";
import csrf from "csurf";
import bodyParser from "body-parser";
import testRoutes from "./routes/tests.routes";
import userRoutes from "./routes/users.routes";
import path from "path"
import session from "express-session";
import { headerMid } from "./middlewares/header";
import { csrfMid } from "./middlewares/csfr";

const app = express();

app.use(
  session({
    secret: "super-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 // 1 hour
    }
  })
);

app.set("view engine", "pug");
app.set("views", "views");

const viewsDirectory = path.join(__dirname, "views");
app.use(bodyParser.urlencoded({ extended: false }));

const csrfProtection = csrf();
app.use(csrfProtection);
app.use(csrfMid);

app.use(headerMid);
app.use("/test", testRoutes);
app.use("/user", userRoutes);

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
