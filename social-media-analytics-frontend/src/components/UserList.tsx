import { Link } from "react-router-dom";
import type { User } from "../lib/types";

interface UsersListProps {
  users: User[];
}

export default function UsersList({ users }: UsersListProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`} className="block">
          <div className="rounded-xl border bg-card text-card-foreground hover:shadow-lg transition-all duration-300 p-4 flex items-center hover:scale-[1.02] hover:border-primary/20">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-base font-bold text-white mr-3 shadow-md">
              {user.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-medium">{user.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
