export interface Post {
    id: number;
    timestamp: string;
    comments: { id: number }[];
}
