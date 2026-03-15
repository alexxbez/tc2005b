import express, { Request, Response } from "express";
import path from "path";
import { User } from "../models/users.model";
import { compare, hash } from "bcryptjs";

const viewsDirectory = path.join(__dirname, "..", "views");

export const getUsersRoot = async (req: Request, res: Response) => {
  const fileName = path.join(viewsDirectory, "register.pug");
  res.render(fileName, { exists: false });
}

export const postUserRoot = async (req: Request, res: Response) => {
  try {
    const pssw = await hash(req.body.password, 12);
    const user = new User(req.body.name, pssw);
    const userAlreadyExists = await user.exists();
    if (userAlreadyExists) {
      console.log("user already exists")
      const fileName = path.join(viewsDirectory, "register.pug")
      return res.render(fileName, { exists: true });
    }

    await user.save();
    console.log("user saved")
    res.redirect("/user/login");
  } catch (error) {
    console.log(`error: ${error}`)
    const fileName = path.join(viewsDirectory, "error.pug");
    res.render(fileName, { error: error });
  }
}

export const getUserLogin = async (req: Request, res: Response) => {
  const fileName = path.join(viewsDirectory, "login.pug");

  const error = (req.session as any).error;
  (req.session as any).error = null;

  res.render(fileName, { error });
}

export const postUserLogin = async (req: Request, res: Response) => {
  try {
    const user = await User.fetchByName(req.body.name);

    if (!user.length) {
      (req.session as any).error = "User or password do not match";
      return res.redirect("/user/login");
    }
    const match = await compare(req.body.password, user[0].password);

    if (match) {
      (req.session as any).isLoggedIn = true;
      (req.session as any).username = req.body.name;
      return (req.session as any).save(() => {
        return res.redirect("/test");
      })
    } else {
      (req.session as any).error = "User or password do not match"
      return res.redirect("/user/login");
    }
  } catch (error) {
    const fileName = path.join(viewsDirectory, "error.pug");
    res.render(fileName, { error: error });
  }
}

export const getUserLogout = async (req: Request, res: Response) => {
  (req.session as any).destroy(() => {
    res.redirect("/user/login");
  })
}
