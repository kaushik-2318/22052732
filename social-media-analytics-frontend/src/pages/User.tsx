import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPosts } from "../services/api";

type Post = {
  _id: string;
  content: string;
  createdAt: string;
};

const UserPosts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (userId) {
        const data = await getUserPosts(userId);
        setPosts(data);
      }
    };
    fetchUserPosts();
  }, [userId]);

  return (
    <div className="mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">User's Posts</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
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
    </div>
  );
};

export default UserPosts;
