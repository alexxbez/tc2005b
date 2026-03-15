import path from "path";
import { appendFile, stat } from "node:fs/promises";

export class Test {
  num: number;
  val: string;

  constructor(num: number, val: string) {
    this.num = num;
    this.val = val;
  }

  async save() {
    const fileName = path.join(__dirname, "..", "data", `${this.num}.txt`);

    await appendFile(fileName, this.val);
  }
}
