import axios from "axios";

export async function fetchComments() {
    const response = await axios.get("http://20.244.56.144/evaluation-service/posts/comments");
    return response.data;
}
