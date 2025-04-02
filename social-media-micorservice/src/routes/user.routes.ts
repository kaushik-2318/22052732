import { Router } from "express";
import { getUsersHandler } from "../controllers/user.controller";
import asyncHandler from "../utils/asyncHandler";

const router = Router();
router.get("/", asyncHandler(getUsersHandler));

export default router;
