import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

interface TagListProps {
  title: string;
  tags: string[];
  onChange?: (tag: string) => void;
  value?: string;
}

export function TagList({ title, tags, onChange, value }: TagListProps) {
  const isSelected = (tag: string) => {
    return value === tag;
  };

  return (
    <div className="mt-8 px-6 max-w-5xl mx-auto">
      <p className="text-white text-lg font-semibold mb-4">{title}</p>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className={clsx(
              `bg-gray-800 text-gray-400 hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-200`,
              isSelected(tag) && "bg-blue-500 text-white"
            )}
            onClick={() => {
              if (onChange) {
                onChange(isSelected(tag) ? "" : tag);
              }
            }}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
