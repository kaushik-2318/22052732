import { useEffect, useState } from "react";
import { getPosts } from "../services/api";

type Post = {
  _id: string;
  content: string;
  createdAt: string;
};

interface PostListProps {
  type: "latest" | "popular";
}

const PostList = ({ type }: PostListProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts(type);
      setPosts(data);
    };
    fetchPosts();
  }, [type]);

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-3">
        {type === "latest" ? "Latest Posts" : "Popular Posts"}
      </h2>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post._id} className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-gray-700">{post.content}</p>
            <small className="text-gray-500">
              {new Date(post.createdAt).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
