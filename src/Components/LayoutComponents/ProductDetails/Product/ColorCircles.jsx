import { cn } from "@/lib/utils";

export default function ColorCircles({ colors = [], size = 6, className = "" }) {




  return (
    <div className={cn("h-fit flex justify-start items-center gap-2 py-3", className)}>
      {colors.map((color, index) => (
        <span
          key={index}
          className={cn(
            `inline-block rounded-full border border-gray-300 w-6 h-6`,
          )}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
