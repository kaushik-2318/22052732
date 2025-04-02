import UsersList from "../components/UserList";
// import LatestPosts from "../components/LatestPosts.tsx";
// import PopularPosts from "../components/PopularPosts.tsx";
// import { fetchUsers, fetchPosts } from "../lib/api";
import { Users, MessageSquare } from "lucide-react";
import { fetchUsers } from "../lib/api";

function Home() {
  
  return (
    <main className="mx-auto px-4 py-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gradient-to-r from-[#7a33ff] to-[#ff33a6]">
          Social Media Dashboard
        </h1>
        <p className="text-[#0a0a0a] max-w-2xl mx-auto">
          Explore the latest posts, popular content, and connect with users in
          our community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded-md bg-[#7a33ff] flex items-center justify-center">
                <Users className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold">Users</h2>
            </div>
            <UsersList users={users} />
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-6 rounded-md bg-[#a833ff] flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-xl font-semibold">Latest Posts</h2>
          </div>
          {/* <LatestPosts posts={latestPosts} users={users} /> */}
        </div>

        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-6 rounded-md bg-[#a833ff] flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-xl font-semibold">Popular Posts</h2>
          </div>
          {/* <PopularPosts posts={popularPosts} users={users} /> */}
        </div>
      </div>
    </main>
  );
}

export default Home
