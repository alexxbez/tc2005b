import { eq } from "drizzle-orm";
import { privilegesRolesTable, privilegesTable, rolesTable, usersRolesTable, usersTable } from "../schema/schema";
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

  static async fetchPrivilegesById(id: number) {
    const privileges = await db.select({
      name: privilegesTable.name,
    }).from(usersRolesTable)
      .innerJoin(privilegesRolesTable, eq(usersRolesTable.roleId, privilegesRolesTable.roleId))
      .innerJoin(privilegesTable, eq(privilegesRolesTable.privilegeId, privilegesTable.id))
      .where(eq(usersRolesTable.userId, id));

    return privileges.map(p => p.name);
  }

  static async fetchRoles() {
    return await db.select().from(rolesTable);
  }

  static async assignRole(userId: number, roleId: number) {
    await db.insert(usersRolesTable).values({
      userId: userId,
      roleId: roleId
    });
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
