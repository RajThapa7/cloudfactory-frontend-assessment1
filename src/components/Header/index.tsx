import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="relative border-b border-gray-400 text-white">
      {/* Main Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 gap-2">
        <div className="flex items-center gap-2">
          <img src="/task1/logo.png" alt="Logo" className="w-5 h-5" />
          <div className="text-white font-semibold text-lg">Wortionary</div>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Search Input */}
          <HeaderSearchBar
            className="hidden sm:block"
            value={searchValue}
            onChange={setSearchValue}
          />

          {/* Mobile Search Icon */}
          <button
            className="sm:hidden"
            onClick={() => setShowMobileSearch((prev) => !prev)}
            aria-label="Open search"
          >
            {showMobileSearch ? (
              <X className="text-gray-400 w-5 h-5" />
            ) : (
              <Search className="text-gray-400 w-5 h-5" />
            )}
          </button>

          <Avatar className="w-8 h-8">
            <AvatarImage className="object-cover" src="/avatar.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Mobile Search Bar Overlay */}
      <div
        className={cn(
          "absolute top-0 left-0 w-full bg-gray-900 px-6 py-4 z-50 transition-all duration-300 sm:hidden",
          showMobileSearch
            ? "translate-y-14 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        <HeaderSearchBar
          className="sm:hidden block"
          value={searchValue}
          onChange={setSearchValue}
        />
      </div>
    </header>
  );
}

const HeaderSearchBar = ({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      <span className="absolute left-3 top-2.25">
        <Search className="text-gray-400 w-5 h-5" />
      </span>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        className="pl-10 bg-gray-800 text-white border-none focus:!ring-1 focus:!ring-accent rounded-lg"
      />
    </div>
  );
};
