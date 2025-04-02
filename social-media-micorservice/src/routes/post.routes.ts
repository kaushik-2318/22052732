import { Router } from "express";
import { getPostsHandler } from "../controllers/post.controller";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(getPostsHandler));

export default router;
