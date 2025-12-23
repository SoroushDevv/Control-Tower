import { Star, Star as StarFilled } from "lucide-react"; 
import { cn } from "@/lib/utils";

export default function Rating({
  value = 0,      
  max = 5,         
  type = "scale5", 
  className = "",
}) {
  const rating = type === "percent" ? Math.round((value / 100) * max) : value;

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {Array.from({ length: max }).map((_, i) => {
        const isFilled = i < rating;
        return (
          <Star
            key={i}
            className={cn(
              "w-5 h-5",
              isFilled ? "text-yellow-400" : "text-gray-300"
            )}
          />
        );
      })}
    </div>
  );
}
