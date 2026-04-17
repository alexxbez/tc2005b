import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { readFile, appendFile, stat, readdir, mkdir } from "node:fs/promises";
import { Test } from "../models/tests.model";

const viewsDirectory = path.join(__dirname, "..", "views");

export const validateDataDirectory = async (req: Request, res: Response, next: NextFunction) => {
  const dataDir = path.join(__dirname, "..", "data");
  await mkdir(dataDir, { recursive: true });
  next();
}

export const getRoot = (req: Request, res: Response) => {
  const fileName = path.join(viewsDirectory, "test.pug");
  console.log((req.session as any).privileges)
  res.render(fileName);
}

export const postRoot = async (req: Request, res: Response) => {
  const fileName = path.join(__dirname, "..", "data", `${req.body.value}.txt`);
  const data = parseInt(req.body.value);

  try {
    await stat(fileName);
    console.log("File already exists");
  } catch {
    const moves = hanoi(data, 1, 3);
    const resultString = moves.join("\n");
    const test = new Test(data, resultString);
    test.save();
    console.log("File created");
  }

  const htmlFileName = path.join(viewsDirectory, "test.pug");
  res.render(htmlFileName);
}

export const getView = async (req: Request, res: Response) => {
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
}

export const getViewNumber = async (req: Request, res: Response) => {
  const number = req.params.number;
  const fileName = path.join(__dirname, "..", "data", `${number}.txt`);
  console.log(fileName)

  try {
    const content = await readFile(fileName, "utf8");
    res.type("text/plain").send(content);

  } catch {
    res.status(400).send("File not found");
  }
}

function hanoi(n: number, start: number, end: number, moves: string[] = []): string[] {
  if (n === 1) {
    moves.push(`${start}, ${end}`);
    return moves;
  }

  const other = 6 - (start + end);

  hanoi(n - 1, start, other, moves);
  moves.push(`${start}, ${end}`);
  hanoi(n - 1, other, end, moves);

  return moves;
}
