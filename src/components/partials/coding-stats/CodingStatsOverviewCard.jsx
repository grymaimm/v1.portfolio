import { TypographyH6 } from "@/components/elements/Typography";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function CodingStatsOverviewCard({ label, value }) {
  return (
    <Card
      className={cn(
        // light styles
        "bg-background [box-shadow:0_12px_24px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.05),0_0_0_1px_rgba(0,0,0,.03)]",
        // dark styles
        "dark:bg-background transform-gpu dark:[box-shadow:0_-10px_50px_-10px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      )}
    >
      <CardContent>
        <Label className="text-muted-foreground text-xs">{label}</Label>
        <TypographyH6 className="text-sm">{value || "-"}</TypographyH6>
      </CardContent>
    </Card>
  );
}
