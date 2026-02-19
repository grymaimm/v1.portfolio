import { TypographyP } from "@/components/elements/Typography";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function CardSkills({ name, icon }) {
  return (
    <Card
      className={cn(
        "py-1.5 rounded-xl",
        // light styles
        "bg-background [box-shadow:0_12px_24px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.05),0_0_0_1px_rgba(0,0,0,.03)]",
        // dark styles
        "dark:bg-background transform-gpu dark:[box-shadow:0_-10px_50px_-10px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      )}
    >
      <CardContent className="px-3 flex flex-row items-center justify-center gap-2">
        {icon} <TypographyP className="text-sm">{name}</TypographyP>
      </CardContent>
    </Card>
  );
}
