import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { TagList } from "@/components/TagList";
import { Header } from "@/components/Header";

const tagsData = [
  "NFT",
  "Metaverse",
  "Sustainable",
  "Sonder",
  "FOMO",
  "Ghosting",
];

export default function App() {
  const [trendingTag, setTrendingTag] = useState("");
  const [forYouTag, setForYouTag] = useState("");

  return (
    <main className="bg-[#1c2126] min-h-screen text-white">
      <Header />
      <HeroSection />
      <TagList
        value={trendingTag}
        onChange={setTrendingTag}
        title="Trending"
        tags={tagsData}
      />
      <TagList
        value={forYouTag}
        onChange={setForYouTag}
        title="For you"
        tags={tagsData}
      />
    </main>
  );
}
