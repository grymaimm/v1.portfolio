import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";
import { DotPattern } from "../magicui/dot-pattern";
import { FlickeringGrid } from "../magicui/flickering-grid";
import { GridPattern } from "../magicui/grid-pattern";
import { InteractiveGridPattern } from "../magicui/interactive-grid-pattern";

export const AnimatedGridPatternDemo = () => {
  return (
    <AnimatedGridPattern
      numSquares={30}
      maxOpacity={0.1}
      duration={2}
      repeatDelay={1}
      className={cn(
        "mask-[radial-gradient(800px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-70%] h-[200%] skew-y-12 md:inset-y-[-70%]",
      )}
    />
  );
};

export const InteractiveGridPatternDemo = () => {
  return (
    <InteractiveGridPattern
      className={cn(
        "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-70%] h-[200%] skew-y-12 md:inset-y-[-70%]",
      )}
    />
  );
};

export const FlickeringGridDemo = () => {
  return (
    <FlickeringGrid
      className={cn(
        "absolute inset-0 z-0 size-full w-full",
        "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
      )}
      squareSize={4}
      gridGap={6}
      color="#6B7280"
      maxOpacity={0.8}
      flickerChance={0.1}
      height={800}
      width={2800}
    />
  );
};

export const GridPatternDemo = () => {
  return (
    <GridPattern
      squares={[
        [4, 4],
        [5, 1],
        [8, 2],
        [5, 3],
        [5, 5],
        [10, 10],
        [12, 15],
        [15, 10],
        [10, 15],
        [15, 10],
        [10, 15],
        [15, 10],
      ]}
      className={cn(
        "mask-[radial-gradient(400px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
      )}
    />
  );
};

export const DotPatternDemo = () => {
  return (
    <DotPattern
      className={cn(
        "mask-[radial-gradient(300px_circle_at_center,white,transparent)]",
      )}
    />
  );
};
