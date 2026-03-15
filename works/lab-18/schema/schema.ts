import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: integer().notNull().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  password: text().notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const rolesTable = sqliteTable("roles", {
  id: integer().notNull().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const privilegesTable = sqliteTable("privileges", {
  id: integer().notNull().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const usersRolesTable = sqliteTable("users_roles", {
  userId: integer("user_id").notNull().references(() => usersTable.id),
  roleId: integer("role_id").notNull().references(() => rolesTable.id),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const privilegesRolesTable = sqliteTable("privileges_roles", {
  privilegeId: integer("privilege_id").notNull().references(() => privilegesTable.id),
  roleId: integer("role_id").notNull().references(() => rolesTable.id),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});
