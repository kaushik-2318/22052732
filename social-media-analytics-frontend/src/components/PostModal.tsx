"use client";

import { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { X, MessageSquare, Heart } from "lucide-react";
import type { Post, User, Comment } from "../lib/types";

interface PostModalProps {
  post: Post;
  user: User;
  isOpen: boolean;
  onClose: () => void;
}

export default function PostModal({
  post,
  user,
  isOpen,
  onClose,
}: PostModalProps) {
  // Handle escape key press to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative bg-card w-full max-w-2xl max-h-[90vh] rounded-xl shadow-xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
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

          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto flex-1">
          <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
          <p className="text-muted-foreground mb-6">{post.body}</p>

          <div className="flex items-center gap-4 mb-6">
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Heart className="h-4 w-4" />
              <span>Like</span>
            </button>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MessageSquare className="h-4 w-4" />
              <span>{post.comments.length} comments</span>
            </div>
          </div>

          {/* Comments section */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Comments</h3>

            {post.comments.length > 0 ? (
              <div className="space-y-4">
                {post.comments.map((comment) => (
                  <CommentItem key={comment.id} comment={comment} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm py-4">
                No comments yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="rounded-lg bg-muted/50 p-3">
      <div className="flex items-center mb-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-secondary/70 to-accent/70 flex items-center justify-center text-xs font-bold text-white mr-2">
          {comment.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-medium">{comment.name}</h4>
          <p className="text-xs text-muted-foreground">{comment.email}</p>
        </div>
      </div>
      <p className="text-sm pl-8">{comment.body}</p>
    </div>
  );
}
