import express, { NextFunction, Request, Response } from "express";

export const headerMid = (req: Request, res: Response, next: NextFunction) => {
  res.locals.isLoggedIn = (req.session as any).isLoggedIn;
  res.locals.username = (req.session as any).username;
  next();
}
