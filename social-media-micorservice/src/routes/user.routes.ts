import { Router } from "express";
import { getUsersHandler, getTopUsersHandler } from "../controllers/user.controller";
import asyncHandler from "../utils/asyncHandler";

const router = Router();
router.get("/", asyncHandler(getUsersHandler));
router.get("/top-users", asyncHandler(getTopUsersHandler));

export default router;
