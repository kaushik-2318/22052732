import type { Post, User } from "../lib/types";
import PostCard from "./PostCard.tsx";
import { MessageSquare } from "lucide-react";

interface LatestPostsProps {
  posts: Post[];
  users: User[];
}

export default function LatestPosts({ posts, users }: LatestPostsProps) {
  const displayPosts = posts.slice(0, 5);

  return (
    <div className="space-y-6">
      {displayPosts.length > 0 ? (
        displayPosts.map((post) => {
          const user = users.find((u) => u.id === post.userId)!;
          return <PostCard key={post.id} post={post} user={user} />;
        })
      ) : (
        <div className="text-center py-12 bg-muted/50 rounded-xl">
          <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No posts available</p>
        </div>
      )}
    </div>
  );
}
