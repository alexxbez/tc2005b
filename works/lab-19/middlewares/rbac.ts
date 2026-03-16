import { NextFunction, Request, Response } from "express"

export const canView = (req: Request, res: Response, next: NextFunction) => {
  let conti = true;

  for (let privilege of (req.session as any).privileges) {
    if (privilege === "view") {
      conti = false;
      next();
    }
  }
  if (conti) {
    (req.session as any).error = "Not authorized";
    return res.redirect("/user/login");
  }
}

export const canViewComplete = (req: Request, res: Response, next: NextFunction) => {
  let conti = true;

  for (let privilege of (req.session as any).privileges) {
    if (privilege === "view_complete") {
      conti = false;
      next();
    }
  }
  if (conti) {
    (req.session as any).error = "Not authorized";
    return res.redirect("/user/login");
  }
}

export const canQuestion = (req: Request, res: Response, next: NextFunction) => {
  let conti = true;

  for (let privilege of (req.session as any).privileges) {
    if (privilege === "question") {
      conti = false;
      next();
    }
  }
  if (conti) {
    (req.session as any).error = "Not authorized";
    return res.redirect("/user/login");
  }
}
