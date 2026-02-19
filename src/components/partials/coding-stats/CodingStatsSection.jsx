"use client";
import { Highlight } from "@/components/elements/Highlight";
import { TypographyH4, TypographyP } from "@/components/elements/Typography";
import { BlurFade } from "@/components/magicui/blur-fade";
import { fetcher } from "@/lib/fetcher";
import { formatDistanceToNowStrict } from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiWakatime as WakatimeIcon } from "react-icons/si";
import useSWR from "swr";
import CodingStatsList from "./CodingStatsList";
import CodingStatsOverview from "./CodingStatsOverview";

export default function CodingStatsSection({ lastUpdate }) {
  const { data } = useSWR("/api/wakatime", fetcher);
  const [formattedLastUpdate, setFormattedLastUpdate] = useState(null);

  useEffect(() => {
    const formatLastUpdate = () => {
      const lastUpdateDate = lastUpdate || data?.last_update;
      if (lastUpdateDate) {
        const utcDate = fromZonedTime(lastUpdateDate, "Asia/Jakarta");
        const zonedDate = toZonedTime(utcDate, "Asia/Jakarta");
        const distance = formatDistanceToNowStrict(zonedDate, {
          addSuffix: true,
        });
        setFormattedLastUpdate(distance);
      }
    };

    formatLastUpdate();
  }, [lastUpdate, data]);

  const renderLastUpdate = () => {
    if (formattedLastUpdate) {
      return <span>{formattedLastUpdate}</span>;
    }
    return null;
  };

  return (
    <BlurFade inView delay={0.25}>
      <section className="mt-10">
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-x-4 space-y-1 mb-4">
          <div className="flex flex-col space-y-2">
            <TypographyH4>
              <Highlight className="flex items-center gap-2">
                <WakatimeIcon size={20} /> Coding Activity
              </Highlight>
            </TypographyH4>
            <TypographyP className="text-sm text-muted-foreground">
              <Link
                href="https://wakatime.com/@aiiimmmm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                My WakaTime
              </Link>{" "}
              coding activity over the last 7 days.
            </TypographyP>
          </div>
          <TypographyP className="text-sm text-muted-foreground italic">
            Last update: {renderLastUpdate()}
          </TypographyP>
        </div>
        <div className="flex flex-col gap-4">
          <CodingStatsOverview data={data} />
          <CodingStatsList data={data} />
        </div>
      </section>
    </BlurFade>
  );
}
