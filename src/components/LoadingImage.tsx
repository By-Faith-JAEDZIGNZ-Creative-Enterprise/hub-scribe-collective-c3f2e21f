import { useState } from "react";
import { cn } from "@/lib/utils";

interface LoadingImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

/**
 * Image with a shimmer skeleton behind it. The skeleton holds the space
 * until the image decodes, then the image fades in smoothly.
 */
const LoadingImage = ({ wrapperClassName, className, alt = "", ...props }: LoadingImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {!loaded && <div className="absolute inset-0 skeleton-shimmer" aria-hidden="true" />}
      <img
        {...props}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={cn(
          "transition-[opacity,transform] duration-700 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </div>
  );
};

export default LoadingImage;
