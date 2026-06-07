import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function LazyImage({ className, onLoad, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      loading="lazy"
      decoding="async"
      {...props}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      className={cn("lazy-img", loaded && "is-loaded", className)}
    />
  );
}
