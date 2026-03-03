import express, { NextFunction, Request, Response } from "express";
import { readFile, appendFile, stat, readdir, mkdir } from "node:fs/promises";
import path from "path";

const router = express.Router();

const viewsDirectory = path.join(__dirname, "..", "views");

router.use(async (req: Request, res: Response, next: NextFunction) => {
  const dataDir = path.join(__dirname, "..", "data");
  await mkdir(dataDir, { recursive: true });
  next();
})

router.get("/", async (req: Request, res: Response) => {
  const fileName = path.join(viewsDirectory, "test.pug");
  res.render(fileName);
});

router.post("/", async (req: Request, res: Response) => {
  const fileName = path.join(__dirname, "..", "data", `${req.body.value}.txt`);
  const data = parseInt(req.body.value);

  try {
    await stat(fileName);
    console.log("File already exists");
  } catch {
    await hanoi(data, 1, 3, fileName);
    console.log("File created");
  }

  const htmlFileName = path.join(viewsDirectory, "test.html");
  const html = await readFile(htmlFileName, "utf8");
  res.send(html);
});

router.get("/view", async (req: Request, res: Response) => {
  const dataDir = path.join(__dirname, "..", "data");
  const files = await readdir(dataDir);
  const resultFiles = files.filter(file => /^\d+\.txt$/.test(file));

  const tests = [];

  for (const file of resultFiles) {
    const content = await readFile(path.join(dataDir, file), "utf8");
    const lines = content.trim().split("\n");

    tests.push({
      diskNumber: file.replace(".txt", ""),
      totalMoves: lines.length,
      firstFive: lines.slice(0, 5),
    });
  }

  res.render("view", { tests });
});

router.get("/view/:number", async (req: Request, res: Response) => {
  const number = req.params.number;
  const fileName = path.join(__dirname, "..", "data", `${number}.txt`);
  console.log(fileName)

  try {
    const content = await readFile(fileName, "utf8");
    res.type("text/plain").send(content);

  } catch {
    res.status(400).send("File not found");
  }
});

async function printMove(start: number, end: number, fileName: string) {
  await appendFile(fileName, `${start}, ${end}\n`);
}

async function hanoi(n: number, start: number, end: number, fileName: string) {
  // base case
  if (n === 1) { await printMove(start, end, fileName); return; }

  // other rod is always 6 - (start + end)
  const other = 6 - (start + end);

  await hanoi(n - 1, start, other, fileName);
  await printMove(start, end, fileName);
  await hanoi(n - 1, other, end, fileName);
}

export default router;
