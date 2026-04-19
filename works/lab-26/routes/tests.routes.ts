import express from "express";
import { validateDataDirectory, getRoot, postRoot, getView, getViewNumber } from "../controllers/tests.controller";
import { isAuth } from "../middlewares/is-auth";
import { canView, canViewComplete } from "../middlewares/rbac";

const router = express.Router();

router.use(validateDataDirectory);
router.use(isAuth)

router.get("/", getRoot);
router.post("/", postRoot);
router.get("/view", canView, getView);
router.get("/view/:number", canViewComplete, getViewNumber);

export default router;
