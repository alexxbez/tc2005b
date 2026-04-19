import express from "express";
import { getUserLogin, getUserLogout, getUsersRoot, postUserLogin, postUserRoot } from "../controllers/users.controllers";

const router = express.Router();

router.get("/", getUsersRoot);
router.post("/", postUserRoot);
router.get("/login", getUserLogin);
router.post("/login", postUserLogin);
router.get("/logout", getUserLogout);

export default router;
