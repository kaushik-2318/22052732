"use client";

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import type { Post, User } from "../lib/types";
import { MessageSquare } from "lucide-react";
import PostModal from "./PostModal";

interface PostCardProps {
  post: Post;
  user: User;
}

export default function PostCard({ post, user }: PostCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 p-5 hover:scale-[1.01] cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-sm font-bold text-white mr-3 shadow-md">
            {user.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-medium">{user.name}</h3>
            <p className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>

        <h4 className="font-semibold text-lg mb-2">{post.title}</h4>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {post.body}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
            <MessageSquare className="h-3 w-3 mr-1" />
            <span>{post.comments.length} comments</span>
          </div>

          <div className="text-xs text-primary hover:underline">Read more</div>
        </div>
      </div>

      <PostModal
        post={post}
        user={user}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
