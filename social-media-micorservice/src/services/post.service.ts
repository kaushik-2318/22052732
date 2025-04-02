import axios from "axios";
import { Post, Comment } from "../types";

export async function fetchPosts(userId: string): Promise<Post[]> {
    try {
        const response = await axios.get(`http://20.244.56.144/evaluation-service/users/${userId}/posts`);
        return response.data.posts;
    } catch (error) {
        throw new Error("Error fetching posts data");
    }
}
