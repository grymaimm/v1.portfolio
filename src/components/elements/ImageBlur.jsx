"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const ImageBlur = (props) => {
  const { alt, src, loading = "lazy", className, rounded, ...rest } = props;
  const [isLoading, setLoading] = useState(false);

  return (
    <div
      className={cn("overflow-hidden", !isLoading && "animate-pulse", rounded)}
    >
      <Image
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-100 blur-0" : "scale-[1.02] blur-xl",
          rounded,
          className,
        )}
        src={src}
        alt={alt}
        loading={loading}
        priority={loading === "eager"}
        quality={100}
        onLoad={() => setLoading(true)}
        {...rest}
      />
    </div>
  );
};
