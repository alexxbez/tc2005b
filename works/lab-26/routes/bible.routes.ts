import express from 'express';
import { bibleGet, biblePost } from "../controllers/bible.controller";

const router = express.Router();

router.get("/", bibleGet);
router.post("/", biblePost);

export default router;