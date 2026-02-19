import { TypographyH5 } from "@/components/elements/Typography";
import { Highlighter } from "@/components/magicui/highlighter";
import { Skeleton } from "@/components/ui/skeleton";
import clsx from "clsx";
import CodingStatsProgress from "./CodingStatsProgress";

const sumTotalFromArray = (data, key) =>
  data?.reduce((acc, item) => acc + (item[key] || 0), 0) ?? 0;

const getTotalTimeDisplay = (hours, minutes) => {
  const totalMinutes = Math.floor((minutes % 3600) / 60);
  return `${hours + totalMinutes} hrs ${minutes} mins`;
};

const SkeletonList = () => (
  <ul className="flex flex-col gap-3.25 px-3.5 py-4">
    {[...Array(3)].map((_, index) => (
      <li key={index} className="flex items-center gap-4">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-14" />
      </li>
    ))}
  </ul>
);

export default function CodingStatsList({ data }) {
  const actives = [
    {
      title: "Languages",
      total: getTotalTimeDisplay(
        sumTotalFromArray(data?.languages, "hours"),
        sumTotalFromArray(data?.languages, "minutes"),
      ),
      data: data?.languages,
      styles: {
        bg: "bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500",
        color: "oklch(62.3% 0.214 259.815)",
      },
    },
    {
      title: "Categories",
      total: getTotalTimeDisplay(
        sumTotalFromArray(data?.categories, "hours"),
        sumTotalFromArray(data?.categories, "minutes"),
      ),
      data: data?.categories,
      styles: {
        bg: "bg-gradient-to-r from-yellow-500 via-amber-500 to-red-500",
        color: "oklch(79.5% 0.184 86.047)",
      },
    },
  ];

  return (
    <div className="mt-2 flex flex-col gap-x-4 gap-y-6 xl:flex-row">
      {actives.map((item) => (
        <div
          key={item.title}
          className={clsx(
            item.styles.bg,
            "relative flex flex-1 flex-col gap-2 rounded-xl p-0.5 shadow-sm",
          )}
        >
          <div className="bg-background h-full w-full rounded-xl p-2">
            <TypographyH5 className="bg-background text-muted-foreground text-xs absolute -top-2.75 left-4 px-2">
              <Highlighter action="underline" color={item.styles.color}>
                {item.title}
              </Highlighter>
            </TypographyH5>
            {data ? (
              <ul className="flex flex-col gap-1 px-4 py-4">
                {item.data?.map((subItem) => (
                  <li key={subItem.name}>
                    <CodingStatsProgress
                      data={subItem}
                      className={item.styles.bg}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <SkeletonList />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
