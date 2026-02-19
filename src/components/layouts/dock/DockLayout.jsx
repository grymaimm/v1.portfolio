import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

export default function DockLayout({ children }) {
  const bgBackground = "from-background via-background to-transparent";
  const bgCustom = "from-red-500 via-red-500 to-transparent";

  return (
    <nav
      className={cn(
        "z-1 fixed bottom-0 left-0 right-0 mx-auto w-full bg-linear-to-t px-6 pb-6 pt-16",
        bgBackground,
        // bgCustom,
      )}
    >
      <BlurFade inView delay={0.25}>
        {children}
      </BlurFade>
    </nav>
  );
}
