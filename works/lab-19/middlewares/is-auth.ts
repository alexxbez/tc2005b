import { Request, Response, NextFunction } from "express";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!(req.session as any).isLoggedIn) {
    return res.redirect("/user/login");
  }

  next();
};
