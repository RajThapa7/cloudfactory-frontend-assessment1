import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="Logo" className="w-4 h-4" />
        <div className="text-white font-semibold text-lg">Wortionary</div>
      </div>

      <div className="flex items-center gap-4">
        {/* search input */}
        <div className="relative">
          <span className="absolute left-3 top-2.25">
            <Search className="text-gray-400 w-5 h-5" />
          </span>
          <Input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
            className="pl-10 bg-gray-800 text-white border-none focus:ring-0 rounded-lg"
          />
        </div>

        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
