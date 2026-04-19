/*
 * Script created with chatgpt for testing purposes
 */

import { db } from "../models/db";
import {
  usersTable,
  rolesTable,
  privilegesTable,
  usersRolesTable,
  privilegesRolesTable
} from "../schema/schema";
import { hash } from "bcryptjs";

async function seed() {

  console.log("Resetting tables...");

  await db.delete(usersRolesTable);
  await db.delete(privilegesRolesTable);
  await db.delete(usersTable);
  await db.delete(rolesTable);
  await db.delete(privilegesTable);

  console.log("Creating privileges...");

  const privileges = await db.insert(privilegesTable).values([
    { name: "view" },
    { name: "view_complete" },
    { name: "question" }
  ]).returning();

  const view = privileges.find(p => p.name === "view")!;
  const viewComplete = privileges.find(p => p.name === "view_complete")!;
  const question = privileges.find(p => p.name === "question")!;

  console.log("Creating roles...");

  const roles = await db.insert(rolesTable).values([
    { name: "admin" },
    { name: "teacher" },
    { name: "student" }
  ]).returning();

  const admin = roles.find(r => r.name === "admin")!;
  const teacher = roles.find(r => r.name === "teacher")!;
  const student = roles.find(r => r.name === "student")!;

  console.log("Assigning privileges to roles...");

  await db.insert(privilegesRolesTable).values([
    { roleId: admin.id, privilegeId: view.id },
    { roleId: admin.id, privilegeId: viewComplete.id },
    { roleId: admin.id, privilegeId: question.id },

    { roleId: teacher.id, privilegeId: view.id },
    { roleId: teacher.id, privilegeId: question.id },

    { roleId: student.id, privilegeId: view.id }
  ]);

  console.log("Creating users...");

  const password = await hash("123456", 10);
  const defaultImgPath = "/uploads/default-user.png";

  const users = await db.insert(usersTable).values([
    { name: "admin", password, img: defaultImgPath },
    { name: "teacher", password, img: defaultImgPath },
    { name: "student", password, img: defaultImgPath },
    { name: "alex", password, img: defaultImgPath },
    { name: "maria", password, img: defaultImgPath }
  ]).returning();

  const adminUser = users.find(u => u.name === "admin")!;
  const teacherUser = users.find(u => u.name === "teacher")!;
  const studentUser = users.find(u => u.name === "student")!;

  console.log("Assigning roles to users...");

  await db.insert(usersRolesTable).values([
    { userId: adminUser.id, roleId: admin.id },
    { userId: teacherUser.id, roleId: teacher.id },
    { userId: studentUser.id, roleId: student.id },

    { userId: users[3].id, roleId: student.id },
    { userId: users[4].id, roleId: teacher.id }
  ]);

  console.log("Database seeded successfully!");
}

seed().then(() => process.exit());
