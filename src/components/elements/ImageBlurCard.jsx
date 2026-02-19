"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function ImageBlurCard({
  src,
  alt,
  title,
  width,
  height,
  className,
  preview = true,
  noStyle = false,
  mdx = false,
  style,
  aspect,
  rounded,
  priority = false,
  ...rest
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setLoading] = useState(true);

  // Hitung aspect ratio
  const aspectRatio = aspect
    ? aspect.height / aspect.width
    : height && width
      ? height / width
      : 9 / 16; // fallback default

  return (
    <div
      className={cn(className, {
        "overflow-hidden": !noStyle,
        "animate-pulse": isLoading,
      })}
      style={style}
      {...rest}
    >
      {/* Aspect Ratio Wrapper */}
      <div
        className="relative w-full"
        style={{
          paddingTop: `${aspectRatio * 100}%`,
          cursor: preview ? "zoom-in" : "default",
        }}
      >
        {/* Blur Background */}
        <div className="img-blur" />
        <style jsx>{`
          .img-blur::before {
            content: "";
            position: absolute;
            inset: 0;
            filter: blur(24px);
            z-index: 0;
            background-image: url(${src});
            background-position: center center;
            background-size: 100%;
            transition: opacity 1s ease-out;
            opacity: ${isLoaded ? 0 : 1};
          }
        `}</style>
        {/* Real Image */}
        <div className="absolute inset-0">
          <Image
            src={src}
            alt={alt}
            title={title || alt}
            fill
            priority={priority}
            unoptimized
            className={cn(
              "transition-all duration-700 ease-in-out p-1.5",
              isLoading ? "scale-[1.03] blur-xl" : "scale-100 blur-0",
              rounded,
            )}
            onLoad={() => {
              setIsLoaded(true);
              setLoading(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}
