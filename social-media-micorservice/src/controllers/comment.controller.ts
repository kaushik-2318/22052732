import { Request, Response, NextFunction } from "express";
import { fetchComments } from "../services/comment.service";

export async function getCommentsHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const comments = await fetchComments(req.params.postId);
        res.json(comments);
    } catch (error) {
        next(error);
    }
}
