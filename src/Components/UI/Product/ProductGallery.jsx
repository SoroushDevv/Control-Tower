import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

export default function ProductGallery({ images = [], initialIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const prevImage = () => {
    setActiveIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images.length) {
    return (
      <div className="flex items-center justify-center aspect-square rounded-xl border border-dashed text-sm text-muted-foreground">
        No images
      </div>
    );
  }

  return (
    <div className="w-full max-w-[520px] mx-auto">
      {/* Main Image Slider */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border bg-background">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={img} className="flex-shrink-0 w-full h-full">
              <img
                src={img}
                alt={`product-${index}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Navigation: شماره + فلش پایین راست */}
        <div className="absolute bottom-2 right-2 flex justify-center items-center bg-black/50 px-3 py-1 rounded-full text-white text-sm font-medium">
          <button
            onClick={prevImage}
            className="p-1 hover:bg-black/30 rounded transition"
          >
             <ChevronRight />
          </button>
          <span className="p-1">{activeIndex + 1}/{images.length}</span>
          <button
            onClick={nextImage}
            className="p-1 hover:bg-black/30 rounded transition"
          >
            <ChevronLeft />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex justify-center space-x-2">
        {images.map((img, index) => (
          <button
            key={img}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative h-16 w-16 overflow-hidden rounded-lg border transition-all duration-300 ease-in-out",
              index === activeIndex
                ? "border-primary ring-2 ring-primary/30"
                : "border-muted hover:border-foreground/40",
              index !== activeIndex ? "opacity-50 blur-[1px]" : "opacity-100 blur-0"
            )}
          >
            <img
              src={img}
              alt={`thumbnail-${index}`}
              className="h-full w-full object-cover transition-all duration-300 ease-in-out"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
