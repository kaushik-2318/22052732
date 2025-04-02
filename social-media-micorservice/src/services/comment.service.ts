import axios from "axios";
import { Comment, CommentResponse } from "../types";

export async function fetchComments(postId: string): Promise<Comment[]> {
    try {
        const response = await axios.get<CommentResponse>(`http://20.244.56.144/evaluation-service/posts/${postId}/comments`);
        return response.data.comments;
    } catch (error) {
        throw new Error("Error fetching comments data");
    }
}
