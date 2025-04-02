import { Post } from "./post.model";

export interface User {
    id: number;
    name: string;
    posts: Post[];
}
