import { Router } from "express";
import { getCommentsHandler } from "../controllers/comment.controller";
import asyncHandler from "../utils/asyncHandler";

const router = Router();
router.get("/", asyncHandler(getCommentsHandler));

export default router;
