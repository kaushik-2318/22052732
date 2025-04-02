import { Link } from "react-router-dom";
import { LayoutGrid } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b sticky top-0 z-10 backdrop-blur-md bg-white/80">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#7a33ff] to-[#ff33a6] flex items-center justify-center">
            <LayoutGrid className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7a33ff] to-[#ff33a6]">
            SocialHub
          </span>
        </Link>
      </div>
    </header>
  );
}
