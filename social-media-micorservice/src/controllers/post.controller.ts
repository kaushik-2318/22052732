import { Request, Response, NextFunction } from "express";
import { fetchUsers } from "../services/user.service";
import { fetchPosts } from "../services/post.service";
import { fetchComments } from "../services/comment.service";
import { Post, Comment, User } from "../types";

export async function getPostsHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const { type } = req.query;

        if (!type || (type !== "latest" && type !== "popular")) {
            return res.status(400).json({ error: "Invalid type. Accepted values: latest, popular" });
        }

        const users: User[] = await fetchUsers();

        const posts: Post[] = (await Promise.all(
            users.map(async (user) => await fetchPosts(user.id.toString()))
        )).flat();

        if (type === "latest") {
            const latestPosts = posts.sort((a, b) => b.id - a.id).slice(0, 5);
            return res.json({ posts: latestPosts });
        }

        if (type === "popular") {
            const commentCounts: Record<number, number> = {};

            await Promise.all(
                posts.map(async (post) => {
                    const comments = await fetchComments(post.id.toString());
                    commentCounts[post.id] = comments.length;
                })
            );

            const maxComments = Math.max(...Object.values(commentCounts));

            const popularPosts = posts.filter(post => commentCounts[post.id] === maxComments);

            return res.json({ posts: popularPosts });
        }

    } catch (error) {
        next(error);
    }
}
