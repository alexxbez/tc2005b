import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import path from "node:path";

const dbPath = path.join(__dirname, "..", "data", "database.db");

console.log("Opening DB:", dbPath);

const sqlite = new Database(dbPath);

export const db = drizzle(sqlite);
