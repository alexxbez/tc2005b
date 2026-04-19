import "express-session";

declare module "express-session" {
  interface SessionData {
    isLoggedIn?: boolean;
    username?: string;
    error?: string;
  }
}

export { };
