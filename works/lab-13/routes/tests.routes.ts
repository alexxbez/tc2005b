import express from "express";
import { validateDataDirectory, getRoot, postRoot, getView, getViewNumber } from "../controllers/tests.controller";

const router = express.Router();

router.use(validateDataDirectory);

router.get("/", getRoot);
router.post("/", postRoot);
router.get("/view", getView);
router.get("/view/:number", getViewNumber);

export default router;
