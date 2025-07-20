import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function HeroSection() {
  const onSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
      <img
        alt="hero-background-image"
        src="/task1/hero-bg.png"
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Search for words, phrases and meanings
        </h1>
        <HeroSearchBar initialValue="" onSearch={onSearch} />
      </div>
    </div>
  );
}

function HeroSearchBar({
  initialValue,
  onSearch,
}: {
  initialValue: string;
  onSearch: (search: string) => void;
}) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(innerValue);
      }}
      className="flex items-center bg-black px-4 py-2 rounded-full w-full max-w-xl mt-6 shadow-lg"
    >
      <Search className="text-gray-400 mr-3" />
      <Input
        aria-label="Search input"
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
      />
      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white ml-4"
      >
        Search
      </Button>
    </form>
  );
}
