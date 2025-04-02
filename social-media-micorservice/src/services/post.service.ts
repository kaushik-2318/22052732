import axios from "axios";
import { Post, Comment } from "../types";

export async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await axios.get("http://20.244.56.144/evaluation-service/users/posts");
        return response.data.posts;
    } catch (error) {
        throw new Error("Error fetching posts data");
    }
}

export async function fetchComments(): Promise<Comment[]> {
    try {
        const response = await axios.get("http://20.244.56.144/evaluation-service/posts/comments");
        return response.data.comments;
    } catch (error) {
        throw new Error("Error fetching comments data");
    }
}
