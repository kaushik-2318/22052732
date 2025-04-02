import { Request, Response, NextFunction } from "express";
import { fetchPosts, fetchComments } from "../services/post.service";
import { Post, Comment } from "../types";

export async function getPostsHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const { type } = req.query;

        if (!type || (type !== "latest" && type !== "popular")) {
            return res.status(400).json({ error: "Invalid type. Accepted values: latest, popular" });
        }

        const posts: Post[] = await fetchPosts();

        if (type === "latest") {
            const latestPosts = posts.sort((a, b) => b.id - a.id).slice(0, 5);
            return res.json({ posts: latestPosts });
        }

        if (type === "popular") {
            const comments: Comment[] = await fetchComments();

            const commentCounts: Record<number, number> = {};
            comments.forEach((comment: Comment) => {
                commentCounts[comment.postid] = (commentCounts[comment.postid] || 0) + 1;
            });

            const maxComments = Math.max(...Object.values(commentCounts));

            const popularPosts = posts.filter((post: Post) => commentCounts[post.id] === maxComments);

            return res.json({ posts: popularPosts });
        }

    } catch (error) {
        next(error);
    }
}
