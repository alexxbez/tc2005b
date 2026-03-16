import type { Config } from "drizzle-kit";

export default {
  schema: "./schema",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: "./data/database.db"
  }
} satisfies Config;
