import { eq } from "drizzle-orm";
import { usersTable } from "../schema/schema";
import { db } from "./db";

export class User {
  name: string;
  password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }

  async exists(): Promise<boolean> {
    const user = await db.select().from(usersTable).where(eq(usersTable.name, this.name));
    return user.length > 0;
  }

  static async fetchByName(name: string) {
    const user = await db.select().from(usersTable).where(eq(usersTable.name, name));
    return user;
  }

  async save(): Promise<number> {
    try {
      const result = await db.insert(usersTable).values({
        name: this.name,
        password: this.password
      }).returning({ id: usersTable.id });

      return result[0]?.id ?? -1;
    } catch (error) {

      return -1;
    }
  }
}
