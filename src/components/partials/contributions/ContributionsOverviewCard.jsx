import { NumberTicker } from "@/components/magicui/number-ticker";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function ContributionsOverviewCard({ label, value, unit }) {
  return (
    <Card
      className={cn(
        // light styles
        "bg-background [box-shadow:0_12px_24px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.05),0_0_0_1px_rgba(0,0,0,.03)]",
        // dark styles
        "dark:bg-background transform-gpu dark:[box-shadow:0_-10px_50px_-10px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      )}
    >
      <CardContent className="flex h-full flex-col justify-between gap-2">
        <Label className="text-muted-foreground text-xs">{label}</Label>
        <div>
          <NumberTicker
            value={value}
            className="text-2xl font-medium text-teal-600 dark:text-teal-400"
          />
          {unit && (
            <span className="text-sm text-teal-600 dark:text-teal-400">
              {" "}
              {unit}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
