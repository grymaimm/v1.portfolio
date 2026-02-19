import { cn } from "@/lib/utils";

/* =======================
   Heading
======================= */
export function TypographyH1({ children, className }) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyH5({ children, className }) {
  return (
    <h5
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h5>
  );
}

export function TypographyH6({ children, className }) {
  return (
    <h6
      className={cn(
        "scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h6>
  );
}

/* =======================
   Text
======================= */

export function TypographyP({ children, className }) {
  return <p className={cn("leading-7", className)}>{children}</p>;
}

export function TypographyLead({ children, className }) {
  return (
    <p className={cn("text-muted-foreground text-xl", className)}>{children}</p>
  );
}

export function TypographyLarge({ children, className }) {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
}

export function TypographySmall({ children, className }) {
  return (
    <small className={cn("text-sm leading-none font-medium", className)}>
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className }) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
  );
}

/* =======================
   Other
======================= */

export function TypographyBlockquote({ children, className }) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}

export function TypographyInlineCode({ children, className }) {
  return (
    <code
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
    >
      {children}
    </code>
  );
}

export function TypographyList({ children, className }) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
}

export function TypographyTable({ children, className }) {
  return (
    <div className={cn("my-6 w-full overflow-x-auto", className)}>
      <table className="w-full">{children}</table>
    </div>
  );
}
