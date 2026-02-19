import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  WeatherDataDesktopV5,
  WeatherDataMobile,
  WeatherError,
  WeatherHeader,
  WeatherSkeleton,
} from "./WeatherComponents";

export const WeatherCardDesktop = ({ weather, loading, error }) => {
  return (
    <Card
      className={cn(
        // light styles
        "bg-background [box-shadow:0_12px_24px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.05),0_0_0_1px_rgba(0,0,0,.03)]",
        // dark styles
        "dark:bg-background transform-gpu dark:[box-shadow:0_-10px_50px_-10px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      )}
    >
      <WeatherHeader />

      <CardContent className="flex flex-col gap-4">
        {/* {loading && <WeatherSkeleton />} */}

        {error && !loading && <WeatherError />}

        <WeatherDataDesktopV5 weather={weather} loading={loading} />
      </CardContent>
    </Card>
  );
};

export const WeatherCardMobile = ({ weather, loading, error }) => {
  return (
    <Card
      className={cn(
        // light styles
        "bg-background [box-shadow:0_12px_24px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.05),0_0_0_1px_rgba(0,0,0,.03)]",
        // dark styles
        "dark:bg-background transform-gpu dark:[box-shadow:0_-10px_50px_-10px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      )}
    >
      <WeatherHeader />

      <CardContent className="flex flex-col gap-4">
        {loading && <WeatherSkeleton />}

        {!loading && error && <WeatherError />}

        {!loading && weather && <WeatherDataMobile weather={weather} />}
      </CardContent>
    </Card>
  );
};
