import express, { NextFunction, Request, Response } from "express";
import { readFile, appendFile, stat, readdir, mkdir } from "node:fs/promises";
import path from "path";

const router = express.Router();

router.use(async (req: Request, res: Response, next: NextFunction) => {
  const dataDir = path.join(__dirname, "..", "data");
  await mkdir(dataDir, { recursive: true });
  next();
})

router.get("/", async (req: Request, res: Response) => {
  const html = await readFile(path.join(__dirname, "..", "test.html"), "utf8");
  res.send(html);
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

  const html = await readFile(path.join(__dirname, "..", "test.html"), "utf8");
  res.send(html);
});

router.get("/view", async (req: Request, res: Response) => {
  const header = await readFile(path.join(__dirname, "..", "header_view.html"), "utf8");
  const footer = await readFile(path.join(__dirname, "..", "footer_view.html"), "utf8");

  const dataDir = path.join(__dirname, "..", "data");
  const files = await readdir(dataDir);
  const resultFiles = files.filter(file => /^\d+\.txt$/.test(file));

  let body = "";

  for (const file of resultFiles) {
    const content = await readFile(path.join(dataDir, file), "utf8");
    const lines = content.trim().split("\n");

    const diskNumber = file.replace(".txt", "");
    const totalMoves = lines.length;
    const firstFive = lines.slice(0, 5);

    body += `
<div class="card">
  <header class="card-header">
    <p class="card-header-title">Test with ${diskNumber}</p>
  </header>
  <div class="card-content">
    <div class="content">
      The total moves were <strong>${totalMoves}</strong>. The first five were: <br>
      ${firstFive.join("<br>")}
    </div>

                <div class="buttons">
<form action="/test/view/${diskNumber}" method="GET">
  <button type="submit" class="button is-link">View full</button>
</form>
                </div>
  </div>
</div>
    `;
  }

  res.send(header + body + footer);
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
