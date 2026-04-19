import { NextFunction, Request, Response } from "express";

export const csrfMid = (req: Request, res: Response, next: NextFunction) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}
