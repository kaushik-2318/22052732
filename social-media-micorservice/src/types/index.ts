export interface Post {
    id: number;
    userid: number;
    content: string;
}

export interface Comment {
    id: number;
    postid: number;
    content: string;
}
export interface User {
    id: number;
    name: string;
    posts: Post[];
}

export interface CommentResponse {
    comments: Comment[];
}           
