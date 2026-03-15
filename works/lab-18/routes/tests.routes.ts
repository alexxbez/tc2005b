import express from "express";
import { validateDataDirectory, getRoot, postRoot, getView, getViewNumber } from "../controllers/tests.controller";
import { isAuth } from "../middlewares/is-auth";

const router = express.Router();

router.use(validateDataDirectory);
router.use(isAuth)

router.get("/", getRoot);
router.post("/", postRoot);
router.get("/view", getView);
router.get("/view/:number", getViewNumber);

export default router;
