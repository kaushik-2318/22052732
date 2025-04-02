import { Request, Response, NextFunction } from "express";
import { fetchUsers } from "../services/user.service";
import { User } from "../types";

export async function getUsersHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const users: User[] = await fetchUsers();
        
        const topUsers = users
            .map(user => ({
                userId: user.id,
                username: user.name,
                postCount: user.posts.length
            }))
            .sort((a, b) => b.postCount - a.postCount)
            .slice(0, 5);

        res.json({ users: topUsers });
    } catch (error) {
        next(error);
    }
}
