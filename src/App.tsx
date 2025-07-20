import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { TagList } from "@/components/TagList";
import { Header } from "@/components/Header";

export default function App() {
  const [tags, setTags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <HeroSection />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
